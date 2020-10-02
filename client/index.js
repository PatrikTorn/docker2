const app = require('express')();
const axios = require('axios');
const PORT = 3000;
const SERVER_PORT = 4000;

app.listen(PORT, () => {
    console.log("Client listening on port", PORT);
})

app.get('/', async (req, res) => {
    const serverResponse = await axios.post(`http://localhost:${SERVER_PORT}`);
    const serverIp = serverResponse.data;
    const myIp = req.connection.localAddress + ':' + req.connection.localPort
    const greetingText = "Hello from " + serverIp + " to " + myIp;
    res.send(greetingText);
});