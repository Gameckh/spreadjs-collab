const CommandStore = require('./command-store');

const commandStore = new CommandStore();

function saveCommand(cmd) {
    commandStore.addCommand(cmd, "user1");
}

function getCommands() {
    return commandStore.getCommandsSince(0);
}

function getCurrentVersion() {
    return commandStore.getCurrentVersion();
}

module.exports = {
    saveCommand,
    getCommands,
    getCurrentVersion
};