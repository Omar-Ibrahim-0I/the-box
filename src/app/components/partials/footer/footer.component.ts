import { Component } from '@angular/core';
import {
  faFacebook,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  today = new Date().getUTCFullYear();
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;


}
