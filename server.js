const express = require('express')
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Root } = require('./serverDist');

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/dist'))

function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  const context = {}
  const location = req.url;
  const reactElement = React.createElement(Root, { context, location, title: 'best title' });
  const html = ReactDOMServer.renderToString(reactElement);

  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    fs.readFile('./index.html', 'utf8', function (err, data) {
      if (err) throw err;

      // Inserts the rendered React HTML into our main div
      const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

      // Sends the response back to the client
      res.send(document);
    });
  }
}

app.get('*', handleRender)

app.listen(port)
console.log("server started on port " + port)

