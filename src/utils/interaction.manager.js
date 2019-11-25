import { Interaction } from 'three.interaction';

class InteractionManager {
	constructor(renderer, scene, camera, components = []) {
		this.components = components;

		this.interaction = new Interaction(renderer, scene, camera);
	}

	_linkInteractionComponents(typeInteraction) {
		for (let i = 0; i < this.components.length; i++) {
			this.components[i].mesh.on(typeInteraction, event => this.components[i].click(event));
		}
	}

	onClick() {
		this._linkInteractionComponents('click');
	}

	onTouchstart() {
		this._linkInteractionComponents('touchstart');
	}

	onTouchcancel() {
		this._linkInteractionComponents('touchcancel');
	}

	onTouchmove() {
		this._linkInteractionComponents('touchmove');
	}

	onTouchend() {
		this._linkInteractionComponents('touchend');
	}

	onMousedown() {
		this._linkInteractionComponents('mousedown');
	}

	onMouseout() {
		this._linkInteractionComponents('mouseout');
	}

	onMouseover() {
		this._linkInteractionComponents('mouseover');
	}

	onMousemove() {
		this._linkInteractionComponents('mousemove');
	}

	onMousemove() {
		this._linkInteractionComponents('mousemove');
	}
}

export default InteractionManager;
