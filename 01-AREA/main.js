const Test = require(`./test/Test.js`);

const TEST = new Test();

// TEST.testClassPoint();
// TEST.testClassArea_Creation();
// TEST.testClassArea_UpdateInsideArea();
// TEST.testClassArea_UpdateFreeCellTab();
// TEST.testClassArea_UpdateArea();
// TEST.testClassArea_moveToFirstFreeCell();
// TEST.testClassArea_addPoint();
// TEST.testClassArea_movePoint();
// TEST.testClassArea_needAllInside();
TEST.benchmark();
// TEST.benchmarkHardcoreMode(); // A tester sur le Xeon de Mike