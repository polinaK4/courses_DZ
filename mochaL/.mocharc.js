module.exports = {
    bail: false,
    color: true,
    delay: false,
    diff: true,
    exit: false, // could be expressed as "'no-exit': true"
    growl: false,
    parallel: false,
    recursive: false,
    reporter: 'mochawesome',
    retries: 1,
    slow: '75',
    sort: false,
    spec: ['test/**/*.spec.js'], // the positional arguments!
    timeout: '2000', // same as "timeout: '2s'"
    watch: false,
  };