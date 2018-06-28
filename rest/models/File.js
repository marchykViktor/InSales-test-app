const xlsx = require('node-xlsx').default;
const download = require('download');
const fs = require('fs');

const importObj = require('./Import');
const insales = require('../libs/insales')({
  id: process.env.insalesid,
  secret: process.env.insalessecret,
});

const options = {};
options.maxFileSize = 15728640;

function _validateCsv(file) {
  return new Promise((resolve, reject) => {

    // Получаем инфу файла
    fs.stat(file, (err, stats) => {

      // Проверям есть ли он вообще
      if (err) {
        reject('Файл не найден');
        return;
      };

      // Смотрим размер
      if (+stats.size > +options.maxFileSize) {
        _deleteFile(file);
        reject('Слишком большой размер файла');
      } else {
        resolve();
      }
    });
  });
}

function _parseCsvFile(filePath) {
  const workSheetsFromBuffer = xlsx.parse(filePath);
  _deleteFile(filePath);

  return workSheetsFromBuffer;
};

function _deleteFile(filePath) {
  fs.unlinkSync(filePath);
};

function _generateImportField(arr, target) {
  var obj = {};

  if (target === 'collection') {
    obj.type = 'Колекции';
    obj.target = target;
    obj.data = [];

    for (let collection of arr) {
      const myArr = {
        name: collection.title,
        id: collection.permalink,
        permalink: 'product-collection-' + collection.permalink
      };

      obj.data.push(myArr);
    };
  } else if (target === 'fields') {
    obj.type = 'Доп. поля';
    obj.target = target;
    obj.data = [];

    for (let field of arr) {
      const myArr = {
        name: field.title,
        id: field.id,
        permalink: 'product-field-' + field.id
      };

      obj.data.push(myArr);
    };
  } else if (target === 'properties') {
    obj.type = 'Параметры';
    obj.target = target;
    obj.data = [];

    for (let property of arr) {
      const myArr = {
        name: property.title,
        id: property.permalink,
        permalink: 'product-property-' + property.id
      };

      obj.data.push(myArr);
    };
  } else if (target === 'options') {
    obj.type = 'Свойства';
    obj.target = target;
    obj.data = [];

    for (let option of arr) {
      const myArr = {
        name: option.title,
        id: option.id,
        permalink: 'variant-property-' + option.id
      };

      obj.data.push(myArr);
    };
  };

  return obj;
};

function _generateFileArr(fields, settings) {
  if (settings.length === 0) return fields;

  let newFieldsArr = [];

  for (let i = 0; i < fields.length; i++) {
    let obj = {};
    obj.value = fields[i];
    obj.default = settings[i];

    newFieldsArr.push(obj);
  }

  return newFieldsArr;
}

function getImportArr(user, link, callback) {
  const downloadOptions = {
    directory: './rest/uploads',
    filename: 'csv-' + user.insalesid + '.csv',
    filePath: './rest/uploads/csv-' + user.insalesid + '.csv'
  };

  const access = {
    token: user.token,
    url: user.insalesurl
  };

  var fieldsArr = [];

  // Строим ответ клиенту
  async function getResponse() {
    try {
      // Скачиваем файл
      await download(link, downloadOptions.directory, { filename: downloadOptions.filename });

      // Валидируем
      await _validateCsv(downloadOptions.filePath);

      // Парсим файл
      const file = await _parseCsvFile(downloadOptions.filePath);

      // Подгружаем инфу с магазина
      const collections = await insales.listCollection(access);
      const fields = await insales.getFields(access);
      const options = await insales.getOptions(access);
      const properties = await insales.getProperties(access);

      // Приводим все поля в единый вид
      fieldsArr.push(_generateImportField(collections.data, 'collection'));
      fieldsArr.push(importObj);
      fieldsArr.push(_generateImportField(fields.data, 'fields'));
      fieldsArr.push(_generateImportField(options.data, 'options'));
      fieldsArr.push(_generateImportField(properties.data, 'properties'));

      callback({
        data: {
          file: _generateFileArr(file[0].data[0], user.fields),
          fields: fieldsArr
        }
      });
    } catch (err) {
      callback({ error: err });
    }
  };

  getResponse();
};

module.exports.getImportArr = getImportArr;