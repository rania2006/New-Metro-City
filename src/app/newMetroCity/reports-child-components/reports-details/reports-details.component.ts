import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf"

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fromdisplayMonths = 1;
	fromnavigation = 'select';
	fromshowWeekNumbers = false;
	fromoutsideDays = 'visible';

  todisplayMonths = 1;
	tonavigation = 'select';
	toshowWeekNumbers = false;
	tooutsideDays = 'visible';

  



  generatePdfFile(){
    
    let data = document.getElementById('dailyReports')
    this.generatePdf(data)
   
  }
  generatePdf(htmlContent){
    html2canvas(htmlContent).then(canvas=>{
      let imgWidth =290;
      let imgHeight = (canvas.height * imgWidth/canvas.width)
      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l','mm','a4')
      var position = 10;
      pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imgHeight);
      pdf.save('daily-sales-report.pdf')

    })

  }

  public exportTableToExcel(): void{
    const downloadLink = document.createElement('a');
    const dataType= 'application/vnd.ms-excel';
    const table = document.getElementById('dailyReports');
    const tableHtml = table.outerHTML.replace(/ /g,  '%20');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ' ' + tableHtml;
    downloadLink.download = 'dailySalesReports.xls';
    downloadLink.click();
  }
  


}
