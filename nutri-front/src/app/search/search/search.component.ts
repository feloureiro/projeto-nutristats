import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { NodeService } from './../../node.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public alimento: String;
  public result: any;

  constructor(private ns: NodeService, private modalService: NgbModal) { }

  ngOnInit() {
    this.alimento = '';
    this.result = [];
  }

  getAlimentos(){
    this.ns.pesquisaAlimentos(this.alimento).subscribe(data => {
      this.result = data;
    });
  }

}
