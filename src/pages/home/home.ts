import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay,
  };

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) 
  {

  };

  add()
  {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
      }
    });
  };

  onTimeSelected(ev)
  {
    this.selectedDay = ev.selectedTime;
  };

  onEventSelected(event)
  {
    let start = moment(event.startTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: 'Criado com sucesso',
      subTitle: 'Created to: ' + start,
      buttons:['Ok']
    });
    alert.present();
  };


}
