const readline = require('readline');
const timer = require('./timer1');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => { 
  if(!isNaN(line) && line >= 1 && line <= 9) {
    process.stdout.write(`setting timer for ${line} seconds...\n`);
    timer(line);
} else if(line.toLowerCase() === 'b') {
  process.stdout.write(`\x07\rBEEP!`);
}
});
rl.on('SIGINT', () => {
  process.stdout.write(`Thanks for using me, ciao!\n`);
  rl.pause();
});