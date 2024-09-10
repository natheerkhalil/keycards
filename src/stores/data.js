import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {

    state: () => ({
        folders: localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders')) : [],
        cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],

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
    }),

    actions: {

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

            console.log("Folders saved to local storage: ", this.folders)
        },

        // RETURNING DATA //
        getCards(folder = null) {
            if (!folder)
                return this.deepClone(this.cards);
            else
                return this.deepClone(this.cards).filter(card => card.folder == folder);
        },

        getFolders(parent = null) {
            if (!parent)
                return this.deepClone(this.folders);
            else
                return this.deepClone(this.folders).filter(folder => folder.id == folder);
        },
        getOrphanFolders() {
            return this.deepClone(this.folders).filter(folder => folder.parent == null);
        },

        getThemes() {
            return this.deepClone(this.themes);
        },

        // CRUD CARD OPERATIONS //
        addCard([id, q, a, folder]) {
            this.cards.push({ id: id, q: q, a: a, folder: folder, status: "0" });
            this.saveCards();
        },
        deleteCard(cardId) {
            this.cards = this.cards.filter(card => card.id != cardId);
            console.log("Card deleted: ", cardId);
            this.saveCards();
        },
        editCard(cardId, updatedCard) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index !== -1) {
                this.cards[index] = updatedCard;
                this.saveCards();
            }
        },
        markCard(cardId, mark) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index !== -1) {
                this.cards[index]["status"] = mark;
                this.saveCards();
            }
        },
        moveCard(cardId, folderId) {
            const index = this.cards.findIndex(card => card.id == cardId);

            if (index!== -1) {
                this.cards[index]["folder"] = folderId;
                this.saveCards();
            }
        },
        readCard(cardId) {
            const card = this.cards.find(card => card.id == cardId);

            return this.deepClone(card);
        },

        // CRUD FOLDER OPERATIONS //
        addFolder([id, name, parent, theme]) {
            this.folders.push({
                id: id,
                name: name,
                parent: parent,
                theme: theme
            });
            this.saveFolders();
        },
        deleteFolder(folderId) {
            this.folders = this.folders.filter(folder => folder.id != folderId);
            this.saveFolders();
        },
        editFolder(folderId, type, val) {
            const index = this.folders.findIndex(folder => folder.id == folderId);

            if (index !== -1) {
                this.folders[index][type] = val;

                this.saveFolders();
            }
        },
        readFolder(folderId) {
            const folder = this.folders.find(folder => folder.id == folderId);

            if (folder)
                return this.deepClone(folder);
            else
                return null;
        },


        getAncestors(folderId) {
            let ancestors = [];
            let currentFolder = this.folders.find(folder => folder.id == folderId);
            while (currentFolder) {
                ancestors.unshift(currentFolder);
                currentFolder = this.folders.find(folder => folder.id == currentFolder.parent);
            }

            ancestors = ancestors.filter(f => f.id != folderId);

            return ancestors;
        },
        getChildren(folderId) {
            return this.deepClone(this.folders).filter(folder => folder.parent == folderId);
        }
    },
});