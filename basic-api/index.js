const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
response.send('Hello World!')
})

app.get('/notes', (request, response) => {
    const notes = [{
        text: 'Do homework!',
        link: 'https://etherscan.io'

    }, {
        text: 'Buy NFTs',
        link: 'https://Opensea.io'
    }]
    response.json({notes})
    })

app.listen(port, () => {
    console.log(`Notes backend is listening on port http://localhost:${port}`);
})