import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor (private viewCtrl: ViewController, private navParam: NavParams) {}

  ionViewDidLoad()
  {
    this.person = this.navParam.get('person');
    this.text   = this.navParam.get('text');
  }

  onClose(remove: boolean) {
    this.viewCtrl.dismiss(remove);
  }
}
