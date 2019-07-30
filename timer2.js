//sets user input keys as immediate
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  //press ctrl + c; exits
  if (key === '\u0003') {
    console.log('Thanks for using me, Ciao!')
    process.exit();
  }
  //press b, beeps immediately
  else if (key === 'b') {
    console.log('beep');
    process.stdout.write('\x07');
  } else {
    //beeps if input is more than 0 and an integer 
    if (key > 0 && !isNaN(Number(key))) {
      process.stdout.write(`setting timer for ${key} seconds\n`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * key);  
    }
  }
});
