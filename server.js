var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'index.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
    case '/2010-large.jpg':
      sendFile(res, '2010-large.jpg')
      break
    case '/headshot.jpg':
      sendFile(res, 'headshot.jpg')
      break
    case '/wpi.jpg':
      sendFile(res, 'wpi.jpg')
      break
    case '/venice.jpg':
      sendFile(res, 'venice.jpg')
      break
    case '/css/materialize.css':
      sendFile(res, 'css/materialize.css')
      break
    case '/css/style.css':
      sendFile(res, 'css/style.css')
      break
    case '/image1.jpg':
      sendFile(res, 'image1.jpg')
      break
    case '/js/materialize.min.js':
      sendFile(res, 'js/materialize.min.js')
      break
    case '/js/init.js':
      sendFile(res, 'js/init.js')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(content, 'utf-8')
  })

}
