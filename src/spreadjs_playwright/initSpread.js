const { chromium } = require('playwright');
// const { initCommandManager } = require('./initCommandManager.js');

let page = null;

async function initSpreadJS() {
    if (page) return page;
    const browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/spreadjs.html`); // Update this path to your HTML file with SpreadJS
    await page.waitForFunction(() => window.GC && window.GC.Spread);
    if (page) {
        await page.evaluate(() => {
            const designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("gc-designer-container"));
            const spread = designer.getWorkbook();
            const commandManager = spread.commandManager();
            // 注销原生的 undo redo
            commandManager.setShortcutKey(null, GC.Spread.Commands.Key.z, true, false, false, false);
            commandManager.setShortcutKey(null, GC.Spread.Commands.Key.y, true, false, false, false);
            // 注册自定义 undo redo
            var undoCmd = {
                canUndo: false,
                execute: function (spread, options, isUndo) {
                    var Commands = GC.Spread.Sheets.Commands;
                    options.cmd = "undo";
                    if (isUndo) {
                        Commands.undoTransaction(spread, options);
                        return true;
                    } else {
                        Commands.startTransaction(spread, options);
                        var undoManager = spread.undoManager();
                        undoManager.undo();
                        Commands.endTransaction(spread, options);
                        return true;
                    }
                }
            };
            commandManager.register("undo", undoCmd, GC.Spread.Commands.Key.z, true, false, false, false);
            var redoCmd = {
                canUndo: false,
                execute: function (spread, options, isUndo) {
                    var Commands = GC.Spread.Sheets.Commands;
                    options.cmd = "redo";
                    if (isUndo) {
                        Commands.undoTransaction(spread, options);
                        return true;
                    } else {
                        Commands.startTransaction(spread, options);
                        var undoManager = spread.undoManager();
                        undoManager.redo();
                        Commands.endTransaction(spread, options);
                        return true;
                    }
                }
            };
            commandManager.register("redo", redoCmd, GC.Spread.Commands.Key.y, true, false, false, false);
        });
        console.log('完成commandManager初始化并设置undo、redo命令');
    } else {
        console.error('page 未完成初始化');
    }
    return page;
}

async function getWorkbook() {
    const json = await page.evaluate(() => {
        const designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("gc-designer-container"));
        const spread = designer.getWorkbook();
        return spread.toJSON();
    });
    return json;
}

module.exports = {
    initSpreadJS,
    getWorkbook
};