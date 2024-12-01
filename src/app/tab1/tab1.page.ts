import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {InAppBrowserOptions} from "@ionic-native/in-app-browser";


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  constructor(private iab: InAppBrowser) {}

  openInAppBrowser() {
    const url = 'https://brappbeta.giltravel.com/';
    const options: InAppBrowserOptions = {
      location: 'yes',
      toolbar: 'yes',
    };

    const browser = this.iab.create(url, '_blank', options);

    browser.on('loadstart').subscribe((event) => {
      console.log('Browser loadstart:', event.url);

      if (event.url.includes('close-app://')) {
        browser.close();
      }
    });

    browser.on('exit').subscribe(() => {
      console.log('Browser closed.');
    });
  }
}
