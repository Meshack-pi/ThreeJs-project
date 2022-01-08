var scene = new THREE.Scene();			 
var camera = new THREE.PerspectiveCamera( 95, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry( 4, 4, 4 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );			 
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );			 
var planeGeometry = new THREE.PlaneGeometry(15, 12);
		var planeMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
		var plane = new THREE.Mesh(planeGeometry, planeMaterial);
		// rotate and position the plane
		plane.rotation.x = -0.5 * Math.PI;
		plane.position.x = 0;
		plane.position.y = -8;
		plane.position.z =-5;

		// add the plane to the scene
		scene.add(plane);

camera.position.set(0,5,16);			 
var animate = function () {				 
requestAnimationFrame( animate );
cube.rotation.x += 0.01;				 
cube.rotation.y += 0.01;				 
renderer.render( scene, camera );}
animate();