var express = require('express'),
    app = express();

app.use(express.static('dist'));
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});