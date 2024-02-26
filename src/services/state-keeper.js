const CommandStore = require('./command-store');
const SnapStore = require('./snap-store');

const commandStore = new CommandStore();
const snapStore = new SnapStore();

function saveCommand(cmd) {
    commandStore.addCommand(cmd, "user1");
}

function getCommands() {
    return commandStore.getCommandsSince(0);
}

function getCurrentCommandVersion() {
    return commandStore.getCurrentVersion();
}

function clearCommands() {
    return commandStore.clearCommands();
}

function saveSnapshot(snapshot) {
    snapStore.saveSnapshot(snapshot, "user1");
}

function getSnapshot() {
    return snapStore.getSnapshot();
}

function clearSnapshot() {
    return snapStore.clearSnapshot();
}

module.exports = {
    saveCommand,
    getCommands,
    getCurrentCommandVersion,
    clearCommands,
    saveSnapshot,
    getSnapshot,
    clearSnapshot
};