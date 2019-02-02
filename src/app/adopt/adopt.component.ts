import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css'],
  providers: [DogService]
})
export class AdoptComponent implements OnInit {
  dogs: FirebaseListObservable<any[]>;
  constructor(private router: Router, private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

}
