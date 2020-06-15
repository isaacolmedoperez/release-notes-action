var assert = require("assert");
var version = require("../version");
describe("Version", function () {
  describe("#lastVersion()", function () {
    describe("for launched versions [1.0, 1.1, 1.2, 3.0, 2.1, 2.0]", function () {
      const list = ["1.0", "1.1", "1.2", "3.0", "2.1", "2.0"];
      it("should return 2.1 when asking for last version before 2.2", function () {
        assert.equal(version.lastVersion("2.2", list), "2.1");
      });
      it("should return 2.1 when asking for last version before 2.3", function () {
        assert.equal(version.lastVersion("2.3", list), "2.1");
      });
      it("should return 1.2 when asking for last version before 1.3", function () {
        assert.equal(version.lastVersion("1.3", list), "1.2");
      });
      it("should return 1.2 when asking for last version before 2.0", function () {
        assert.equal(version.lastVersion("2.0", list), "1.2");
      });
      it("should return NULL when asking for last version before 1.0", function () {
        assert.equal(version.lastVersion("1.0", list), null);
      });
    });

    describe("for launched versions [1.0, 1.0.2, 1.0.1, 1.1, 1.2.4, 1.3.10, 2.1, 2.0]", function () {
      const list = [
        "1.0",
        "1.0.2",
        "1.0.1",
        "1.1",
        "1.2.4",
        "1.3.5",
        "1.3.10",
        "2.1.3",
        "2.0.7",
      ];
      it("should return 2.0.7 when asking for last version before 2.1", function () {
        assert.equal(version.lastVersion("2.1", list), "2.0.7");
      });
      it("should return 1.3.10 when asking for last version before 2.0", function () {
        assert.equal(version.lastVersion("2.0", list), "1.3.10");
      });
      it("should return 1.2.4 when asking for last version before 1.3", function () {
        assert.equal(version.lastVersion("1.3", list), "1.2.4");
      });
      it("should return 1.2 when asking for last version before 1.1", function () {
        assert.equal(version.lastVersion("1.1", list), "1.0.2");
      });
      it("should return NULL when asking for last version before 1.0", function () {
        assert.equal(version.lastVersion("1.0", list), null);
      });
    });
  });
});
