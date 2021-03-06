
// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function (worker) {

            // Replace the dead worker, we're not sentimental
            console.log('Worker %d died :(', worker.id);
            cluster.fork();

        });

    // Code to run if we're in a worker process
} else {


var x = require('express');
var app = x();

var fib = function(n) {
    if(n <= 1) return 1;
    return fib(n-1) + fib(n-2);
}
function fib2(n, prev, cur) {
        if (prev == null) prev = 0;
        if (cur == null) cur = 1;
        if (n < 2) return cur;
        return fib(n--, cur, cur + prev);
}

app.get("/fib", function(req,res) {
        res.json({n: req.query.n, fib: fib(req.query.n)});
});

app.get("/smartfib", function(req, res) {
        res.json({n: req.query.n, fib: fib2(req.query.n)});
});

app.get('/', function(req,res) {
        res.send('hello paul!');
});

app.listen(8888, function(){});
}