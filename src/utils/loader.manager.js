import * as THREE from 'three';

class LoaderManager {
	constructor() {}

	isLoaded(callback) {
		return new Promise((resolve, error) => {
			THREE.DefaultLoadingManager.onProgress = (item, loaded, total) => {
				if (loaded == total) {
					console.log(item, total);
					resolve();
				}
			};
		});
	}
}

export default LoaderManager;
