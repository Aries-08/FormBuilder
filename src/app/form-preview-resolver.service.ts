import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPreviewResolver {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {

    ////changes to be made////
    const generatedHtmlCode: string = '<form><label>Sample Form Field:</label><input type="text"></form>';
    return of(generatedHtmlCode);
  }
}