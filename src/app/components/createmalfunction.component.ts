import { Component, OnInit } from '@angular/core';
import { CreatemalfunctionService } from './createmalfunction.service'

interface MfTypes {
  id: number;
  name: string;
}
interface Vehicles {
  id: number;
  name: string;
}
interface Region {
  id: number;
  name: string;
}



@Component({
  moduleId: module.id,
  selector: 'createmalfunction',
  templateUrl: 'createmalfunction.component.html',
  styleUrls: ['../../static/css/bootstrap.min.css',
    '../../static/css/createmalfunction/style.css'],
  providers: [CreatemalfunctionService]
})
export class CreatemalfunctionComponent {
  vehicle: Vehicles;
  mf_type: MfTypes;
  region: Region;
  mf_desc: string;
  created: boolean = false;

  vehicles: Vehicles[] = [];
  mf_types: MfTypes[] = [];
  regions: Region[] = [];

  selected_vehicle: Vehicles;

  constructor(private cmService: CreatemalfunctionService) {
  }


  ngOnInit() {
    this.cmService.fetchVehicles().subscribe(
      data => {
        data.vehicles.forEach(x => {
          this.vehicles.push({ id: x.id, name: x.type.make + " " + x.model })
        });

      },
      err => {
        console.log(err);
      });

    this.mf_types.push({ id: 1, name: "Vulkanizer" });
    this.mf_types.push({ id: 2, name: "Šlep služba" });
    this.mf_types.push({ id: 3, name: "Elektroničar" });

    this.regions.push({ id: 1, name: "Beograd" });
    this.regions.push({ id: 2, name: "Mladenovac" });
    this.regions.push({ id: 3, name: "New york" });
  }


  public createMalfunction() {
    console.log(this.cmService.createMalfunction(this.vehicle.id, this.mf_type.id, this.region.id, this.mf_desc));
  }
  public returnResponse() {
    console.log(this.vehicle, this.mf_type, this.region, this.mf_desc)
    this.created = true;
  }

}
