/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.split('()').join('o');
    command = command.split('(al)').join('al');
    return command

};