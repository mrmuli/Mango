const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of Mangoes
app.get('/api/getList', (req,res) => {
    var list = ["Green Mango", "Red Mango", "Yellow Mango"];
    res.json(list);
    console.log('Sent list of Mangoes');
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Mango is listening on port ' + port);