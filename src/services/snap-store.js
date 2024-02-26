class SnapStore {
    constructor() {
        this.snapshot = null;
        this.version = 0;
    }

    saveSnapshot(snapshot, userId) {
        this.version++;
        const snapEntry = {
            version: this.version,
            snapshot,
            userId
        };
        this.snapshot = snapEntry;
    }

    getSnapshot() {
        return this.snapshot;
    }

    getCurrentVersion() {
        return this.version;
    }

    clearSnapshot() {
        this.snapshot = null;
        this.version = 0;
    }
}

module.exports = SnapStore;