const CronJob = require("cron").CronJob;
// New CronJob run a task every 5 seconds
const job = new CronJob("*/5 * * * * *", task, onComplete);

// task to execute from cron job
function task() {
  console.log("My First Cron Job task run at: " + new Date());
  console.log("Next task at: " + job.nextDates(1));
// call onComplete method
  this.onComplete();
}
function onComplete() {
  console.log("Task completed");
}
// start the cron jobjob.start();
// Add a health check every 10sec
setInterval(function () {
  console.log("-- health check -- Last Execution" , job.lastDate());
  console.log("-- health check -- Is job running? ", job.running);
  console.log("-- health check -- Next task at: " + job.nextDates());
}, 10*1000);