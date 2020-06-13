import { Component} from '@angular/core';
declare const MyFile: any;

@Component({
  selector: 'app-scan',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {

  constructor() { }

  scanImage() {
    MyFile();
  }
  
}