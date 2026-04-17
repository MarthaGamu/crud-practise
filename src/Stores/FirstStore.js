import { makeAutoObservable } from 'mobx';

class FirstStore {
	count = 0;

	constructor() {
		makeAutoObservable(this);
	}

	increment() {
		this.count++;
	}
}

const firstStore = new FirstStore();

export default firstStore;
