// 1-stdin.js executes through command line:

/* 
It displays the message Welcome to Holberton School, what is your name?
The user inputs their name on a new line
The program display Your name is: INPUT
When the user ends the program, it displays "This important software is now closing"
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  read_name = process.stdin.read();

  if (read_name) {
    process.stdout.write(`Your name is: ${read_name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});