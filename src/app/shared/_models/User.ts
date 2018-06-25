export class User {
  insalesid?  : Number; // id магазина
  insalesurl? : String; // урл магазина
  domain?     : String; // домен сайта
  name?       : String; // имя клиента (также используется для автоматического создания первого менеджера)
  email?      : String; // email клиента (его логин)
  phone?      : String; // телефон клиента в международном формате
  fileUrl?    : String; // ссылка на файл выгрузки
  password?   : String; // Пароль: применяется только для админов
  created_at? : Date; // дата создания записи
  updated_at? : Date; // дата изменения записи
  fields?     : any; // Поля из настройки файла
  settings?   : {}; // Настройки пользователя
  enabled?    : Boolean; // установлено или нет приложение для магазина
  isAdmin?    : Boolean; // установлено для админа, задаётся непосредственно в БД
}