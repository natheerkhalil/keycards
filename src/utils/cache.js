export function cacheFolders(folders) {
    localStorage.setItem('folders', JSON.stringify(folders));
}

export function getCachedFolders() {
    return JSON.parse(localStorage.getItem('folders')) || [];
}

export function cacheCards(cards) {
    localStorage.setItem('cards', JSON.stringify(cards)) || [];
}