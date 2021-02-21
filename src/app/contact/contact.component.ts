import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email : any = {}
  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
  }
  
  sendEmail() {
    if(this.email.name && this.email.email && this.email.message){ 
      const payload = {
        name: this.email.name,
        email: this.email.email,
        message: this.email.message
      }
      this._commonService.post('https://3bik2esuja.execute-api.ap-south-1.amazonaws.com/prod', payload).subscribe(res => {
        console.log(res);
      })
    } else {
      console.log('form invalid');
      
    }
    
  }

}
