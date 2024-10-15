function duckCount() {
  return Object.values(arguments).reduce((prev, current) => {
    return Object.prototype.hasOwnProperty.call(current, "quack")
      ? prev + 1
      : prev;
  }, 0);
}
module.exports = duckCount;
