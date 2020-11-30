/**
 *
 * @param name The name of Logging
 * @param args The arguments to stringify
 */
function printLogConsole(name, args) {
  const current = new Date(Date.now()).toISOString();
  if (args) {
    console.info(`>> time: ${current}, name: ${name}, data: ${stringify(args)}`);
  } else {
    console.info(`>> time: ${current}, name: ${name}`);
  }
}

function printLogError(name, args) {
  const current = new Date(Date.now()).toISOString();
  if (args) {
    console.error(`>> time: ${current}, name: ${name}, Error: ${stringify(args)}`);
  } else {
    console.error(`>> time: ${current}, Error: ${name}`);
  }
}

function stringify(args) {
  const cache = [];
  return JSON.stringify(args, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.includes(value)) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
}

module.exports = {
  printLogConsole,
  printLogError
};