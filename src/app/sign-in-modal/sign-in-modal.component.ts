import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../services/account.service';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {


  
  ngOnInit() {
  }
  closeResult: string;

  constructor(private modalService: NgbModal, private aService: AccountService, private dService: DataService) { }

  signedIn = this.aService.signedIn;
  modalReference: NgbModalRef;

  signIn() {
    this.aService.signedIn = true;
    this.signedIn = true
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  JoinAndClose() {
    this.modalReference.close();
  }

  logIn(email:string, passWord:string){
    //We are going to compare password stored in our service
    console.log(passWord)
    if(this.dService.checkCred(email, passWord)){
      alert("You are logged in!")
    }else{
      alert("You are not logged in, try again!")
    }
  }
}



