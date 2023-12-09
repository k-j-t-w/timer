// sets an array based off command line commands
let alarmTimes = process.argv.slice(2);
//loops over every element in our array, first converts strings to numbers (as our process.argv inputs strings), then checks if the element is a number, then checks that the number is greater than or equal to 0, then does the following
for (let time of alarmTimes) {
  time = Number(time);
  if (typeof time === "number" && time >= 0) {
    // sets a timer for out "time" (converted to seconds with * 1000)
    setTimeout(() => {
    // \x07 did not work for me, I've used "." instead of a beep
      process.stdout.write('.');
    }, time * 1000);
  }
}