import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  displayContent: string = "";

  constructor(
    private modalService: NgbModal,
  ) {
  }

  open(content: any, name: string){
    this.displayContent = name;
		this.modalService.open(content);
  }  
  
  close(){
    this.modalService.dismissAll();
  }
}
