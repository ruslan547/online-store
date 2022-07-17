import { Card, Component } from './types';
import { IObserver, IObserverable } from './Store';

export class CardList implements Component, IObserver {
  cardsElement: HTMLElement = document.createElement('ul');

  constructor(private cards: Card[]) {
  }

  getCards(cards) {
    const fragment = document.createDocumentFragment();

    cards.forEach(({ name, price }) => {
      const cardElement = document.createElement('li');
      const nameElement = document.createElement('div');
      const priceElement = document.createElement('div');

      nameElement.textContent = name;
      priceElement.textContent = price;
      cardElement.append(nameElement, priceElement);
      fragment.append(cardElement);
    });

    return fragment;
  }

  signal(store: IObserverable) {
    const { range } = store.getState();
    const filteredCards = this.cards.filter(({ price }) => {
      const parsedPrice = parseInt(price);

      return parsedPrice > range[0] && parsedPrice <= range[1]
    });

    this.cardsElement.innerHTML = '';
    this.cardsElement.append(this.getCards(filteredCards));
  }

  render() {
    this.cardsElement.append(this.getCards(this.cards));

    return this.cardsElement;
  }
}
