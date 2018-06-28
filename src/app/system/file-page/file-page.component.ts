import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SettingsService } from '../shared/_services/settings.service';
import { UserService, User } from '../../shared/index';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss']
})
export class FilePageComponent implements OnInit {

  fileForm: FormGroup;
  fieldsForm: FormGroup;
  user: User;
  fileBtnText: String = 'Загрузить файл';
  importSettings: Array<any>;
  fields: Array<any>;

  constructor(private settingsService: SettingsService, private userService: UserService) { }

  get gfile() { return this.fileForm.controls; }

  get gfields() { return this.fieldsForm.controls; }

  ngOnInit() {
    this.setUser();
    this.createForms();
  }

  createForms() {
    this.fileForm = new FormGroup({
      link: new FormControl,
    });
    this.fieldsForm = new FormGroup({});
  };

  onFileSubmit() {
    this.generateImportFieldsObj(this.gfile.link.value);
  };

  onFieldsSubmit() {
    let fieldsArr = [];

    for (let key in this.gfields) {
      fieldsArr.push(this.gfields[key].value)
    }

    this.settingsService.editFileSettings(fieldsArr)
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        });
  };

  setUser() {
    this.userService.getUser()
      .subscribe(
        data => {
          if (data) {
            this.user = data.user;
            this.importSettings = data.user.fields;

            if (data.user.fileUrl !== "") {
              this.generateImportFieldsObj(data.user.fileUrl);
              this.fileBtnText = "Обновить файл";
            };
          }
        },
        error => {
          console.log(error)
        });
  };

  generateImportFieldsObj(url) {
    this.settingsService.editLink(url)
      .subscribe(
        data => {
          if (data) {
            console.log(data);
            this.fileBtnText = "Обновить файл";
            this.toFormGroup(data.file);
            this.fields = data.fields;
            if (this.importSettings.length === 0) this.importSettings = data.file;
          }
        },
        error => {
          console.log(error)
        });
  };

  toFormGroup(elements: any) {
    let group: any = {};

    elements.forEach((element, i) => {
      group['field-' + i] = new FormControl('');
    });

    this.fieldsForm = new FormGroup(group);
  }
}
