// idb.js (Utility file for IndexedDB management)
import { openDB } from 'idb';

const dbPromise = openDB('user-data-store', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('folders')) {
      db.createObjectStore('folders', { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains('cards')) {
      db.createObjectStore('cards', { keyPath: 'id' });
    }
  },
});

// Folder operations
export const getAllFolders = async () => {
  const db = await dbPromise;
  return db.getAll('folders');
};

export const getFolderById = async (id) => {
  const db = await dbPromise;
  return db.get('folders', id);
};

export const saveFolder = async (folder) => {
  const db = await dbPromise;
  return db.put('folders', folder);
};

export const deleteFolderById = async (id) => {
  const db = await dbPromise;
  return db.delete('folders', id);
};

// Card operations
export const getAllCards = async () => {
  const db = await dbPromise;
  return db.getAll('cards');
};

export const getCardById = async (id) => {
  const db = await dbPromise;
  return db.get('cards', id);
};

export const saveCard = async (card) => {
  const db = await dbPromise;
  return db.put('cards', card);
};

export const deleteCardById = async (id) => {
  const db = await dbPromise;
  return db.delete('cards', id);
};

// Utility functions to get by folder or update multiple records
export const getCardsByFolder = async (folderId) => {
  const db = await dbPromise;
  return db.getAllFromIndex('cards', 'folder', folderId);
};

export const updateCard = async (card) => {
  const db = await dbPromise;
  return db.put('cards', card);
};
