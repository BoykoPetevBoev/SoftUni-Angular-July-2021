import { Component, Input, OnInit } from '@angular/core';
import { InterfacePost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  @Input() posts: InterfacePost[] | undefined

  constructor() { }
}
