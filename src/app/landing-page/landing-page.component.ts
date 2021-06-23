import { Component, OnInit } from '@angular/core';
import { LandingServiceService } from './landing-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  Popular:any 

  constructor(private landingpageService: LandingServiceService) {}

  ngOnInit(): void {
    this.landingpageService.getPopular().subscribe(response=>this.Popular=response)
  }
}
