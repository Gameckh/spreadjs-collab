const { initSpreadJS } = require('./initSpread');

async function executeCmd(text) {
    const page = await initSpreadJS();
    await page.evaluate(({ text }) => {
        const designer = GC.Spread.Sheets.Designer.findControl(document.getElementById("gc-designer-container"));
        const spread = designer.getWorkbook();
        console.log(text);
        let cmd = JSON.parse(text);
        console.log(cmd);
        // 标记当前命令不是本地命令
        cmd.outer = true;
        // 处理fill, clipboardPaste 等问题
        switch (cmd.cmd) {
            case 'fill':
                // 如果是 fill 命令，需要手动创建 Range 对象
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
                break;
            case 'clipboardPaste':
                // 如果是 clipboardPaste 命令，需要处理行头、列头问题
                if (cmd.pastedRanges) {
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
                break;
        }
        spread.commandManager().execute(cmd);
    }, { text });
}

module.exports = {
    executeCmd
}