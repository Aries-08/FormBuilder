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
  deleteIcon: string = '-';

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
    this.generatedHtmlCode = '<form>';
    for (const element of this.formElements) {
      this.generatedHtmlCode += `<label for="${element.elementName}">${element.elementName}:</label>`;
      
      if (element.elementType === 'Select') {
        this.generatedHtmlCode += `<select name="${element.elementName}"`;
        this.generatedHtmlCode += `>`;
        
        for (const option of element.options) {
          this.generatedHtmlCode += `<option value="${option}">${option}</option>`;
        }
        
        this.generatedHtmlCode += `</select>`;
      } else {
        this.generatedHtmlCode += `<input name="${element.elementName}"`;
        
        if (element.required) {
          this.generatedHtmlCode += ` required`;
        }
        
        if (element.elementType === 'Text') {
          this.generatedHtmlCode += ` type="text" pattern="^[a-zA-Z]+$"`;
        } 
        else if (element.elementType === 'Email') {
          this.generatedHtmlCode += ` type="email"`;
        } 
        else if (element.elementType === 'Password') {
          this.generatedHtmlCode += ` type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{10,}$"`;
        } 
        else if (element.elementType === 'Date') {
          this.generatedHtmlCode += ` type="text" pattern="\\d{4}-\\d{2}-\\d{2}"`;
        }

        if (element.isRequired === 'Yes') {
          this.generatedHtmlCode += ` required`;
        }
        this.generatedHtmlCode += `>`;
      }
    }
    this.generatedHtmlCode += `<input type="submit" value="Submit"/></form>`;
  }  

  copyCode() {
    const textarea = document.createElement('textarea');
    textarea.value = this.generatedHtmlCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }  

  deleteElement(index: number): void {
    this.formElements.splice(index, 1);
  }
  
}