import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormPreviewService {
  private generatedHtmlCode: string = '';

  setGeneratedHtmlCode(htmlCode: string): void {
    this.generatedHtmlCode = htmlCode;
  }

  getGeneratedHtmlCode(): string {
    return this.generatedHtmlCode;
  }
}
