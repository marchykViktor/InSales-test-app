export class User {
  domain?     : String; // домен сайта
  name?       : String; // имя клиента (также используется для автоматического создания первого менеджера)
  email?      : String; // email клиента (его логин)
  password?   : String; // Пароль клиента (для админа)
  fileUrl?    : String; // ссылка на файл выгрузки
  fields?     : any; // Поля из настройки файла
  settings?   : {}; // Настройки пользователя
}