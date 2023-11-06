const isUpperOrLower = (str) => {
    const lastChar = str.charAt(str.length - 1)

    if (/[A-Z]/.test(lastChar)) {
        return "upper"
    } else if (/[a-z]/.test(lastChar)) {
        return "lower"
    } else {
        return "none"
    }
}

console.log(isUpperOrLower('ABC'))
console.log(isUpperOrLower('A3@$'))
console.log(isUpperOrLower('aB4'))
