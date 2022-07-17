export interface Component {
  render: () => HTMLElement;
}

export interface Card {
  id: string;
  name: string;
  price: string;
}
