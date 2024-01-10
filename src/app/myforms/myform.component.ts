import { Component } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})

export class MyformComponent {
  newElementName: string = '';
  newElementType: string = '';
  newIsRequired: string = '';
  formElements: any[] = [];

  elementTypes: string[] = ['Text', 'Email', 'Date', 'Password'];
  isRequiredOptions: string[] = ['Yes', 'No'];  

  addElement(name: string, type: string, required: string): void {
    const element = {
      serialNumber: this.formElements.length + 1,
      elementName: name,
      elementType: type,
      isRequired: required
    };

    this.formElements.push(element);
    this.newElementName = '';
    this.newElementType = '';
    this.newIsRequired = '';
  }
}
