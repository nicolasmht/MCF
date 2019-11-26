import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import { Interaction } from 'three.interaction';

import SceneManager from '../utils/scene.manager';

import Helpers from '../utils/helpers.three';

// Components
import Box from '../components/box.component';
import Body from '../components/body.component';

class Scene01 extends SceneManager {
	constructor(canvas) {
		super(canvas);

		this.scene.add(Helpers.grid());

		this.addComponents(new Box(this.scene));
	}
}

export default Scene01;
