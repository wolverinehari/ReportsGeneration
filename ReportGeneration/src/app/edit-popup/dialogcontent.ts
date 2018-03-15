import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-dialogcontent',
    templateUrl: 'dialogcontent.html',
    styleUrls: ['./dialogcontent.css']

})
export class Dialogcontent {
    dataInternal:any={
        isError:false,
        comment:''
    }
    isError:boolean=false;
     constructor(public dialogRef: MatDialogRef<Dialogcontent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmitClick(data):void{
            let check=false;
            this.data.column.forEach((element) => {
                if(element.toUpperCase().indexOf('COMMENTS')>=0 && this.data.data[element].length>0 ){
                    this.dialogRef.close(); 
                    check=false;      
                }else{
                    check=true;
                }
            }); 
            if(check){
            this.dataInternal.isError=true
                
            }
   }

}