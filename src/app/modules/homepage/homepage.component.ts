import { Component, OnInit, ViewContainerRef } from '@angular/core';

// Dynamic Component 
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.createMyModalComponent();
  }

  // adding dynamic component to your DOM with viewContainerRef
  createMyModalComponent() {
    this.viewContainerRef.createComponent(ModalComponent);
  }

}
