import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarComponent } from 'src/app/shared/container/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  //   @ViewChild('sidebar')
  //     sidebar!: SidebarComponent;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  sidebarStatus: boolean = false;
  ngOnInit(): void {}

  sidebarToggle(event: boolean) {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  //   ngAfterViewInit() {
  //     console.log(this.sidebar.sidenav);
  //   }
}
