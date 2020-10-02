const app = require('express')();
const cors = require('cors');
const PORT = 4000;
app.use(cors());

app.get('/', (req, res) => {
    const myIp = req.connection.localAddress + ':' + req.connection.localPort
    const clientIp = req.connection.remoteAddress + ':' + req.connection.remotePort
    const greetingText = "Hello from " + myIp + " to " + clientIp;
    console.log(greetingText);
    res.send(greetingText)
})

app.post('/', (req, res) => {
    const myIp = req.connection.localAddress + ':' + req.connection.localPort;
    res.send(myIp);
})

app.listen(PORT, () => {
    console.log("Application listening on port", PORT);
})