// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }
import { Component } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  page: number = 1;
  pageurl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }
}