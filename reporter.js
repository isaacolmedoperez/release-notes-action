Array.prototype.groupBy = function (func) {
  let groups = {};
  this.forEach((it) => {
    let v = func(it);
    if (!groups[v]) groups[v] = [];
    groups[v].push(it);
  });
  return Object.keys(groups).map((it) => {
    return { name: it, items: groups[it] };
  });
};

module.exports = class Reporter {
  constructor(version, url) {
    this.version = version;
    this.url = url;
  }

  generate(tasks) {
    var text = "";
    tasks
      .filter((a) => a)
      .sort((a, b) => {
        return a.compare(b);
      })
      .groupBy((i) => i.type)
      .forEach((i) => {
        text += `### ${i.name}\n`;
        i.items.forEach((it) => {
          text += `[${it.id}](${this.url}${it.id}): ${it.title}\n`;
        });
      });
    return text;
  }
};
