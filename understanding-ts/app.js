var userInput;
var userName;
userInput = 5;
userInput = 'Nate';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
