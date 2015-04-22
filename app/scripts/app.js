var Router = require('./router');
var ImageActions = require('./actions/imageactions');

setInterval(function() {
    ImageActions.fetchList(); 
}, 5000);

Router.start();