// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - Info about current module (file)
// process - Info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
  console.log('hello world');
}, 1000)

sayHi();