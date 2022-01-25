import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
export class sakthi
{
  name:any;
  crushname:any;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router,private back:BackendService){}
 async click(form:NgForm)
  {
    if(form.valid)
    {
      console.log(form.value);
      this.back.register(form.value).subscribe(res=>{
        console.log(res);
         this.router.navigate(['/result'], {
          queryParams: {
            name: form.value.name,
            crushname: form.value.crushname
          }
        });
      })
     
    }
  }
  Sakthi:sakthi=new sakthi();
  ngOnInit(): void {
  }

}

