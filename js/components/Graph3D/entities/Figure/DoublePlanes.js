Figure.prototype.doublePlanes = (center = new Point(0,0,0)) => {
    // стороны
	let a = 6; 
    let b = 3;
    // расстояние между ними
    let c = 4;
    
    const points = [
        new Point(center.x+a/2, center.y+b/2, center.z+c),
        new Point(-(center.x+a/2), center.y+b/2, center.z+c),
        new Point((center.x+a/2), -(center.y+b/2), center.z+c),
        new Point(-(center.x+a/2), -(center.y+b/2), center.z+c),
        new Point(center.x+a/2, center.y+b/2, -(center.z+c)),
        new Point(-(center.x+a/2), center.y+b/2, -(center.z+c)),
        new Point((center.x+a/2), -(center.y+b/2), -(center.z+c)),
        new Point(-(center.x+a/2), -(center.y+b/2), -(center.z+c)),
    ];
    const edges = [
        new Edge(0,1),
        new Edge(1,3),
        new Edge(3,2),
    ];
    const polygons = [];

	

    return new Subject(points,edges, polygons);
}