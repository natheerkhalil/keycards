import { defineStore } from 'pinia';
import {
    getAllFolders, getAllCards, getFolderById, getCardById, getCardsByFolder,
    saveFolder, saveCard, deleteFolderById, deleteCardById, updateCard, updateFolder,
} from '@/utils/idb';

import { request } from '@/main';

export const useDataStore = defineStore({
    id: 'dataStore',
    state: () => ({
        folders: [],
        cards: [],

        minimalCards: localStorage.getItem("min_cards") || [],
        minimalFolders: localStorage.getItem("min_folders") || [],

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
    }),
    actions: {
        async getAllData() {
            try {/*
                // Clear IndexedDB before fetching new data to avoid duplicates
                await this.clearData();
*/
                // If there's no queue to fetch data, return
                if (!this.existsq()) {
                    return;
                }

                // Fetch data from the server
                const res = await request({}, '/all'); // Adjust URL as needed
                if (res.failed) {
                    console.error('Failed to fetch data from server');
                    return;
                }

                const { folders, cards } = res.data;

                // Save cards to IndexedDB
                for (const card of cards) {
                    await saveCard(card);
                    this.cards.push(card); // Update in-memory state
                }

                // Save folders to IndexedDB
                for (const folder of folders) {
                    await saveFolder(folder);
                    this.folders.push(folder); // Update in-memory state
                }

                await this.setMinimal();

                // Clear queue
                this.clearq();

                console.log('Data successfully fetched and stored in IndexedDB');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        // Queue functions
        createq() {
            localStorage.setItem("load_data", true);
        },
        clearq() {
            localStorage.removeItem("load_data");
        },
        existsq() {
            return localStorage.getItem("load_data") == "true";
        },

        async loadStoredData() {
            // Load data from IndexedDB into in-memory state
            this.folders = await getAllFolders();
            this.cards = await getAllCards();
        },

        async clearData() {
            // Clear IndexedDB data before fetching new data
            const folders = await getAllFolders();
            for (const folder of folders) {
                await deleteFolderById(folder.id);
            }

            const cards = await getAllCards();
            for (const card of cards) {
                await deleteCardById(card.id);
            }

            // Clear in-memory state
            this.folders = [];
            this.cards = [];
        },

        // SET UP MINIMAL CARDS & FOLDERS //
        async setMinimal() {
            var cards = await this.getAllCards();
            var folders = await this.getAllFolders();

            cards = cards.map(card => ({ s: card.status, f: card.folder }));
            folders = folders.map(folder => ({ p: folder.parent, i: folder.id }));

            localStorage.setItem("min_cards", JSON.stringify(cards));
            localStorage.setItem("min_folders", JSON.stringify(folders));
        },

        getMinimalCards() {
            return JSON.parse(localStorage.getItem("min_cards"));
        },
        getMinimalFolders() {
            return JSON.parse(localStorage.getItem("min_folders"));
        },

        // --- Modifying Data (Cards) ---
        async appendCard([id, q, a, folder]) {
            id = Number(id);

            const card = { id, q, a, folder };
            let result = await saveCard(card);
            this.cards.push(card);
            return result;
        },

        async createCards(cards, folder) {
            const result = await request({ cards: cards, folder: folder }, '/cards/create');
            if (result.failed) return false;

            cards = result.data.cards;

            for (const card of cards) {
                const newCard = { ...card, folder };
                let result = await saveCard(newCard);
                this.cards.push(newCard);
            }

            return result;
        },

        async updateCard(cardId, q, a) {
            cardId = Number(cardId);

            const result = request({ id: cardId, q: q, a: a }, '/cards/update');
            if (result.failed) return false;

            const card = await getCardById(cardId);
            if (card) {
                card.q = q;
                card.a = a;
                return await updateCard(card);
            }
        },

        async markCards(cardIds, mark) {
            cardIds = cardIds.map(Number);
            mark = Number(mark);

            const result = await request({ cards: cardIds, status: mark }, '/cards/mark');
            if (result.failed) return false;

            for (const cardId of cardIds) {
                const card = await getCardById(cardId);
                if (card) {
                    card.status = mark;
                    await updateCard(card);
                }
            }

            return result;
        },

        async moveCards(cardIds, folderId) {
            cardIds = cardIds.map(Number);
            folderId = Number(folderId);

            const result = await request({ cards: cardIds, folder: folderId }, '/cards/move');
            if (result.failed) return false;

            for (const cardId of cardIds) {
                const card = await getCardById(cardId);
                if (card) {
                    card.folder = folderId;
                    await updateCard(card);
                }
            }

            return result;
        },

        async deleteCards(cardIds) {
            cardIds = cardIds.map(Number);

            const result = await request({ cards: cardIds }, '/cards/delete');
            if (result.failed) return false;

            for (const cardId of cardIds) {
                const card = await getCardById(cardId);
                if (card) {
                    await deleteCardById(cardId);
                    this.cards = this.cards.filter(c => c.id !== cardId);
                }
            }

            return result;
        },

        // --- Modifying Data (Folders) ---
        async updateFolderCards(folderId) {
            /*const cards = await this.getDescendantCards(folderId);

            let count = cards.length;
            let status = {
                "0": 0,
                "1": 0,
                "2": 0
            };

            for (let c of cards) {
                status[c.status] = status[c.status] + 1;
            }

            localStorage.setItem(`folder_card_count_${folderId}`, JSON.stringify(count));
            localStorage.setItem(`folder_card_status_${folderId}`, JSON.stringify(status));

            console.log("Cards of folder:", folderId, "have been updated with card count and status");*/
        },

        /*getFolderCards(folderId) {
            if (!localStorage.getItem(`folder_card_count_${folderId}`)) {
                this.updateFolderCards(folderId);
            }

            const count = Number(localStorage.getItem(`folder_card_count_${folderId}`));
            const status = JSON.parse(localStorage.getItem(`folder_card_status_${folderId}`));

            return { count: count, status: status };
        },*/
        getFolderCards(folderId) {
            let folders = this.getMinimalFolders();
            let cards = this.getMinimalCards();

            let startId = folderId;
            let removeSelf = false;
            let result = [];

            function traverse(currentId) {
                // Find the folder with the given currentId
                const currentFolder = folders.find(folder => folder.i === currentId);
                if (!currentFolder) return;
        
                // Add the current folder's id to the result array
                result.push(currentFolder.i);
        
                // Find all folders whose parentId is the current folder's id and recurse for each
                const childFolders = folders.filter(folder => folder.p == currentFolder.i);
                childFolders.forEach(childFolder => traverse(childFolder.i));
            }
        
            // Start traversing from the given startId
            traverse(startId);
        
            // If removeSelf is true, we remove the starting folder (i.e., folder A's id)
            if (removeSelf) {
                result.shift();  // Removes the first element (A's id) from the result array
            }
        
            // Find all cards whose folderId is in the result array
            const filteredCards = cards.filter(card => result.includes(card.f));

            let status = filteredCards.reduce((acc, card) => {
                acc[card.status] = (acc[card.status] || 0) + 1;
                return acc;
            }, { "0": 0, "1": 0, "2": 0 });
            let count = filteredCards.length;

            return { count: count, status: status };
        },

        async appendFolder([id, name, parent, theme]) {
            id = Number(id);

            const folder = { id, name, parent, theme };
            await saveFolder(folder);
            this.folders.push(folder);
        },

        async createFolder([name, parent, theme]) {
            const result = await request({ name, parent, theme }, '/folder/create');
            if (result.failed) return false;

            const folder = { id: Number(result.data.id), name, parent, theme };
            await saveFolder(folder);
            this.folders.push(folder);
            return result.data.id;
        },

        async updateFolder(folderId, name, parent, theme) {
            folderId = Number(folderId);

            const result = request({ folder: folderId, name: name, parent: parent, theme: theme }, '/folder/update');
            if (result.failed) return false;

            const folder = await getFolderById(folderId);
            if (folder) {
                folder.name = name;
                folder.parent = parent;
                folder.theme = theme;
                return await updateFolder(folder);
            }
        },

        async deleteFolder(folderId) {
            folderId = Number(folderId);

            const folder = await getFolderById(folderId);
            if (!folder) {
                console.error('Folder not found');
                return;
            }

            const descendants = await this.getDescendants(folderId);
            const cardsInFolder = await getCardsByFolder(folderId);

            if (descendants.length > 0 || cardsInFolder.length > 0) {
                console.error('Cannot delete folder with descendants or cards');
                return;
            }

            const result = await request({ folder: folderId }, '/folder/delete');
            if (result.failed) return false;

            await deleteFolderById(folderId);
            this.folders = this.folders.filter(f => f.id !== folderId);

            return result;
        },

        // --- Read Functions ---
        async getAllFolders() {
            this.folders = await getAllFolders();
            return this.folders;
        },

        async getAllCards() {
            this.cards = await getAllCards();
            return this.cards;
        },

        async getFolderById(id) {
            id = Number(id);
            return await getFolderById(id);
        },

        async getCardById(id) {
            id = Number(id);
            return await getCardById(id);
        },

        async getCardsByFolder(folderId) {
            folderId = Number(folderId);
            return await getCardsByFolder(folderId);
        },

        async getFoldersByParent(parentId) {
            parentId = Number(parentId);
            return this.folders.filter(folder => folder.parent === parentId);
        },

        async getChildren(folderId) {
            folderId = Number(folderId);
            return this.folders.filter(folder => folder.parent === folderId);
        },

        async getDescendants(folderId, removeSelf = true) {
            folderId = Number(folderId);

            const descendants = [];
            const stack = removeSelf ? [] : [await getFolderById(folderId)];

            stack.push(...this.folders.filter(folder => folder.parent === folderId));

            while (stack.length) {
                const folder = stack.pop();
                if (descendants.includes(folder)) continue;
                descendants.push(folder);
                stack.push(...this.folders.filter(f => f.parent === folder.id));
            }

            return descendants;
        },

        async getAncestors(folderId, removeSelf = true) {
            folderId = Number(folderId);

            const ancestors = [];
            let currentFolder = await getFolderById(folderId);

            if (!removeSelf) {
                ancestors.push(currentFolder);
            }

            while (currentFolder && currentFolder.parent) {
                currentFolder = await getFolderById(currentFolder.parent);
                ancestors.push(currentFolder);
            }

            return ancestors;
        },

        async getDescendantCards(folderId, removeSelf = false) {
            folderId = Number(folderId);

            const descendantFolders = await this.getDescendants(folderId, removeSelf);
            const cards = [];

            for (const folder of descendantFolders) {
                let id = Number(folder.id);
                const folderCards = await getCardsByFolder(id);
                cards.push(...folderCards);
            }

            return cards;
        },

        async getAncestorCards(folderId, removeSelf = false) {
            folderId = Number(folderId);

            const ancestorFolders = await this.getAncestors(folderId, removeSelf);
            const cards = [];

            for (const folder of ancestorFolders) {
                const folderCards = await getCardsByFolder(folder.id);
                cards.push(...folderCards);
            }

            return cards;
        },

        async getOrphanFolders() {
            await this.loadStoredData();

            return this.folders.filter(folder => !folder.parent);
        },

        async getChildlessFolders() {
            await this.loadStoredData();

            return this.folders.filter(folder => {
                const childFolders = this.folders.filter(f => f.parent === folder.id);
                return childFolders.length === 0;
            });
        },

        // CARD PROGRESS //
        getFolderCardProgress(id, noDescendants = false) {
            let count = this.getFolderCards(id).count;
            let status = this.getFolderCards(id).status;

            let col = {
                0: "var(--grey_5)",
                1: "var(--err_4)",
                2: "var(--succ_4)"
            };

            if (count === 0) {
                return `${col[1]} 0%, ${col[1]} 0%, ${col[2]} 0%, ${col[2]} 0%, ${col[0]} 0%, ${col[0]} 100%`;
            }

            let total = count;
            let redCount = status["1"];
            let greenCount = status["2"];
            let greyCount = status["0"];

            let redPercent = (redCount / total) * 100;
            let greenPercent = (greenCount / total) * 100;
            let greyPercent = (greyCount / total) * 100;

            let str = `${col[1]} 0%, ${col[1]} ${redPercent}%, ${col[2]} ${redPercent}%, ${col[2]} ${redPercent + greenPercent}%, ${col[0]} ${redPercent + greenPercent}%, ${col[0]} 100%`;

            return str;
        },
        async getFolderCardStatus(id, status, noDescendants = false) {
            let cards;

            if (noDescendants)
                cards = await this.getCardsByFolder(id);
            else
                cards = await this.getDescendantCards(id);

            return cards.filter(c => c.status == status).length;
        },
        getFolderProgressOverlay(id, noDescendants = false) {
            let st_0 = this.getFolderCards(id).status["0"];
            let st_1 = this.getFolderCards(id).status["2"];
            let st_2 = this.getFolderCards(id).status["1"];

            return `<span class="__bo __txt-err-4">${st_1}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-succ-2">${st_2}</span>

              &nbsp;

              <span class="__txt-grey-10">/</span>

              &nbsp;

              <span class="__bo __txt-grey-3">${st_0}</span>`;
        },

        // DEEPCLONE //
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

        // THEMES //
        getThemes() {
            return this.deepClone(this.themes);
        },

        // METHODS & SEPARATORS // 
        getMethod() {
            return this.deepClone(this.method);
        },
        getSeparators() {
            return {
                qa: this.deepClone(this.sep_qa),
                cd: this.deepClone(this.sep_cd)
            }
        },
        // UPDATE SEPARATORS //
        updateCardSeparators(sep_qa, sep_cd) {
            this.sep_qa = sep_qa;
            this.sep_cd = sep_cd;
            this.saveSeparators();
        },

        saveMethod() {
            localStorage.setItem('method', this.method);
        },
        saveSeparators() {
            localStorage.setItem('sep_qa', this.sep_qa);
            localStorage.setItem('sep_cd', this.sep_cd);
        },

        // TOGGLE METHOD //
        toggleMethod() {
            if (this.method === "m")
                this.method = "s";
            else
                this.method = "m";

            this.saveMethod();
        },
    }
});
