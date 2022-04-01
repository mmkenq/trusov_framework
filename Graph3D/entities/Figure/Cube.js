Figure.prototype.cube = () => {
    const points = [
    	new Point(-5,5,-5), // 0
    	new Point(5,5,-5),  // 1
    	new Point(-5,-5,-5),// 2
    	new Point(5,-5,-5), // 3
    	new Point(-5,5,5),  // 4
    	new Point(5,5,5),   // 5
    	new Point(-5,-5,5), // 6
    	new Point(5,-5,5),  // 7

    	new Point(0,0,0) // center
    ];
    const edges = [
        new Edge(4,6),
        new Edge(6,7),
        new Edge(5,7),
        new Edge(4,5),

        new Edge(0,4),
        new Edge(5,1),
        new Edge(3,7),
        new Edge(2,6),

        new Edge(0,1),
        new Edge(1,3),
        new Edge(3,2),
        new Edge(2,0),
    ];
    return new Subject(points,edges);
}