import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nell-steel';
  SupportLanguages = ['en', 'fr']
  constructor(private translateService:TranslateService) {
    this.translateService.addLangs(this.SupportLanguages);
    this.translateService.setDefaultLang('fr');
    const browserlang = this.translateService.getDefaultLang();
    this.translateService.use(browserlang)
  }
  selectLang(lang: string) {
    this.translateService.use(lang);

  }
}
