const http = require('http');
//const getvote = require('./getvote');
const getVoteRevision1 = require('./getVoteRevision1');
const server = http.createServer((req, res) => {
    res.status(200);
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
});

//getvote();
getVoteRevision1();