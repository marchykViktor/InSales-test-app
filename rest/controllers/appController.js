// app controller routes
const express = require('express');
const router = express.Router();

const crypto   = require('crypto');
const moment   = require('moment');
const hat      = require('hat');


// Load user model
const User = require('../models/User');

// @route   GET /api/app/install
// @desc    Instal application
// @access  Public
router.get('/install', (req, res) => {
  console.log(req.query)
  if ((req.query.shop !== '') &&
      (req.query.token !== '') &&
      (req.query.insales_id !== '') &&
      req.query.shop &&
      req.query.token &&
      req.query.insales_id) {
    User.findOne({
      insalesid: req.query.insales_id,
    }, (err, a) => {
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
              //log.info(`Магазин id=${req.query.insales_id} Установлен`);
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
    User.findOne({
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

// @route   GET /api/app/autologin
// @desc    Auto user authorization
// @access  Public
router.get('/autologin', (req, res) => {
  console.log(req.query)
  if (req.query.token && (req.query.token !== '')) {
    User.findOne({
      autologin: req.query.token,
    }, (err, a) => {
      if (err) {
        errorNotify({
          id: req.query.insales_id,
          msg: 'Error when get shop info from mongodb',
          err: err,
        });
      } else {
        if (a) {
          console.log(a)
          //log.info(`Магазин id=${a.insalesid} Создаём сессию и перебрасываем на главную`);
          res.redirect('/');
        } else {
          //log.warn(`Ошибка автологина. Неправильный token при переходе из insales`);
          console.log('Ошибка автологина');
        }
      }
    });
  } else {
    const insid = req.query.insales_id;
    //log.info(`Магазин id=${insid} Попытка входа магазина`);
    if ((req.query.insales_id &&
         (req.query.insales_id !== '')) ||
        req.session.insalesid !== undefined) {
      User.findOne({
        insalesid: insid,
      }, (err, app) => {
        if (err) {
          errorNotify({
            id: req.query.insales_id,
            msg: 'Error when get shop info from mongodb',
            err: err,
          });
        } else {
          if (app.enabled === true) {
            if (false) {
              res.redirect('/');
            } else {
              //log.info(`Авторизация ${req.query.insales_id}`);
              const id = hat();
              app.autologin = crypto.createHash('md5')
                .update(id + app.token)
                .digest('hex');
              console.log(app.autologin);
              app.save(err => {
                if (err) {
                  errorNotify({
                    id: req.query.insales_id,
                    msg: 'Error when save autologin token',
                    err: err,
                  });
                } else {
                  res.redirect(`http://${app.insalesurl}/admin/applications/${process.env.insalesid}/login?token=${app.autologin}&login=http://225231-vds-mv2822811.gmhost.pp.ua:3000/api/app/autologin`);
                }
              });
            }
          } else {
            console.log('Приложение не установлено для данного магазина');
          }
        }
      });
    } else {
      console.log('Вход возможен только из панели администратора insales.ru <span class="uk-icon-long-arrow-right"></span> приложения <span class="uk-icon-long-arrow-right"></span> установленные <span class="uk-icon-long-arrow-right"></span> войти');
    }
  }
});

module.exports = router;