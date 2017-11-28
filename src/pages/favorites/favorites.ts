import { Component } from '@angular/core';
import { IonicPage, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor (
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss( (remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    })
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    //this.quotes = this.quotesService.getFavoriteQuotes();
    let position = this.quotes.findIndex((quoteEl: Quote) => {
      return quote.id == quoteEl.id;
    })
    this.quotes.splice(position, 1);
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }
}
