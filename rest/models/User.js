const mongoose = require('mongoose');

const insales = require('../libs/insales')({
  id: process.env.insalesid,
  secret: process.env.insalessecret,
});

const UserSchema = mongoose.Schema({
  insalesid  : Number, // id магазина
  insalesurl : String, // урл магазина
  token      : String, // ключ доступа к api
  autologin  : String, // сохраняется ключ автологина
  domain     : String, // домен сайта
  name       : String, // имя клиента (также используется для автоматического создания первого менеджера)
  email      : String, // email клиента (его логин)
  phone      : String, // телефон клиента в международном формате
  fileUrl    : String, // ссылка на файл выгрузки
  password   : String, // Пароль: применяется только для админов
  created_at : Date, // дата создания записи
  updated_at : Date, // дата изменения записи
  fields     : Array, // Поля из настройки файла
  settings   : { type: Object, default: { typeImport: 'quantity', intervals: '1', timeForImport: '12:00' } }, // Настройки пользователя
  enabled    : Boolean, // установлено или нет приложение для магазина
  isAdmin    : { type: Boolean, default: false }, // установлено для админа, задаётся непосредственно в БД
});

module.exports = mongoose.model('UserModel', UserSchema);