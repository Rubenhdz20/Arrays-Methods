const letters = [1, 'a', 'b', 2];

function removeLetter(array) {
    return array.splice(0, 'a', 'b')
}

console.log(removeLetter(letters));

const moreLetters = ['a', 'b', 'c'];

moreLetters.forEach(item => console.log(item));