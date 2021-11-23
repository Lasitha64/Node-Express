const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('WelcomeTo Home page')
    }
    if(req.url === '/about'){
        res.end('WelcomeTo About page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Can't find the page</p>
    <a href="/"> back home</a>
    `)
    
    // res.write('Welcome')
    // res.end()
})

server.listen(5000)