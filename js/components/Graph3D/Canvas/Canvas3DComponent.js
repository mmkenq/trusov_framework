class Canvas3DComponent extends Component {
	// context1 = canvas3d1.getContext('2d');
	// context2 = canvas3d2.getContext('2d');
	// context3 = canvas3d3.getContext('2d');

	constructor(options){
		super(options);
		this.win = options.win;
		this.standartObjects = options.standartObjects;
		this.userObjects = options.userObjects;
		canvas3d1.width = options.width;
		canvas3d1.height = options.height;
	};

	xs(point) { return point.x*(this.win.camera.z-this.win.display.z)/this.win.camera.z-point.z;};
	ys(point) { return point.y*(this.win.camera.z-this.win.display.z)/this.win.camera.z-point.z;};
	sx(point) { return };
	sy(point) { return };

	clear(context){
		context.fillStyle = '#292929';
		context.fillRect(0,0,canvas3d1.width, canvas3d1.height);

		// this.context2.fillStyle = '#292929';
		// this.context2.fillRect(0,0,canvas3d2.width, canvas3d2.height);
	};

	line(x1,y1,x2,y2,color,width,context){
		context.beginPath();
		context.strokeStyle = color || '#ff5c6c';
		context.lineWidth = width || 2;
		context.moveTo(this.xs(x1), this.ys(y1));
		context.lineTo(this.xs(x2), this.ys(y2));
		context.stroke();
	};

	render(context){
		this.clear(context);
		this.printOxyz(context);
		// figure.edges.forEach(edge => {
		// 	console.log(this)
		// 	// const point1 = this.figure.points[edge.p1];
		// 	// const point2 = this.figure.points[edge.p2];
		// 	// this.canvas.line(this.xs(point1), this.ys(point1), this.xs(point2), this.ys(point2));
			
		// })
	}

	// TODO
	printOxyz(context){
		console.log(context);

		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(10,0,0), new Point(10,10,0),
				  'red', 5, context)
		
	}

	_AddEventListeners(){
		// canvas3d1.addEventListener();
	};
}