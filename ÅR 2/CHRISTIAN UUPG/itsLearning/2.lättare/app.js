
function removeChar(string, character) {
    if (character < 0 || character >= string.length) {
        return string
    }
    return string.slice(0, character) + string.slice(character + 1);
}
console.log(removeChar("Javascript", 0))
console.log(removeChar("Python", 3))
console.log(removeChar("Python", 5))
