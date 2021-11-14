const http = require('http')
const qs = require('querystring') 
const url = require('url') 

const Users = require('./users');

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3030

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        return handleGetReq(req, res)
    } 
})

function handleGetReq(req, res) {
    const { pathname } = url.parse(req.url)
    if (pathname !== '/users') {
        return handleError(res, 404)
    }
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(Users.getUsers()))
}

function handleError (res, code) { 
    res.statusCode = code 
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`) 
} 

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});