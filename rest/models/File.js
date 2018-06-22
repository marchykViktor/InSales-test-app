"use strict";

const xlsx = require('node-xlsx').default;
const download = require('download-file');
const fs = require('fs');
const insales  = require('insales')({
  id: process.env.insalesid,
  secret: process.env.insalessecret,
});

const options = {};
options.maxFileSize = 15728640;

const _downloadFile = (insalesid, url) => {
  const downloadOptions = {
    directory: './rest/uploads',
    filename: 'csv-' + insalesid + '.csv'
  };

  return new Promise((resolve, reject) => {
    download(url, downloadOptions, function (err) {
      if (err) reject('Ошибка при загрузке файла');

      const filePath = downloadOptions.directory + '/' + downloadOptions.filename;

      fs.stat(filePath, (err, stats) => {
        if (err) {
          reject('Файл не найден');
          return;
        };
        if (+stats.size > +options.maxFileSize) {
          _deleteFile(filePath);
          reject('Слишком большой размер файла');
        } else {
          resolve(downloadOptions.directory + '/' + downloadOptions.filename);
        }
      });

    });
  });
};

function _parseCsvFile(filePath) {
  const workSheetsFromBuffer = xlsx.parse(filePath);
  _deleteFile(filePath);

  return workSheetsFromBuffer;
};

function _deleteFile(filePath) {
  fs.unlinkSync(filePath);
};

function getFileFirstLine(user, link, callback) {
  _downloadFile(user.insalesid, link)
    .then(function (result) {
      callback({ data: _parseCsvFile(result)[0].data[0] });
    }, function (err) {
      callback({ error: err });
    });
};

module.exports.getFileFirstLine = getFileFirstLine;