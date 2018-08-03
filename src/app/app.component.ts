import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  title = 'app';
  // config = {
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev'
  // };
}
