// app controller routes
const express = require('express');
const router = express.Router();

const crypto   = require('crypto');
const moment   = require('moment');


// Load user model
const User = require('../models/User');

// @route   GET /api/app/install
// @desc    Instal application
// @access  Public
router.get('/install', (req, res) => {
  if ((req.query.shop !== '') &&
      (req.query.token !== '') &&
      (req.query.insales_id !== '') &&
      req.query.shop &&
      req.query.token &&
      req.query.insales_id) {
    User.findOne({
      insalesid: req.query.insales_id,
    }, (err, a) => {
      console.log(a)
      if (err) {
        errorNotify({
          id: req.query.insales_id,
          msg: 'Error when install shop, step get info from mongodb',
          err: err,
        });
      } else {
        if (a === null) {
          const app = new User({
            insalesid  : req.query.insales_id,
            insalesurl : req.query.shop,
            token      : crypto.createHash('md5')
              .update(req.query.token + process.env.insalessecret)
              .digest('hex'),
            name       : '',
            email      : '',
            phone      : '',
            domain     : '',
            created_at : moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            updated_at : moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            enabled    : true,
          });
          app.save(err => {
            if (err) {
              errorNotify({
                id: req.query.insales_id,
                msg: 'Error when install shop, step save info to mongodb',
                err: err,
              });
            } else {
              res.sendStatus(200);
            }
          });
        } else {
          a.token = crypto.createHash('md5')
            .update(req.query.token + process.env.insalessecret)
            .digest('hex');
          a.js = false;
          a.name = '';
          a.email = '';
          a.phone = '';
          a.domain = '';
          a.updated_at = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ');
          a.enabled = true;
          a.save(err => {
            if (err) {
              errorNotify({
                id: req.query.insales_id,
                msg: 'Error when install shop, step update info to mongodb',
                err: err,
              });
            } else {
              log.info(`Магазин id=${req.query.insales_id} Установлен`);
              res.sendStatus(200);
            }
          });
        }
      }
    });
  } else {
    res.status(403).send('Ошибка установки приложения');
  }
});

// @route   GET /api/app/uninstall
// @desc    Uninstal application
// @access  Public
router.get('/uninstall', (req, res) => {
  if ((req.query.shop !== '') &&
      (req.query.token !== '') &&
      (req.query.insales_id !== '') &&
      req.query.shop &&
      req.query.token &&
      req.query.insales_id) {
    Apps.findOne({
      insalesid: req.query.insales_id,
    }, (err, a) => {
      if (a.token === req.query.token) {
        a.js = false;
        a.updated_at = moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ');
        a.enabled = false;
        a.save(err => {
          if (err) {
            errorNotify({
              id: req.query.insales_id,
              msg: 'Error when uninstall app, step update info to mongodb',
              err: err,
            });
          } else {
            res.sendStatus(200);
            const msg = {
              message: "-1 установка",
              title: "Обратный звонок",
            };
          }
        });
      } else {
        res.status(403).send('Ошибка удаления приложения');
      }
    });
  } else {
    res.status(403).send('Ошибка удаления приложения');
  }
});

// @route   GET /api/app/reg
// @desc    reg
// @access  Public
router.get('/reg', (req, res) => {
  res.send(req);
});

module.exports = router;