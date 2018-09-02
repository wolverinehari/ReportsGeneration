import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-saas-check',
  templateUrl: './saas-check.component.html',
  styleUrls: ['./saas-check.component.css']
})

export class SaasCheckComponent implements OnInit {
  constructor() { }
  admDivCheck:boolean=false;
  ngOnInit() {
   
  }
  onChange(newValue){
      if (newValue == 'V') {
        this.admDivCheck=false;
      } else {
        this.admDivCheck=true;
      }
  }
  makeXML(field, value) {
    return '<' + field + '>' + value + '</' + field + '>';
  }

  clickHandler() { 
    var items = $('#filterForm').serializeArray();
    var expanded = items.map(function (val) {
      return '<' + val.name + '>' + val.value + '</' + val.name + '>';//this.makeXML(val.name, val.value);
    });
    var payload = expanded.join('');
    var mode = $('#selFilter').val();
    $.ajax({
      type: "POST",
      url: 'http://zltstesasweb01.phs.org:7980/SASBIWS/rest/storedProcesses/Web/classdemo2/dataTargets/_WEBOUT',
      contentType: "application/xml",
      dataType: "text",
      data: "<stp><parameters><selFilter>" + mode + "</selFilter>" + (mode === 'V' ? '' : payload) + "</parameters></stp>",
      success: function (response) {
        console.log(response);
        $('#tableContainer').html(this.makeTable(JSON.parse(response).response));
      },
      error: function (err) {
        alert(err);
      }
    });
  }

  makeTable(response) {
    var columns = Object.keys(response[0]);
    var output = '<table><thead><tr><th>' + columns.join('</th><th>') + '</th></tr></thead>';
    var tableRows = response.map(function (item) {
      var row = columns.map(function (colname) {
        return '<td>' + item[colname] + '</td>';
      });
      return '<tr>' + row + '</tr>';
    });
    console.log(output);
    return output + '<tbody>' + tableRows.join('') + '</tbody></table>';
  }

}
