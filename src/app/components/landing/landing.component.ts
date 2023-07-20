import { Component } from '@angular/core';

import {
  faArrowLeft,
  faArrowRight,
  faHeadset,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  faArrowRight = faArrowRight
  faArrowLeft = faArrowLeft
  faHeadset = faHeadset
  faPenRuler = faPenRuler
}
