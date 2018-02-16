import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-dialogcontent',
    templateUrl: 'dialogcontent.html',
    styleUrls: ['./dialogcontent.css']

})
export class Dialogcontent {
    isError:boolean=false;
     constructor(public dialogRef: MatDialogRef<Dialogcontent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmitClick(data):void{
        if(!!data.comments && data.comments.length>0){
             this.dialogRef.close();
        }else{
            this.isError=true
        }
   }

}