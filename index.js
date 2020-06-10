const CronJob = require('cron').CronJob;
// New CronJob run a task every 5 seconds
const job = new CronJob('*/5 * * * * *',task);
// task to execute from cron job
function task(){
  console.log('My First Cron Job task run at: '+new Date() +'every 5 seconds.');
}
// start the cron
job.start();