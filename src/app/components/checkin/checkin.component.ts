import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  public data:any;
  public numberOfBags:string;
  public checkInResponse:any;

  constructor(private router:Router, private route:ActivatedRoute, private service:DataService) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe(response=>{
      this.data=response;
    });
  }

  checkIn(numberOfBags){
    var checkInRequest:any = new Object();
    checkInRequest.id = this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags = numberOfBags;

    this.service.checkIn(checkInRequest).subscribe(response=>{
      this.checkInResponse=response;
    })
    this.router.navigate(['/confirm']);
  }

}
