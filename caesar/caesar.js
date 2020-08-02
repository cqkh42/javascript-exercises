const caesar = function(string, jumps) {
  const arr = string.split("")
  let charCodes = arr.map(char => char.charCodeAt(0))
  const offsets = [65, 97]
  for (start in offsets) {
    let val = offsets[start]
    charCodes = charCodes.map(code => ((code >= val) && (code <= val+25)) ? (code+jumps-val+26)%26 + val : code)
  }
  const newChars = charCodes.map(code => String.fromCharCode(code))
  return newChars.join("")
}

module.exports = caesar
