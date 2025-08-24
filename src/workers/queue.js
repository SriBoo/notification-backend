export async function enqueueJob(job) {
  console.log("Job enqueued:", job);
  import("./emailWorker.js").then(module => module.processEmail(job));
}
