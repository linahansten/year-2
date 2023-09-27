const lengthOfLastWord = function (s) {
    //array filter
    const words = s.split(' ').filter(word => word.length > 0)
    //sees if array is not empty and searches for the last word
    return words.length > 0 ? words[words.length - 1].length : 0
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("This is a longer string, but it still only counts the last word"))
