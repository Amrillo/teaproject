import { Component, OnInit } from '@angular/core';
declare var $ : any; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
    $(document).ready(function() {
      $( function() {
        $( "#accordion" ).accordion({
            active: 1,
            animate: {
                duration: 300,
                easing: 'swing'
            },
            collapsible: true
        });
    } );
    });
  }
}
