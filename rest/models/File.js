const xlsx = require('node-xlsx').default;
const download = require('download');
const fs = require('fs');
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

function getFileArr(user, link, callback) {
  const downloadOptions = {
    directory: './rest/uploads',
    filename: 'csv-' + user.insalesid + '.csv',
    filePath: './rest/uploads/csv-' + user.insalesid + '.csv'
  };

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
      const collections = await insales.listCollection({ token: user.token, url: user.insalesurl })

      callback({ data: { file: file[0].data[0], collections: collections.data } });
    } catch (err) {
      callback({ error: err });
    }
  };

  getResponse();
};

module.exports.getFileFirstLine = getFileArr;