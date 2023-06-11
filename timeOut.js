console.log('Hello the execution has started');

setTimeout(function cbfunc1() { 
    console.log('callback has been executed !');
}, 5000);

console.log('Execution finished');
