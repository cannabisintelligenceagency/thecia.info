require('dotenv').config()
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

// const Prismic = require('prismic-javascript');
// const { linkResolver } = require('./helpers');
// const endPoint = process.env.PRSIMIC

const Cookies = require('cookies');
const cookieParser = require('cookie-parser');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:uid', (req, res) => {
      const nextJSPage = '/page';
      const queryParams = { uid: req.params.uid };
      app.render(req, res, nextJSPage, queryParams);
    })

    server.get('/intel/:uid', (req, res) => {
      const nextJSPage = '/intel/[uid]';
      const queryParams = { uid: req.params.uid };
      app.render(req, res, nextJSPage, queryParams);
    })

    server.get('/news/:uid', (req, res) => {
      const nextJSPage = '/news/[uid]';
      const queryParams = { uid: req.params.uid };
      app.render(req, res, nextJSPage, queryParams);
    })

    server.get('*', (req, res) => handle(req, res));


    // server.get('/preview', function (req, res) {
    //   const token = req.query.token;
    //   console.log(token)
    //   Prismic.getApi('https://thecia.cdn.prismic.io/api/v2', { req: req })
    //     .then((api) => api.previewSession(token, linkResolver, '/'))
    //
    //     res.redirect(302, url);
    //
    // });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
