let arr = process.argv.slice(2);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && !isNaN(Number(arr[i])))
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000 * arr[i]);

}