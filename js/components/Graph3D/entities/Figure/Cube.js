Figure.prototype.cube = () => {
    const points = [
    	new Point(-5,5,-5),
    	new Point(5,5,-5),
    	new Point(-5,-5,-5),
    	new Point(5,-5,-5),
    	new Point(-5,5,5),
    	new Point(5,5,5),
    	new Point(-5,-5,5),
    	new Point(5,-5,5),

    	new Point(0,0,0) // center
    ];
    const edges = [
        // new Edge(new Point(),new Point()),
    ];
    return new Subject(points,edges);
}