import { Component, OnInit } from '@angular/core';
import { sideNavOptions } from '../../../environments/environment';
import { CommonModule } from "@angular/common";

interface option {
  title:string;
}

interface options{
  [key: string]: option[];
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

   navOptions :  options;

  ngOnInit(): void {
    this.navOptions = sideNavOptions;
  }

  returnZero() {     return 0;     }

}
