import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private back:BackendService) { }
  list:any;
  delete(sakthi:any)
  {
    if(confirm("Are you sure to delete "+sakthi.name)) {
      console.log("Implement delete functionality here");
      this.back.delete(sakthi._id).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
      })
    }
 
  }
  ngOnInit(): void {
    this.back.get().subscribe(res=>{
      console.log(res);
      this.list=res;
    })
  }

}
