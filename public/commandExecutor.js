// websocketClient.js
function CommandExecutor(spread) {

    let commandManager = spread.commandManager();

    this.fromCommands = (commands) => {
        if(commands && commands.length > 0) {
            commands.forEach(cmd => {
                cmd.command.outer = true;
                commandManager.execute(cmd.command);
            });
        }
    }
}

export default CommandExecutor;
