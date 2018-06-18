import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Resolve } from '@angular/router';

@Injectable()
export class ResolverService implements Resolve<any>{

  constructor(private weatherService: UserService) { }

  resolve(){
    return this.weatherService.local();
  }

}
