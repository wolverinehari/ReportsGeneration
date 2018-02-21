import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialogcontent } from './dialogcontent'
import { tableData } from '../reportTableData';
import { ReportsdataserviceService } from '../reportsdataservice.service';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {
  @Input() tableContent: any;
  @Output() tableContentStatusChange = new EventEmitter<Element>();
  @Input() itemid: Number;
  ischecked:boolean=false;
  constructor(public dialog: MatDialog, public constantdataService: ReportsdataserviceService) { }
  dataObj: any = {
    id: 0,
    interviewdate: '',
    interviewtime: '',
    interviewtype: '',
    primaryinterviewer: '',
    comments: ''
  }
  ngOnInit() {
  }
  openDialog(event): void {
    var data;
    this.ischecked=false;
    if (!!this.itemid) {
      data = this.tableContent.data.filter(item => item.report == this.itemid)[0]
    } else {
      data = this.dataObj;
    }
    let dialogRef = this.dialog.open(Dialogcontent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        //result.interviewdate = !!result.interviewdate? (result.interviewdate.getMonth() + 1) + '/' + result.interviewdate.getDate() + '/' + result.interviewdate.getFullYear():'Date issue';//new Date(result.interviewdate.getMonth()+''+result.interviewdate.getDate(),result.interviewdate.getFullYear())
        this.tableContentStatusChange.emit(result);
      }
    });
  }
}