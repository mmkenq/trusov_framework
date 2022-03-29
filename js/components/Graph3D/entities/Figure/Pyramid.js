Figure.prototype.pyramid = () => {
    const points = [
    	new Point(0,5,0),
    	new Point(5,0,-5),
    	new Point(5,0,5),
    	new Point(-5,0,5),
    	new Point(-5,0,-5),

    	new Point(0,0,0) // center
    ];
    const edges = [];
    return new Subject(points,edges);
}