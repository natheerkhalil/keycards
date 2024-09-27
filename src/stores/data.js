import { defineStore } from 'pinia';
import {
    getAllFolders, getAllCards, getFolderById, getCardById, getCardsByFolder,
    saveFolder, saveCard, deleteFolderById, deleteCardById, updateCard
} from '@/utils/idb';

import { request } from '@/main';

export const useDataStore = defineStore({
    id: 'dataStore',
    state: () => ({
        folders: [],
        cards: [],

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
            try {
                // Clear IndexedDB before fetching new data to avoid duplicates
                await this.clearData();

                // Fetch data from the server
                const res = await request({}, '/all'); // Adjust URL as needed
                if (res.failed) {
                    console.error('Failed to fetch data from server');
                    return;
                }

                const { folders, cards } = res.data;

                // Save folders to IndexedDB
                for (const folder of folders) {
                    await saveFolder(folder);
                    this.folders.push(folder); // Update in-memory state
                }

                // Save cards to IndexedDB
                for (const card of cards) {
                    await saveCard(card);
                    this.cards.push(card); // Update in-memory state
                }

                console.log('Data successfully fetched and stored in IndexedDB');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
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
            return await getFolderById(id);
        },

        async getCardById(id) {
            return await getCardById(id);
        },

        async getCardsByFolder(folderId) {
            return await getCardsByFolder(folderId);
        },

        async getFoldersByParent(parentId) {
            return this.folders.filter(folder => folder.parent === parentId);
        },

        async getDescendants(folderId, removeSelf = true) {
            const descendants = [];
            const stack = removeSelf ? [] : [await getFolderById(folderId)];

            let currentFolder = await getFolderById(folderId);
            stack.push(...this.folders.filter(folder => folder.parent === folderId));

            while (stack.length) {
                const folder = stack.pop();
                descendants.push(folder);
                stack.push(...this.folders.filter(f => f.parent === folder.id));
            }

            return descendants;
        },

        async getAncestors(folderId, removeSelf = true) {
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
            const descendantFolders = await this.getDescendants(folderId, removeSelf);
            const cards = [];

            for (const folder of descendantFolders) {
                const folderCards = await getCardsByFolder(folder.id);
                cards.push(...folderCards);
            }

            return cards;
        },

        async getAncestorCards(folderId, removeSelf = false) {
            const ancestorFolders = await this.getAncestors(folderId, removeSelf);
            const cards = [];

            for (const folder of ancestorFolders) {
                const folderCards = await getCardsByFolder(folder.id);
                cards.push(...folderCards);
            }

            return cards;
        },

        async getOrphanFolders() {
            return this.folders.filter(folder => !folder.parent);
        },

        async getChildlessFolders() {
            return this.folders.filter(folder => {
                const childFolders = this.folders.filter(f => f.parent === folder.id);
                return childFolders.length === 0;
            });
        },

        // --- Modifying Data (Cards) ---
        async appendCard([id, q, a, folder]) {
            const card = { id, q, a, folder };
            await saveCard(card);
            this.cards.push(card);
        },

        async createCards(cards, folder) {
            await request({ cards, folder }, '/card/create-many');
            for (const card of cards) {
                const newCard = { ...card, folder };
                await saveCard(newCard);
                this.cards.push(newCard);
            }
        },

        async updateCard(cardId, q, a) {
            const card = await getCardById(cardId);
            if (card) {
                card.q = q;
                card.a = a;
                await updateCard(card);
            }
        },

        async markCards(cardIds, mark) {
            await request({ cards: cardIds, status: Number(mark) }, '/cards/mark');
            for (const cardId of cardIds) {
                const card = await getCardById(cardId);
                if (card) {
                    card.status = Number(mark);
                    await updateCard(card);
                }
            }
        },

        async moveCards(cardIds, folderId) {
            await request({ cards: cardIds, folder: folderId }, '/cards/move');
            for (const cardId of cardIds) {
                const card = await getCardById(cardId);
                if (card) {
                    card.folder = folderId;
                    await updateCard(card);
                }
            }
        },

        // --- Modifying Data (Folders) ---
        async appendFolder([id, name, parent, theme]) {
            const folder = { id, name, parent, theme };
            await saveFolder(folder);
            this.folders.push(folder);
        },

        async createFolder([name, parent, theme]) {
            const res = await request({ name, parent, theme }, '/folder/create');
            const folder = { id: res.data.id, name, parent, theme };
            await saveFolder(folder);
            this.folders.push(folder);
            return res.data.id;
        },

        async deleteFolder(folderId) {
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

            await request({ folder: folderId }, '/folder/delete');
            await deleteFolderById(folderId);
            this.folders = this.folders.filter(f => f.id !== folderId);
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
    }
});
