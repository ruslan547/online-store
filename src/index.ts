import { App } from './App';
import productsList from './data/products.json';

document.body.append(new App(productsList).render());
