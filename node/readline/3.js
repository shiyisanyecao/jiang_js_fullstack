const readline = require('readline')
const completer = (line) => {
    // console.log(line);
    const command = 'npm'
    const subCommands = ['hello', 'init', 'install'];
    // 小于command 时 line 是command 的一部分
    if(line.length < command.length) {
        return [command.indexOf(line) === 0 ? [command] : [], line]
    }
    let hints = subCommands.filter(subCommand => {
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
    })
    if(hints.length === 1) {
        hints = hints.map(function(hit) {
            return [command, hit].join(' ');
        })
    }
    // 匹配多个 或者没有匹配
    return [hints.length ? hints : subCommands, line]
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
})
rl.prompt();