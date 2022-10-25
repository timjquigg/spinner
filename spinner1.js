/*
Let's practice some more with setTimeout, this time creating a low-fidelity loading spinner.
 */

const spinner = () => {
  const characters = ['|', '/', '-', '\\','|', '/', '-', '\\', '|'];
  let delay = 100;
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
  
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

spinner();