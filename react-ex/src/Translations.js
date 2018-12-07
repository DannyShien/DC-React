export function toL33t(originalText) {
    const l33t = {
        A: '4',
        E: '3',
        G: '6',
        I: '1',
        O: '0',
        S: '5',
        T: '7',
    };
    
    const letterArray = originalText.split('');
    const l33tArray = letterArray.map(letter => {
        return l33t[letter.toUpperCase()] || letter;
    });
    return l33tArray.join('');
}

export function toUpperCase(originalText) {
    return originalText.toUpperCase();
}
