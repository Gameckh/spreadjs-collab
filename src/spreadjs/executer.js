const { GC } = require('./initSpread')
const { commandManager } = require('./initCommandManager')


function executeCmd(text) {
    let cmd = JSON.parse(text);
    console.log(cmd);
    // 标记当前命令不是本地命令
    cmd.outer = true;
    // 处理fill, clipboardPaste 等问题
    handleCmds(cmd);
    commandManager.execute(cmd);
}

// 处理 fill 和 clipboardPaste 的情况
function handleCmds(cmd) {
    switch(cmd.cmd) {
        case 'fill':
            // 如果是 fill 命令，需要手动创建 Range 对象
            handleFill(cmd);
            break;
        case 'clipboardPaste':
            // 如果是 clipboardPaste 命令，需要处理行头、列头问题
            handlePaste(cmd);
            break;
   }
}

function handleFill (cmd) {
    cmd.startRange = new GC.Spread.Sheets.Range(
        cmd.startRange.row,
        cmd.startRange.col,
        cmd.startRange.rowCount,
        cmd.startRange.colCount
    );
    cmd.fillRange = new GC.Spread.Sheets.Range(
        cmd.fillRange.row,
        cmd.fillRange.col,
        cmd.fillRange.rowCount,
        cmd.fillRange.colCount
    );
}

//pastedRanges
function handlePaste (cmd) {
    if(cmd.pastedRanges){
        const newRanges = [];
        cmd.pastedRanges.forEach(range => {
            newRanges.push(new GC.Spread.Sheets.Range(
                range.row,
                range.col,
                range.rowCount,
                range.colCount
            ));
        });
        cmd.pastedRanges = newRanges;
    }
}

module.exports = {
    executeCmd
}