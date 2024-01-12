import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormPreviewService } from '../form-preview.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.css'
})
export class FormPreviewComponent implements OnInit {
  generatedHtmlCode: string = '';

  // constructor(private route : ActivatedRoute) {
  //   this.generatedHtmlCode = this.route.snapshot.data['generatedHtmlCode'];
  // }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // constructor(private formPreviewService : FormPreviewService) {}

  ngOnInit() {
    const formContainer = this.renderer.createElement('div');
    this.renderer.setProperty(formContainer, 'innerHTML', this.generatedHtmlCode);
    this.renderer.appendChild(this.el.nativeElement, formContainer);
  }
}
