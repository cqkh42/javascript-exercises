const sumAll = function(a, b) {
    let sum = 0;
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    if (start < 0 || typeof(a) != "number" || typeof(b) != "number") {
      return "ERROR"
    }
    for (start; start <= end; start++){
      sum += start;
    }
    return sum
}

module.exports = sumAll
