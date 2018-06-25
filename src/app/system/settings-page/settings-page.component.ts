import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SettingsService } from '../shared/_services/settings.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  fileForm: FormGroup;
  

  constructor(private api: SettingsService) { }

  ngOnInit() {
    this.createForm();
  } 

  createForm() {
    this.fileForm = new FormGroup({
      link: new FormControl,
    });
  };
  
  get f() { return this.fileForm.controls; }

  onFileSubmit() {
    this.api.editLink(this.f.link.value)
      .subscribe(
        data => {
          if (data){
            console.log(data)
          }
        },
        error => {
          console.log(error)
        });
  };

}
