// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names.js');
const sayHi = require('./05-utils.js');

sayHi(names.john);
sayHi(names.peter);

require('./07-mind-grenade.js');

