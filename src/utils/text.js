export const text = {
    cleanup: (txt, toLowerCase = false) => {
        if (toLowerCase) txt = txt.toLowerCase();
        return txt.replace(/^\s+|\s+$|(?<=\s)\s+/g, '');
    },
    
    toSentenceCase: (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1);
    }
}