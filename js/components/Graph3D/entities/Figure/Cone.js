Figure.prototype.cone = () => {
    const points = [
    	// new Point(5,0,0),
    	// new Point(0,5,0),
	];
    const edges = [];
    const polygons = [];

    const rad = 57.295779513082;

    let R = 5; // радиус
	let a = 0; // угол
	let delta = 30; // плотность точек
	let x = 0;
	let y = 0;
	let z = 0;

	for(let znext = -R; znext <= R; znext++){
		for(let i = 0; i<360/delta; i++){
			x = R*Math.cos(a/rad);
			y = R*Math.sin(a/rad);
			points.push(new Point(x,y,znext));
			a += delta;
			console.log(x)
		};
		R--;
	};

    return new Subject(points,edges, polygons);
}