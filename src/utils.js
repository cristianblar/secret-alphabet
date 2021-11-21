export function findMaxStringValue(str) {
  return Object.values(
    str.split('').reduce((lettersObject, currentLetter) => {
      if (!lettersObject[currentLetter]) {
        lettersObject[currentLetter] = 1
        return lettersObject
      }
      lettersObject[currentLetter] += 1
      return lettersObject
    }, {})
  )
    .sort((a, b) => b - a)
    .map((quantity, index) => quantity * (26 - index))
    .reduce((accValues, value) => accValues + value)
}
