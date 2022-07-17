export interface IState {
  range: [number, number]
}

export interface IObserver {
  signal: (subject: IObserverable) => void;
}

export interface IObserverable {
  add: (observer: IObserver) => void;
  getState: () => IState;
  setState: (state: IState) => void;
}

class Store implements IObserverable {
  private state: IState = {
    range: [0, 100]
  };
  private observers: IObserver[] = [];

  add(observer: IObserver) {
    this.observers.push(observer);
  }

  getState() {
    return this.state;
  }

  setState(value: IState) {
    this.state = value;
    for (let i = 0; i < this.observers.length; i++)
    {
      this.observers[i].signal(this);
    }
  }
}

export const store = new Store();
