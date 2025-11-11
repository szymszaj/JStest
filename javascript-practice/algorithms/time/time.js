function log(msg) {
  const time = new Date().toISaOString();
  console.log(`[${time}] ${msg}`);
}

log('server started');