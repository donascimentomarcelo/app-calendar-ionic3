import { EventProvider } from './../../providers/event/event';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = { startTime: new Date().toISOString() };
  getDate$ = this.navParams.get('selectedDay');
  minDate = moment(this.getDate$.setHours(13,0,0)).format();
  maxDate = moment(this.getDate$.setHours(20,0,0)).format();
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public eventProvider: EventProvider,
    public alertCtrl: AlertController) 
    {
      let preselectedDate = moment(this.getDate$).format();
      this.event.startTime = preselectedDate;
      this.event.startTime = preselectedDate;
      this.event.startTime = preselectedDate;
      this.list(preselectedDate);
    };
    dates:any;

    list(preselectedDate: string)
    {
      this.eventProvider.list(preselectedDate)
        .subscribe(response => {
          this.dates = response;
        }, error => {
          console.log(error);
        });
    }

    save()
    {
      this.eventProvider.create(this.event)
      .subscribe( resp => {
          console.log(resp);

          this.viewCtrl.dismiss(this.event);
        }, error => {
          var err = JSON.parse(error.error);
          let alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: err.msg,
            buttons: ['Ok']
          });
          alert.present();
        });
    };

    close()
    {
      this.viewCtrl.dismiss();
    };
}
