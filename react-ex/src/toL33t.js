const leetLetters = {
    'a': 4,
    'e': 3,
    'g': 6,
    'i': 1,
    'o': 0,
    's': 5,
    't': 7,    
}

const toLeet = (text) => text.split('').map(letter => leetLetters[letter.toLowerCase()] || letter);

export default toLeet;