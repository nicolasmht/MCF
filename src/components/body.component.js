import * as THREE from 'three';
import ComponentManager from '../utils/components.manager';

// import GLTFLoader from 'three-gltf-loader';

//import BodyObj from '../models/body.glb';

class Body extends ComponentManager {
	constructor(scene) {
		super(scene);

		/*const loaderGLTF = new GLTFLoader();

		loaderGLTF.load(BodyObj, () => {});
		*/
	}

	update(time) {
		//this.mesh.position.y = Math.sin(time) * 2;
	}

	click(event) {}
}

export default Body;
