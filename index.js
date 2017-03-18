let express = require('express');
let path = require('path');
let app = express();

// Port to send stuff to
let PORT = 3000;

// Deliver static files
app.use(express.static('dist'));

app.get('/', (req,res) => {
    let indexFile = path.join(__dirname, 'views/index.html');
    res.sendFile(indexFile);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});



