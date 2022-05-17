class point{
	constructor(x,y,z){
		this.x = x;
		this.y = y;
		this.z = z;
	}
}
class Arm{
	constructor(father,pos){
		let normalMat = new THREE.MeshBasicMaterial({color: "blue"});
		this.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1 ,0.5),normalMat)
		this.mesh.position.x = pos.x;
		this.mesh.position.y = pos.y;
		this.mesh.position.z = pos.z;
		father.add(this.mesh)
	}
	rotate(x){
		this.mesh.rotation.x = x	
	}
}
class Leg{
	constructor(father,pos){
		const loader = new THREE.TextureLoader()
		const texture = loader.load('https://i.imgur.com/6I5uDxR.jpg')
		let normalMat = new THREE.MeshBasicMaterial({map: texture});
		this.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5),normalMat)
		this.mesh.position.x = pos.x;
		this.mesh.position.y = pos.y;
		this.mesh.position.z = pos.z;
		father.add(this.mesh)
	}
	rotate(x){
		this.mesh.rotation.x = x
	}
}
class Head{
	constructor(father,pos){
		const loader = new THREE.TextureLoader()
		let matArray = [];
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('https://i.imgur.com/ZesSigy.png') // front
		}));
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('https://i.imgur.com/YDhXk3g.jpg') // back
		}));
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('') // top
		}));
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('') // bottom
		}));
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('https://i.imgur.com/A1XrnlN.jpg') //
		}));
		matArray.push(new THREE.MeshBasicMaterial({
		map: loader.load('https://i.imgur.com/99t61xd.jpg') // 
		}));
					
		this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),matArray)
		this.mesh.position.x = pos.x;
		this.mesh.position.y = pos.y;
		this.mesh.position.z = pos.z;
		father.add(this.mesh)
	}
}
class character{
	constructor(){
		const loader = new THREE.TextureLoader()
		const texture = loader.load('https://i.imgur.com/UVPax6N.jpg')
		const Mat = new THREE.MeshBasicMaterial({map:texture});
		this.torso = new THREE.Object3D();
		let normalMat = new THREE.MeshBasicMaterial({color: "green"});
		let torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), Mat)
		this.torso.add(torsoMesh)
		torsoMesh.position.y = 1;
		let rightArm = new Arm(this.torso,new point(0,1.5,0.5));
		let leftArm = new Arm(this.torso,new point(0,1.5,-0.5));
		let rightLeg = new Arm(this.torso,new point(0,0.25,0.25));
		let leftLeg = new Arm(this.torso,new point(0,0.25,-0.25));
		let head = new Head(this.torso,new point(0,2,0))
		this.rightArm = rightArm
		this.leftArm =leftArm
		this.rightLeg = rightLeg
		this.leftLeg =leftLeg
		this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.set(-5,8,0)
		this.camera.lookAt(1,0,0)
		this.torso.add(this.camera)
		scene.add(this.torso)
	}
	rotate(arr){
		this.rightArm.rotate(arr[0])
		this.leftArm.rotate(-arr[1])
		this.rightLeg.rotate(-arr[2])
		this.leftLeg.rotate(arr[3])
	}
				
}