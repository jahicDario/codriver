import { Component, OnInit } from '@angular/core';
import { MalfunctionService } from './malfunction.service';
import { Malfunction } from './malfunction';

@Component({
  moduleId: module.id,
  selector: 'malfunction',
  templateUrl: 'malfunction.component.html',
  styleUrls: ['../../static/css/malfunctions/1-col-portfolio.css', '../../static/css/bootstrap-grid.css',
    '../../static/css/bootstrap-grid.min.css', '../../static/css/bootstrap-reboot.min.css',
    '../../static/css/bootstrap.css', '../../static/css/bootstrap.min.css'],
  providers: [MalfunctionService]
})
export class MalfunctionComponent implements OnInit {
  malfunctions: Malfunction[];

  constructor(private mfService: MalfunctionService) { }

  ngOnInit() {
    this.mfService.getMalfunctions().subscribe(
      data => {
        //console.log(data);                   
        this.malfunctions = data;
      },
      err => console.log(err)
    );
  }


}

