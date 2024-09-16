import { defineStore } from 'pinia';

import { request } from '@/main';

export const useDataStore = defineStore('data', {

    state: () => ({
        folders: localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders')) : [],
        cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],

        removed: localStorage.getItem('removed') ? JSON.parse(localStorage.getItem('removed')) : [],

        method: localStorage.getItem('method') || 'm',
        sep_qa: localStorage.getItem('sep_qa') || ']',
        sep_cd: localStorage.getItem('sep_cd') || '=',

        themes: [
            "aura",
            "dune",
            "ciel",
            "topiary",
            "navy",
            "alpine",
            "eventide",
            "mythical",
            "shroud",
            "lite"
        ],

        futureData: [],

        limit: (5 * 1024 * 1024),
    }),

    computed: {
        totalSize() {
            return (new Blob([JSON.stringify(this.folders)]).size) + (new Blob([JSON.stringify(this.cards)]).size) + (new Blob([JSON.stringify(this.method), JSON.stringify(this.sep_qa), JSON.stringify(this.sep_cd)]).size);
        },

        futureSize() {
            return this.totalSize + (new Blob([JSON.stringify(this.futureData)]).size);
        },

        oldestCardId() {
            return Math.min(...Object.values(this.cards).map(card => card.id));
        }
    },

    actions: {
        // FETCH ALL DATA FROM SERVER //
        getAllData() {
            request({}, '/all').then(res => {
                if (!res.failed) {
                    let folders = res.data.folders;
                    let cards = res.data.cards;

                    for (let i = 0; i < folders.length; i++) {
                        let f = folders[i];

                        this.createFolder([f.id, f.name, f.parent, f.theme]);
                    }

                    this.saveFolders();

                    for (let i = 0; i < cards.length; i++) {
                        let c = cards[i];

                        this.createCard([c.id, c.name, c.folder, c.question, c.answer, c.updatedAt]);
                    }

                    this.saveCards();
                } else {
                    useResponseStore().updateResponse("Failed to fetch data from server", "err");

                    return null;
                }
            })
        },

        // CHECK DATA SIZE & REMOVE CACHED DATA //
        makeSpace() {
            if (this.totalSize > this.limit) {
                // Sort cards by `updatedAt` (oldest first)
                let sortedCards = Object.values(this.cards).sort((a, b) => a.updatedAt - b.updatedAt);

                // While size is greater than limit, delete oldest card
                while (this.totalSize > this.limit && sortedCards.length > 0) {
                    const oldestCard = sortedCards.shift();

                    if (!this.removed.includes({ card: oldestCard.id, folder: oldestCard.folder.id }))
                        this.removed.push({ card: oldestCard.id, folder: oldestCard.folder.id }); this.saveRemoved();

                    this.deleteCard(oldestCard.id);
                }

                let sortedFolders = Object.values(this.folders).sort((a, b) => a.updatedAt - b.updatedAt);

                // While size is greater than limit and no cards left, delete oldest folder
                while (this.totalSize > this.limit && sortedFolders.length > 0 && sortedCards.length == 0) {
                    let descendants = this.getDescendants(sortedFolders.shift().id);

                    for (let d of descendants) {
                        this.deleteFolder(d);
                    }

                    this.deleteFolder(sortedFolders.shift().id);
                }
            }
        },

        // DEEP CLONE //
        deepClone(obj) {
            if (obj === null || typeof obj !== 'object') {
                return obj; // Return non-objects directly
            }

            // Handle Arrays
            if (Array.isArray(obj)) {
                return obj.map(item => this.deepClone(item));
            }

            // Handle Objects
            const clonedObj = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    clonedObj[key] = this.deepClone(obj[key]);
                }
            }
            return clonedObj;
        },

        // SAVING TO LOCAL STORAGE //
        saveCards() {
            localStorage.setItem('cards', JSON.stringify(this.cards));
        },

        saveFolders() {
            localStorage.setItem('folders', JSON.stringify(this.folders));
        },
        saveRemoved() {
            localStorage.setItem('removed', JSON.stringify(this.removed));
        },

        saveMethod() {
            localStorage.setItem('method', this.method);
        },
        saveSeparators() {
            localStorage.setItem('sep_qa', this.sep_qa);
            localStorage.setItem('sep_cd', this.sep_cd);
        },

        // ALL CARDS //
        getCards(folder = null) {
            if (!folder)
                return this.deepClone(this.cards);
            else
                return this.deepClone(this.cards).filter(card => card.folder == folder);
        },

        // CARDS BY FOLDER //
        getCardsByFolder(folder) {
            return this.deepClone(this.cards).filter(card => card.folder == folder);
        },

        // METHODS AND SEPARATORS //
        getMethod() {
            return this.deepClone(this.method);
        },
        getSeparators() {
            return {
                qa: this.deepClone(this.sep_qa),
                cd: this.deepClone(this.sep_cd)
            }
        },

        // ALL FOLDERS //
        getFolders(parent = null) {
            if (!parent)
                return this.deepClone(this.folders);
            else
                return this.deepClone(this.folders).filter(folder => folder.id == folder);
        },

        // CHILDLESS FOLDERS //
        getChildlessFolders() {
            return this.deepClone(this.folders).filter(f => this.getChildren(f.id).length == 0);
        },

        // FOLDERS BY PARENT //
        getFoldersByParent(parent) {
            return this.deepClone(this.folders).filter(folder => folder.parent == parent);
        },

        // ORPHAN FOLDERS //
        getOrphanFolders() {
            return this.deepClone(this.folders).filter(folder => folder.parent == null);
        },

        // FOLDER ANCESTORS //
        getAncestors(folderId, removeSelf = true) {
            let ancestors = [];
            let currentFolder = this.folders.find(folder => folder.id == folderId);
            while (currentFolder) {
                ancestors.unshift(currentFolder);
                currentFolder = this.folders.find(folder => folder.id == currentFolder.parent);
            }

            if (removeSelf)
                ancestors = ancestors.filter(f => f.id != folderId);

            return ancestors;
        },

        // FOLDER DESCENDANTS //
        getDescendants(folderId, includeOrigin = true) {
            let descendants = [];
            let stack = [folderId];

            if (includeOrigin) {
                const originFolder = this.folders.find(folder => folder.id == folderId);
                if (originFolder) {
                    descendants.push(originFolder);
                }
            }

            while (stack.length > 0) {
                let currentId = stack.pop();
                let children = this.folders.filter(folder => folder.parent == currentId);

                descendants.push(...children);
                stack.push(...children.map(child => child.id));
            }

            return descendants;
        },

        // FOLDER CHILDREN //
        getChildren(folderId) {
            return this.deepClone(this.folders).filter(folder => folder.parent == folderId);
        },

        // FOLDER PARENT //
        getParent(folderId) {
            return this.folders.find(folder => folder.id == this.folders.find(folder => folder.id == folderId).parent);
        },

        // ANCESTOR CARDS //
        getAncestorCards(folderId) {
            let folders = this.getAncestors(folderId);

            return folders.reduce((cards, folder) => {
                return cards.concat(this.getCardsByFolder(folder.id));
            }, []);
        },

        // DESCENDANT CARDS //
        getDescendantCards(folderId) {
            let folders = this.getDescendants(folderId);

            let cards = [];

            folders.forEach(f => {
                cards.push(...this.getCardsByFolder(f.id));
            })


            return cards;
        },

        // PARENT CARDS //
        getParentCards(folderId) {
            const parentFolder = this.folders.find(folder => folder.id == this.folders.find(folder => folder.id == folderId).parent);

            if (parentFolder)
                return this.getCardsByFolder(parentFolder.id);
            else
                return [];
        },

        // CHILDREN CARDS //
        getChildrenCards(folderId) {
            const children = this.folders.filter(folder => folder.parent == folderId);
            return children.reduce((cards, folder) => {
                return cards.concat(this.getCardsByFolder(folder.id));
            }, []);
        },

        // ALL THEMES //
        getThemes() {
            return this.deepClone(this.themes);
        },

        // CREATE CARD //
        createCard([id, q, a, folder]) {
            this.cards.push({ id: id, q: q, a: a, folder: folder, status: "0" });

            this.saveCards();
        },

        // DELETE CARD //
        deleteCard(cardId) {
            this.cards = this.cards.filter(card => card.id != cardId);

            this.saveCards();
        },

        // UPDATE CARD //
        updateCard(cardId, q, a) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index !== -1) {
                this.cards[index]["q"] = q;
                this.cards[index]["a"] = a;
                this.saveCards();
            }
        },

        // MARK CARD //
        markCard(cardId, mark) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index !== -1) {
                this.cards[index]["status"] = mark;
                this.saveCards();
            }
        },

        // MOVE CARD //
        moveCard(cardId, folderId) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index !== -1) {
                this.cards[index]["folder"] = folderId;
                this.saveCards();
            }
        },

        // GET CARD //
        getCard(cardId) {
            const card = this.cards.find(card => card.id == cardId);

            return this.deepClone(card);
        },

        // CREATE FOLDER //
        createFolder([id, name, parent, theme]) {
            this.folders.push({
                id: id,
                name: name,
                parent: parent,
                theme: theme
            });
            this.saveFolders();
        },

        // DELETE FOLDER //
        deleteFolder(folderId) {
            this.folders = this.folders.filter(folder => folder.id != folderId);
            this.saveFolders();
        },

        // GET FOLDER //
        getFolder(folderId) {
            const folder = this.folders.find(folder => folder.id == folderId);

            if (folder)
                return this.deepClone(folder);
            else
                console.error("Folder not found.");

            return null;
        },

        // UPDATE FOLDER THEME //
        updateFolderTheme(id, theme) {
            const index = this.folders.findIndex(folder => folder.id == id);

            if (index !== -1) {
                this.folders[index]["theme"] = theme;

                this.saveFolders();
            }
        },

        // UPDATE FOLDER NAME //
        updateFolderName(id, name) {
            const index = this.folders.findIndex(folder => folder.id == id);

            if (index !== -1) {
                this.folders[index]["name"] = name;

                this.saveFolders();
            }
        },

        // UPDATE FOLDER PARENT //
        updateFolderParent(id, parent) {
            const index = this.folders.findIndex(folder => folder.id == id);

            if (!this.folders.find(f => f.id == parent)) {
                console.error("Parent folder does not exist.")
                return;
            }

            if (index !== -1) {
                this.folders[index]["parent"] = parent;

                this.saveFolders();
            }
        },

        // FOLDER CARD PROGRESS //
        getFolderCardProgress(id, noDescendants = false) {
            let cards;

            if (noDescendants)
                cards = this.getCards(id);
            else
                cards = this.getDescendantCards(id);

            let col = {
                0: "var(--grey_5)",
                1: "var(--err_4)",
                2: "var(--succ_4)"
            };

            if (cards.length === 0) {
                return `${col[1]} 0%, ${col[1]} 0%, ${col[2]} 0%, ${col[2]} 0%, ${col[0]} 0%, ${col[0]} 100%`;
            }

            let total = cards.length;
            let redCount = cards.filter(c => c.status == "1").length;
            let greenCount = cards.filter(c => c.status == "2").length;
            let greyCount = cards.filter(c => c.status == "0").length;

            let redPercent = (redCount / total) * 100;
            let greenPercent = (greenCount / total) * 100;
            let greyPercent = (greyCount / total) * 100;

            let str = `${col[1]} 0%, ${col[1]} ${redPercent}%, ${col[2]} ${redPercent}%, ${col[2]} ${redPercent + greenPercent}%, ${col[0]} ${redPercent + greenPercent}%, ${col[0]} 100%`;

            return str;
        },
        getFolderCardStatus(id, status, noDescendants = false) {
            let cards;

            if (noDescendants)
                cards = this.getCards(id);
            else
                cards = this.getDescendantCards(id);

            return cards.filter(c => c.status == status).length;
        },
        getFolderProgressOverlay(id, noDescendants = false) {
            return `<span class="__bo __txt-err-4">${this.getFolderCardStatus(id, 1)}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-succ-2">${this.getFolderCardStatus(id, 2)}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-grey-3">${this.getFolderCardStatus(id, 0)}</span>`;
        },

        // UPDATE SEPARATORS //
        updateCardSeparators(sep_qa, sep_cd) {
            this.sep_qa = sep_qa;
            this.sep_cd = sep_cd;
            this.saveSeparators();
        },

        // TOGGLE METHOD //
        toggleMethod() {
            if (this.method === "m")
                this.method = "s";
            else
                this.method = "m";

            this.saveMethod();
        },
    },
});