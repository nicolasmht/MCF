import SceneManager from './scenemanager.js';

export default class Scene extends SceneManager {
	constructor() {
		super();
	}

	sayHi() {
		console.log(this.test());
	}
}
