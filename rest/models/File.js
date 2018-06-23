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
    fs.stat(file, (err, stats) => {
      if (err) {
        reject('Файл не найден');
        return;
      };
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

function getFileFirstLine(user, link, callback) {
  var responseObject = {}

  const downloadOptions = {
    directory: './rest/uploads',
    filename: 'csv-' + user.insalesid + '.csv',
    filePath: './rest/uploads/csv-' + user.insalesid + '.csv'
  };

  async function getResponse() {
    try {
      await download(link, downloadOptions.directory, { filename: downloadOptions.filename });
      await _validateCsv(downloadOptions.filePath)
      const file = await _parseCsvFile(downloadOptions.filePath);
      const token = await insales.token(user.token);
      const collections = await insales.listCollection({ token: token, url: user.insalesurl })

      console.log(token);
      callback({ data: { file: file[0].data[0], collections: collections } });
    } catch (err) {
      callback({ error: err });
    }
  };

  getResponse();

};

module.exports.getFileFirstLine = getFileFirstLine;