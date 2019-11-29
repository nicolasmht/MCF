import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import ComponentManager from '../utils/components.manager';

import TerrainGltf from '../models/terrains/terrai-piscine.glb';
import AileronsGltf from '../models/terrains/ailerons.glb';

class Terrain extends ComponentManager {
	constructor(scene) {
		super(scene);

		this.createTerrain();
		this.ailerons = null;
	}

	createTerrain() {
		this.loadGltf(TerrainGltf).then(obj => {
			obj.scene.rotation.x = Math.PI / 2;
			obj.scene.scale.set(1.75, 1.75, 1.75);
			obj.scene.position.y = -0.25;

			this.scene.add(obj.scene);
		});

		this.loadGltf(AileronsGltf).then(obj => {
			obj.scene.rotation.x = Math.PI / 2;
			obj.scene.scale.set(1.75, 1.75, 1.75);

			obj.scene.position.y = -0.5;

			this.ailerons = obj.scene.children[0];

			this.scene.add(obj.scene);
		});

		var geometry = new THREE.CylinderGeometry(9, 9, 0.5, 32);
		var material = new THREE.MeshBasicMaterial({ color: 0x14ceff });
		var cylinder = new THREE.Mesh(geometry, material);
		cylinder.position.y = -0.75;
		this.scene.add(cylinder);
	}

	loadGltf(gltf) {
		const loader = new GLTFLoader();

		return new Promise(resolve => {
			loader.load(gltf, obj => {
				resolve(obj);
			});
		});
	}

	update(time) {
		// this.mesh.position.y = Math.sin(time) * 2;
		if (this.ailerons != null) {
			this.ailerons.rotation.z -= 0.0025;
			// this.ailerons.position.z += 1 - Math.sin(this.ailerons.position.z) * 0.5;
			// console.log(this.ailerons.position.y);
		}

		// console.log(this.ailerons);
	}

	click(event) {
		console.log('Cube touched !');
	}

	addGUI(gui) {
		/*let folder = gui.addFolder('tttzfz');

		folder.add(this.mesh.position, 'x', -10, 10);
		folder.add(this.mesh.position, 'y', -10, 10);
		folder.add(this.mesh.position, 'z', -10, 10);*/
	}
}

export default Terrain;
