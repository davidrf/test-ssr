const express = require('express')
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { App } = require('./dist');

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/build'))

function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  const reactElement = React.createElement(App, { title: 'best title' });
  const html = ReactDOMServer.renderToString(reactElement);

  // Load contents of index.html
  fs.readFile('./index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);

    // Sends the response back to the client
    res.send(document);
  });
}

app.get('*', handleRender)

app.listen(port)
console.log("server started on port " + port)

