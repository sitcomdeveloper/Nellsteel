import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  SupportLanguages = ['fr', 'en']

  constructor(private translateService:TranslateService) {
    this.translateService.addLangs(this.SupportLanguages);
    this.translateService.setDefaultLang('fr');
    const browserlang = this.translateService.getDefaultLang();
    if (this.SupportLanguages.includes(browserlang)) {
      this.translateService.use(browserlang);
    }
  }
  selectLang(lang: string) {
    this.translateService.use(lang);

  }

  ngOnInit() {     
  
  

  }

}
