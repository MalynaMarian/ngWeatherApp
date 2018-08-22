import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {

  // @Output() getC = new EventEmitter;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  routeToForecastByCoordinates() {
    this.router.navigate(['/forecastByLocation']);
  }

  // getForecastByCoordinates() {
  //   // this.router.navigate(['']);
  //   return this.getC.emit();
  // }
}
