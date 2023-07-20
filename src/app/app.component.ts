import { Component, OnInit } from '@angular/core';

import { CommunicationService } from 'src/library/services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private communication: CommunicationService
  ) { }

  ngOnInit(): void {
    if (this.communication.currentColorTheme) {
      document.body.classList.add(this.communication.currentColorTheme);
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.communication.setNewColorTheme('dark');
    }
    else
      this.communication.setNewColorTheme('light');
  }
}
