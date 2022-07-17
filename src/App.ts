import { Filter } from './Filter';
import { CardList } from './CardList';
import { Card, Component } from './types';
import { IObserver, store } from './Store';

export class App implements Component {
  appElement: HTMLElement = document.createElement('div');
  filter: Component;
  cards: Component & IObserver;

  constructor(productsList: Card[]) {
    this.cards = new CardList(productsList);
    this.filter = new Filter(productsList);
  }

  render() {
    store.add(this.cards);
    this.appElement.append(this.filter.render(), this.cards.render());

    return this.appElement;
  }
}
