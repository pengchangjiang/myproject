window.test = 124;
var target = 'webpack';
var message = `Hello ${target}!`;
setTimeout(() => {
    alert(message);
}, 1000);