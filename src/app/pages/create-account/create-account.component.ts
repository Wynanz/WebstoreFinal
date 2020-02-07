import { Component, OnInit } from '@angular/core';
import { UserIn } from 'src/interfaces/user-in';
import { DataService } from 'src/app/services/data.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  signedIn = false;
  constructor(private dService: DataService, private aService: AccountService) { }

  ngOnInit() {
  }

  signUp(eM:string, pW:string,  confirmPW: string){
    //check if email is confirmed
    //check if password is the same
    
      if(pW === confirmPW){
        //check to see if email is taken
        if(this.dService.checkIfUserExists(eM)){
          alert("Email already taken!")
        }else{
          //send entire object to be added to userList
          let addThisName: UserIn ={
            email: eM,
            passWord: pW
          }
          this.dService.addUser(addThisName);
          console.log(addThisName)
        }
      }
    
  }
  logIn(email: string, passWord:string){
    if(this.dService.checkCred(email,passWord)){
      alert('You are logged In.')
    }else
      alert("Please try again.")
  }

  signIn() {
    this.aService.signedIn = true;
    this.signedIn = true
  }
  
}
