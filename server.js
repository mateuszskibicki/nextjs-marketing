const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const Prismic = require('prismic-javascript');

app
  .prepare()
  .then(() => {
    const server = express();
    // Here we are handling our custom route, this
    // now work for server side rendering
    server.get('/news/single/:uid', (req, res) => {
	
      const apiEndpoint = 'https://testintouch.prismic.io/api/v2';
 
      Prismic.api(apiEndpoint).then(api => {
        api.query(
          Prismic.Predicates.at('document.type', 'news')
        ).then(response => {

          const nextJsPage = 'news/single';
          const queryParams = { uid: req.params.uid };
    
          app.render({response}, res, nextJsPage, queryParams);


        });
      });



      //console.log('this is on server.js',req.params);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });