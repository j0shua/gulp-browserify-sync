var fs = require('fs'),
    baseDir = __dirname,
    tasksdir = __dirname + '/gulp-tasks/';


// foreach task file require(taskfil)(baseDir)
fs.readdirSync(tasksdir).forEach(function(filename){
    console.log('loading task [' + filename + ']');
    require(tasksdir + filename)(baseDir);
});
