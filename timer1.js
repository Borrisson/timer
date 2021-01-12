let args = process.argv.slice(2).map(el => Number(el));
const timer = function(args) {
  for (const time of args) {
    if (!isNaN(time) || time >= 0) {
      setTimeout(() => {
        process.stdout.write(` After ${time} seconds\x07 \n`); // beep didn't work for me added a visual with it though
      }, time);
    }
  }
};

timer(args);