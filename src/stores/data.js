import { defineStore } from 'pinia';

import { request } from '@/main';
import { useResponseStore } from './response';

import { text } from "@/utils/text";

export const useDataStore = defineStore('data', {

    state: () => ({
        folders: localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders')) : [],
        cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],

        live: false,

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

            this.clearq();

            request({}, '/all').then(res => {
                if (!res.failed) {
                    let folders = res.data.folders;
                    let cards = res.data.cards;

                    /*for (let i = 0; i < folders.length; i++) {
                        let f = folders[i];

                        this.appendFolder([f.id, f.name, f.parent, f.theme]);
                    }*/

                    this.folders = folders;
                    this.cards = cards;

                    this.saveFolders();

                    /*for (let i = 0; i < cards.length; i++) {
                        let c = cards[i];

                        this.appendCard([c.id, c.q, c.a, c.folder]);
                    }*/

                    this.saveCards();

                    return true;
                } else {
                    useResponseStore().updateResponse("Failed to fetch data from server", "err");

                    return null;
                }
            })
        },
        addLoadq() {
            localStorage.setItem("load_data", true);
        },
        clearq() {
            localStorage.removeItem("load_data");
        },

        // CHECK DATA SIZE & REMOVE CACHED DATA //
        makeSpace() {
            let last_made_space = localStorage.getItem("last_made_space") || null;

            if (last_made_space && (Date.now() - last_made_space < 60000)) {
                return;
            }

            if (this.totalSize > this.limit) {
                localStorage.setItem("last_made_space", Date.now());

                // Sort cards by `updatedAt` (oldest first)
                let sortedCards = Object.values(this.cards).sort((a, b) => a.updatedAt - b.updatedAt);

                // clear q and a of each card
                for (let i = 0; i < sortedCards.length; i++) {
                    let id = sortedCards[i].id;

                    this.cards.find(c => c.id === id).q = null;
                    this.cards.find(c => c.id === id).a = null;
                    this.cards.find(c => c.id === id).cleared = true;
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

        // VERIFY CARDS THAT HAVE BEEN CLEARED //
        verifyCards(cards) {
            let arr = [];
            let failed = [];

            return Promise.all(cards.map((c, i) => {

                if (c.cleared) {
                    this.getCard(c.id).then(card => {
                        arr.push(card);
                    });
                } else {
                    arr.push(this.cards.filter(card => card.id === c.id)[0]);
                }

            })).then(() => {

                return arr;
            });
        },

        // EXTRACT ID FROM CARDS // 
        extractIdFromCards(cards) {
            try {
                if (cards.length > 0 && typeof cards[0] === 'object' && 'id' in cards[0]) {
                    cards = cards.map(card => card.id);
                }
            } catch (err) {
                cards = [cards];
                cards = cards.map(card => card.id);
            }

            return cards;
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

        // APPEND FOLDER //
        appendFolder([id, name, parent, theme]) {
            this.folders.unshift(
                {
                    id: id,
                    name: name,
                    parent: parent,
                    theme: theme,
                    updatedAt: new Date().getTime()
                }
            )

            this.saveFolders();
        },

        // APPEND CARD //
        appendCard([id, q, a, folder]) {
            this.cards.push(
                {
                    id: id,
                    q: q,
                    a: a,
                    folder: folder,
                    status: "0",
                    updatedAt: new Date().getTime()
                }
            )

            this.saveCards();
        },

        // CREATE CARDS //
        async createCards(cards, folder) {
            return await request({ cards: cards, folder: folder }, '/card/create-many').then(res => {
                if (!res.failed) {
                    let cards = res.data.cards;

                    this.cards = this.cards.concat(cards);

                    this.saveCards();

                    return true;
                } else {
                    return false;
                }
            })
        },

        // DELETE CARD //
        async deleteCards(cards) {
            // extract IDs from cards array
            cards = this.extractIdFromCards(cards);

            return await request({ cards: cards }, '/card/delete').then(res => {
                if (!res.failed) {
                    this.cards = this.cards.filter(card => !cards.includes(card.id));

                    console.log('Deleted cards:', cards);
                    console.log('Remaining cards:', this.cards.map(card => card.id));

                    this.saveCards();

                    return true;
                } else {

                    return false;
                }
            })
        },

        // UPDATE CARD //
        updateCard(cardId, q, a) {
            request({ id: cardId, q: q, a: a }, '/card/update').then(res => {
                if (!res.failed) {
                    let id = res.data.id;

                    this.cards[id]["q"] = q;
                    this.cards[id]["a"] = a;
                    this.cards[id]["updatedAt"] = new Date().getTime();

                    this.saveCards();

                    return true;
                } else {

                    return false;
                }
            })
        },

        // MARK CARD //
        async markCards(cards, mark) {
            // extract ID from cards array
            cards = this.extractIdFromCards(cards);

            return await request({ cards: cards, status: Number(mark) }, '/card/mark').then(res => {
                if (!res.failed) {

                    this.cards.forEach(card => {
                        if (cards.includes(card.id)) {
                            card.status = mark;
                        }
                    });

                    this.saveCards();

                    return true;
                } else {

                    return false;
                }
            })
        },

        // MOVE CARD //
        async moveCards(cards, folderId) {

            // extract ID from cards array
            cards = this.extractIdFromCards(cards);

            return await request({ cards: cards, folder: folderId }, '/card/move').then(res => {
                if (!res.failed) {
                    this.cards.forEach(card => {
                        if (cards.includes(card.id)) {
                            card.folder = folderId;
                            console.log('Moved card:', card.id, 'to folder:', folderId);
                        } else {
                            console.log('Card:', card.id, 'not found in provided cards array');
                        }
                    });

                    console.log("Cards to be moved:", cards);

                    this.saveCards();

                    return true;
                } else {

                    return false;
                }
            })
        },

        // GET CARD //
        async getCard(cardId) {
            let card = this.cards.find(card => card.id == cardId);

            if (card)
                return card;

            return await request({ id: cardId }, '/card/get').then(res => {
                if (res.failed) {

                    return false;
                }

                card = res.data;

                return this.deepClone(card);
            });

            return false;
        },

        // CREATE FOLDER //
        async createFolder([name, parent, theme]) {
            name = text.cleanup(name);
            return await request({ name: name, parent: parent, theme: theme }, '/folder/create').then((res) => {
                if (!res.failed) {
                    let id = res.data.id;

                    this.appendFolder([id, name, parent, theme]);

                    this.saveFolders();

                    return id;
                } else {
                    return false;
                }
            })
        },

        // DELETE FOLDER //
        async deleteFolder(folderId) {
            if (this.getDescendants(folderId, false).length > 0) {
                console.error("Cannot delete folder with descendants");
                return false;
            }

            if (this.getCardsByFolder(folderId).length > 0) {
                console.error("Cannot delete folder with cards");
                return false;
            }

            return await request({ folder: folderId }, '/folder/delete').then(res => {
                if (!res.failed) {
                    this.folders = this.folders.filter(folder => folder.id != folderId);
                    this.saveFolders();

                    return true;
                } else {
                    return false;
                }
            })
        },

        // GET FOLDER //
        async getFolder(folderId) {
            let folder = this.folders.find(folder => folder.id == folderId);

            if (folder)
                return await this.deepClone(folder);

            return await request({ id: folderId }, '/folder/get').then(res => {
                if (res.failed) {

                    return false;
                }

                folder = res.data;

                this.appendFolder([folder.id, folder.name, folder.parent, folder.theme]);

                return this.deepClone(folder);
            });
        },

        // UPDATE FOLDER THEME //
        async updateFolderTheme(id, theme) {
            return await request({ folder: id, theme: theme }, '/folder/update').then(res => {
                if (!res.failed) {
                    this.folders.find(f => f.id == id).theme = theme;
                    this.saveFolders();

                    return true;
                } else {
                    return false;
                }
            })
        },

        // UPDATE FOLDER NAME //
        async updateFolderName(id, name) {
            return await request({ folder: id, name: name }, '/folder/update').then(res => {
                if (!res.failed) {
                    this.folders.find(f => f.id == id).name = name;
                    this.saveFolders();

                    return true;
                } else {
                    return false;
                }
            })
        },

        // UPDATE FOLDER PARENT //
        async updateFolderParent(id, parent) {
            return await request({ folder: id, parent: parent }, '/folder/update').then(res => {
                if (!res.failed) {
                    this.folders.find(f => f.id == id).parent = parent;
                    this.saveFolders();

                    return true;
                } else {
                    return false;
                }
            })
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



/* // Sort cards by `updatedAt` (oldest first)
 let sortedCards = Object.values(this.cards).sort((a, b) => a.updatedAt - b.updatedAt);
 
 // While size is greater than limit, delete oldest card
 while (this.totalSize > this.limit && sortedCards.length > 0) {
     const oldestCard = sortedCards.shift();
 
     if (!this.removed.includes({ card: oldestCard.id, folder: oldestCard.folder.id }))
         this.removed.push({ card: oldestCard.id, folder: oldestCard.folder.id }); this.saveRemoved();
 
     this.deleteCard(oldestCard.id);
 }
 
 let sortedFolders = Object.values(this.folders).sort((a, b) => a.updatedAt - b.updatedAt);
 
 // While size is greater than limit, delete oldest folder
 while (this.totalSize > this.limit && sortedFolders.length > 0 && sortedCards.length == 0) {
     let descendants = this.getDescendants(sortedFolders.shift().id);
 
     for (let d of descendants) {
         this.deleteFolder(d);
     }
 
     this.deleteFolder(sortedFolders.shift().id);
 }*/



/*
 
async createCard([q, a, folder]) {
return await request({ q: q, a: a, folder: folder }, '/card/create').then(res => {
if (!res.failed) {
let id = res.data.id;

this.appendCard([id, q, a, folder]);

this.saveCards();

return id;
} else {
return false;
}
})
},
*/