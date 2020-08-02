const snakeCase = function(phrase) {
  let newPhrase = phrase.replace(/[^a-zA-Z]+/g, "_")
  newPhrase = newPhrase.replace(/_$/, "")
  if (newPhrase.includes("_")) {
    return newPhrase.toLowerCase()
  }
  newPhrase = newPhrase.replace(/([a-z])([A-Z])/g, "$1_$2")
  newPhrase = newPhrase.toLowerCase()

  return newPhrase

}

module.exports = snakeCase
