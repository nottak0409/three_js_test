import * as THREE from "three";

const init = () => {
	const scene = new THREE.Scene();
	console.log(scene);
};

if (document.readyState === "complete") {
	init();
} else {
	document.addEventListener("DOMContentLoaded", init);
}
