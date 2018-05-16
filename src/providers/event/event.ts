import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventProvider {

  constructor(public http: HttpClient) 
  { };

  create(data: any)
  {
    return this.http.post(
      `http://localhost:8080/calendar`,
      {
        startTime: data.startTime
      },
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  };

  list(date)
  {
    return this.http.get(`http://localhost:8080/calendar/find?startTime=${date}`);
  }

}
