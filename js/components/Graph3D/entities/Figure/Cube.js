Figure.prototype.cube = () => {
    const points = [];
    const edges = [
        new Edge(5,5),
        new Edge(5,-5),
        new Edge(-5,5),
        new Edge(-5,-5),
    ];
    return new Subject(points,edges);
}