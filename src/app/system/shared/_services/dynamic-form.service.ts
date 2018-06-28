import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { };

  toFormGroup(elements: any){
    let group: any = {};

    elements.forEach((element, i) => {
      group['field-' + i] =  new FormControl(element.default || "");
    });

    return new FormGroup(group);
  }
}
