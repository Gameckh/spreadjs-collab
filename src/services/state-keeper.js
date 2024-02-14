function executeCommand(cmd) {
    commandManager.execute(cmd);
}

function getWorkbook() {
    return spread.toJSON();
}

module.exports = {
    executeCommand,
    getWorkbook
};