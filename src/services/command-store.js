class CommandStore {
    constructor() {
        this.commands = []; // Array to store commands
        this.version = 0; // Current version of the document
    }

    // Adds a command to the store
    addCommand(command, userId) {
        this.version++; // Increment document version with each command
        const commandEntry = {
            version: this.version,
            command,
            userId
        };
        this.commands.push(commandEntry);
    }

    // Retrieves all commands since the given version
    getCommandsSince(version) {
        return this.commands.filter(cmd => cmd.version > version);
    }

    // Gets the current version of the document
    getCurrentVersion() {
        return this.version;
    }
}

module.exports = CommandStore;