const { spreadKey, designerKey } = require('./license');

const mockBrowser = require("mock-browser").mocks.MockBrowser;
global.window = mockBrowser.createWindow();
global.document = window.document;
global.navigator = window.navigator;
global.HTMLCollection = window.HTMLCollection;
global.getComputedStyle = window.getComputedStyle;
const fileReader = require("filereader");
global.FileReader = fileReader;
global.self = global;
global.canvas = window.canvas;

// const GC = require("@grapecity/spread-sheets");
const GC = require("@grapecity/spread-sheets-designer");
// const GCExcel = require("@grapecity/spread-excelio");

GC.Spread.Sheets.LicenseKey = spreadKey;
GC.Spread.Sheets.Designer.LicenseKey = designerKey;

// GCExcel.LicenseKey = spreadKey;

const designer = new GC.Spread.Sheets.Designer.Designer();
const spread = designer.getWorkbook();

function getWorkbook() {
    return spread.toJSON();
}

module.exports = {
    spread,
    GC,
    getWorkbook
}