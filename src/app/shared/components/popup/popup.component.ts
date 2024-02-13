import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  private observable : Observable<any> ;
  private timer$ : Subscription | null = null ;

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>


  constructor(private modalService : NgbModal) {


   this.observable = timer(10000);
  }
  ngOnInit(): void {

   this.timer$  = this.observable.subscribe(()=> {
          this.openModal()
      })
  }

  ngOnDestroy(): void {
    this.timer$?.unsubscribe();
  }

  private openModal(): void {
    this.modalService.open(this.popup, { centered: true, backdrop: 'static' }).result.then(
      (result) => {
        // Modal closed with a result
        console.log(result);
      },
      (reason) => {
        // Modal dismissed (e.g., backdrop click or ESC button)
        console.log(reason);
      }
    );
  }

  closePopup() {
    this.modalService.dismissAll(); // Close all modals
  }

}
