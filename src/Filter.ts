import { store } from './Store';
import { Card, Component } from './types';

export class Filter implements Component {
  filterElement: HTMLElement = document.createElement('ul');
  range1Element: HTMLElement = document.createElement('li');
  range2Element: HTMLElement = document.createElement('li');
  range3Element: HTMLElement = document.createElement('li');
  hrElement: HTMLElement = document.createElement('hr');
  maxValue: number;

  constructor(private cards: Card[]) {
    this.maxValue = Math.max(...cards.map(({ price }) => parseInt(price)));
  }

  render() {
    this.range1Element.innerText = '0-100';
    this.range2Element.innerText = '100-200';
    this.range3Element.innerText = `200-${this.maxValue}`;
    this.filterElement.append(this.range1Element, this.range2Element, this.range3Element, this.hrElement);

    this.range1Element.addEventListener('click', () => store.setState({ ...store.getState(), range: [0, 100] }));
    this.range2Element.addEventListener('click', () => store.setState({ ...store.getState(), range: [100, 200] }));
    this.range3Element.addEventListener('click', () => store.setState({ ...store.getState(), range: [200, this.maxValue] }));

    return this.filterElement;
  }
}
