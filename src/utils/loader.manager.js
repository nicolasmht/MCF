import * as THREE from 'three';

class LoaderManager {
	constructor() {}

	isLoaded() {
		return new Promise((resolve, error) => {
			// If are not elements to load
			if (THREE.DefaultLoadingManager.onProgress == undefined) {
				resolve();
			}

			THREE.DefaultLoadingManager.onProgress = (item, loaded, total) => {
				if (loaded == total) {
					resolve();
				} else {
					console.log('ok');
				}
			};
		});
	}
}

export default LoaderManager;
