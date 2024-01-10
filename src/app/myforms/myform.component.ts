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
  elementTypes: string[] = ['Text', 'Email', 'Date', 'Password', 'Select'];
  isRequiredOptions: string[] = ['Yes', 'No'];  
  newOption: string = '';
  newOptions: string[] = [];
  generatedHtmlCode: string = '';

  addOption(): void {
    if (this.newOption.trim() !== '') {
      this.newOptions.push(this.newOption);
      this.newOption = '';
    }
  }

  removeOption(option: string): void {
    const index = this.newOptions.indexOf(option);
    if (index !== -1) {
      this.newOptions.splice(index, 1);
    }
  }

  addElement(name: string, type: string, required: string): void {
    const element = {
      serialNumber: this.formElements.length + 1,
      elementName: name,
      elementType: type,
      isRequired: required,
      options: [...this.newOptions]
    };

    this.formElements.push(element);
    this.newElementName = '';
    this.newElementType = '';
    this.newIsRequired = '';
    this.newOptions = [];
  }

  areFieldsFilled(): boolean {
    if (this.newElementName.trim() === '' || this.newElementType === '' || this.newIsRequired === '') {
      return false;
    }
    if (this.newElementType === 'Select' && this.newOptions.length === 0) {
      return false;
    }
    return true;
  }

  resetComp(): void {
    this.formElements = [];
    this.newElementName = '';
    this.newElementType = '';
    this.newIsRequired = '';
    this.newOption = '';
    this.newOptions = [];
    this.generatedHtmlCode = '';
  }

  generateForm() {
    this.generatedHtmlCode = '<form class="PreForm">';
    for (const element of this.formElements) {
      this.generatedHtmlCode += `<div class="PreDiv"><label for="${element.elementName}">${element.elementName}:</label>`;
      if (element.elementType === 'Select') {
        this.generatedHtmlCode += `<select name="${element.elementName}" id="${element.elementName}">`;
        for (const option of element.options) {
          this.generatedHtmlCode += `<option value="${option}">${option}</option>`;
        }
        this.generatedHtmlCode += `</select>`;
      } else {
        this.generatedHtmlCode += `<input name="${element.elementName}" id="${element.elementName}" type="${element.elementType}"`;
        if (element.pattern) {
          this.generatedHtmlCode += ` pattern="${element.pattern}"`;
        }
        if (element.required) {
          this.generatedHtmlCode += ` required`;
        }
        this.generatedHtmlCode += `>`;
      }
      this.generatedHtmlCode += `</div>`;
    }
    this.generatedHtmlCode += `</form>`;  
  }

  copyCode() {
    const textarea = document.createElement('textarea');
    textarea.value = this.generatedHtmlCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }  
  
}