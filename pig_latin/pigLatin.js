function translate(phrase) {
	let words = phrase.split(" ")
	words = words.map(translate_word)
	return words.join(" ")
}

function translate_word(word){
	if (/^[aeiouAEIOU]/.test(word)){
		return word + "ay"
	}
	if (/^[^aeiou]/.test(word)){
		match = /^([^aeiou]?qu|[^aeiou]+)(.*)/g.exec(word)
		return match[2] + match[1] + "ay"
	}
}

module.exports = {
	translate
}
