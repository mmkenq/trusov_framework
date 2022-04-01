Figure.prototype.sphere = () => {
    const points = [
    	new Point(0,6,0),  // 0
    	new Point(0,-6,0), // 1
    	new Point(-6,0,0), // 2
    	new Point(6,0,0),  // 3
    	new Point(0,0,6),  // 4
    	new Point(0,0,-6), // 5
    	new Point(-Math.cos(45/57.295779513082)*6,Math.sin(45/57.295779513082)*6,0), // 6
    	new Point(0,Math.cos(45/57.295779513082)*6,-Math.cos(45/57.295779513082)*6), // 7
    	new Point(Math.cos(45/57.295779513082)*6,Math.cos(45/57.295779513082)*6,0),  // 8
    	new Point(0,Math.cos(45/57.295779513082)*6,Math.cos(45/57.295779513082)*6),  // 9
    	new Point(Math.cos(45/57.295779513082)*6,-Math.cos(45/57.295779513082)*6,0), // 10
    	new Point(0,-Math.cos(45/57.295779513082)*6,Math.cos(45/57.295779513082)*6), // 11
    	new Point(-Math.cos(45/57.295779513082)*6,-Math.cos(45/57.295779513082)*6,0), // 12
    	new Point(0,-Math.cos(45/57.295779513082)*6,-Math.cos(45/57.295779513082)*6), // 13
    ];
    const edges = [
    	new Edge(0,6),
    	new Edge(0,7),
    	new Edge(0,8),
    	new Edge(0,9),
    	new Edge(6,2),
    	new Edge(7,5),
    	new Edge(8,3),
    	new Edge(9,4),

    	new Edge(2,4),
    	new Edge(4,3),
    	new Edge(3,5),
    	new Edge(5,2),

    	new Edge(1,10),
    	new Edge(1,11),
    	new Edge(1,12),
    	new Edge(1,13),
    	new Edge(10,3),
    	new Edge(11,4),
    	new Edge(12,2),
    	new Edge(13,5),
    ];
    return new Subject(points,edges);
}