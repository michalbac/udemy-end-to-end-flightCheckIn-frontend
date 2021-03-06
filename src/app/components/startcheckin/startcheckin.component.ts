import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {

  reservationId:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(reservationId){
    this.router.navigate(['/checkIn', reservationId])
  }

}
