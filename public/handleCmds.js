// 处理 fill 和 clipboardPaste 的情况
function handleCmds(cmd, GC) {
    switch(cmd.cmd) {
        case 'fill':
            // 如果是 fill 命令，需要手动创建 Range 对象
            handleFill(cmd, GC);
            break;
        case 'clipboardPaste':
            // 如果是 clipboardPaste 命令，需要处理行头、列头问题
            handlePaste(cmd, GC);
            break;
   }
}

function handleFill (cmd, GC) {
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
function handlePaste (cmd, GC) {
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

export default handleCmds;