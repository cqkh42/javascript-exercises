const palindromes = function(string) {
  const first = string.toLowerCase().replace(/[^a-z]/g, "").split("")
  const second = [...first].reverse()
  return first.join("") == second.join("")
}

module.exports = palindromes
