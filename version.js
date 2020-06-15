Array.prototype.takeLast = function (n) {
  return this.slice(this.length > n ? this.length - n : 0);
};

const lastVersion = (next, list) => {
  return list
    .sort(compare)
    .filter((it) => compare(next, it) == 1)
    .takeLast(1)[0];
};

const compare = (a, b) => {
  var i = 0;
  const pa = a.split(".").map((it) => parseInt(it));
  const pb = b.split(".").map((it) => parseInt(it));
  for (var p of pa) {
    if (i < pb.length) {
      if (p > pb[i]) return 1;
      else if (p < pb[i]) return -1;
    }
    i++;
  }
  if (pa.length > pb.length) return 1;
  else if (pa.length < pb.length) return -1;
  return 0;
};

module.exports = { lastVersion };
