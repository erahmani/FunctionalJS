function countWords(inputWords) {
  return inputWords.reduce((prevResult, current) => {
    prevResult[current] = ++prevResult[current] || 1;
    return prevResult;
  }, {});
}

module.exports = countWords;
