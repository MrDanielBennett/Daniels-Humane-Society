import { Injectable } from '@angular/core';
import { Dog } from './dog.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DogService {
   dogs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.dogs = database.list('dogs');
  }

  getDogs(){
    return this.dogs;
  }


}
