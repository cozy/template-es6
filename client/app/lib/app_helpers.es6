(() => {
  // IIFE to avoid collisions with other variables
  (() => {
    // Make it safe to do console.log() always
    window.console = window.console || {};
    const console = window.console;
    const dummy = () => {};
    const methods = `assert,count,debug,dir,dirxml,error,exception,
                     group,groupCollapsed,groupEnd,info,log,markTimeline,
                     profile,profileEnd,time,timeEnd,trace,warn`.split(',');

    for (const method of methods) {
      console[method] = console[method] || dummy;
    }
  })();
})();
