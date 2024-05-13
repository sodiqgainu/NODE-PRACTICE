let http = require('http')
let fs = require('fs')
let url = require('url')


http.createServer((req, res) => {
    let q = req.url;
    if(q === '/'){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else if(q === '/about'){
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else if(q === '/service'){
            fs.readFile('service.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        
    }else if(q === '/contact'){
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        return res.end('404 not found')
    }
}).listen(3030, () => {
    console.log('server running on port 3030')
    
})

