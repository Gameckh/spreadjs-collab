function initCommandManager(GC, spread) {
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
}

module.exports = {
    initCommandManager
};