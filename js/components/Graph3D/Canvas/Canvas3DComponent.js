class Canvas3DComponent extends Component {
	// context1 = canvas3d1.getContext('2d');
	// context2 = canvas3d2.getContext('2d');
	// context3 = canvas3d3.getContext('2d');
	canMove = false;

	constructor(options){
		super(options);
		this.win = options.win;
		this.standartObjects = options.standartObjects;
		this.userObjects = options.userObjects;
		canvas3d1.width = options.width;
		canvas3d1.height = options.height;
	};

	xs3dTo2d(point) { return point.x*(this.win.display.z-this.win.camera.z)/(point.z-this.win.camera.z);};
	ys3dTo2d(point) { return point.y*(this.win.display.z-this.win.camera.z)/(point.z-this.win.camera.z);};
	// xs3dTo2d(point) { return (point.x*(this.win.camera.z-this.win.display.z))/(this.win.camera.z-point.z);};
	// ys3dTo2d(point) { return (point.y*(this.win.camera.z-this.win.display.z))/(this.win.camera.z-point.z);};

	xs2dToCanvas(x) { return (x-this.win.left) * (canvas3d1.width) / this.win.width };
	ys2dToCanvas(y) { return (-y - this.win.bottom) * (canvas3d1.height) / this.win.height };

	sx2dToCanvas(x) { return x * this.win.width / canvas3d1.width};
	sy2dToCanvas(y) { return y * this.win.height / canvas3d1.height};

	clear(context){
		context.fillStyle = '#292929';
		context.fillRect(0,0,canvas3d1.width, canvas3d1.height);

		// this.context2.fillStyle = '#292929';
		// this.context2.fillRect(0,0,canvas3d2.width, canvas3d2.height);
	};

	line(x1,y1,x2,y2,context,color,width){
		context.beginPath();
		context.strokeStyle = color || '#ff5c6c';
		context.lineWidth = width || 2;
		context.moveTo(this.xs2dToCanvas(this.xs3dTo2d(x1)), this.ys2dToCanvas(this.ys3dTo2d(y1)));
		context.lineTo(this.xs2dToCanvas(this.xs3dTo2d(x2)), this.ys2dToCanvas(this.ys3dTo2d(y2)));
		context.stroke();
	};

	render(context){
		this.clear(context);
		this.printOxyz(context);

		this.standartObjects.forEach((el)=>{
			if(el.isActive){
				this.printEdges(el.f, context)
				this.printPoints(el.f, context);
			}
		});
		// figure.edges.forEach(edge => {
		// 	console.log(this)
		// 	// const point1 = this.figure.points[edge.p1];
		// 	// const point2 = this.figure.points[edge.p2];
		// 	// this.canvas.line(this.xs(point1), this.ys(point1), this.xs(point2), this.ys(point2));
			
		// })
	}

	// TODO
	printOxyz(context){
		// +x
		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(1.9*(this.win.left+this.win.width),0,0), new Point(0,0,0),
				  context, 'green', 3);
		// -x
		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(1.9*this.win.left,0,0), new Point(0,0,0),
				  context, 'green', 3);

		// +y
		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(0,0,0), new Point(0,1.9*(-this.win.bottom),0),
				  context, 'blue', 3);

		// -y
		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(0,0,0), new Point(0,1.9*(-this.win.bottom-this.win.height),0),
				  context, 'blue', 3);

		// #TODO
		// +z
		this.line(new Point(0,0,0), new Point(0,0,0),
				  new Point(0,0,10), new Point(0,0,0),
				  context, 'yellow', 3);
	}

	printPoints(subject, context){
		let pointSize = 3;
		context.fillStyle = '#ff2626';
		subject.points.forEach((el)=>{
			context.beginPath();
			context.arc(this.xs2dToCanvas(this.xs3dTo2d(el)), this.ys2dToCanvas(this.ys3dTo2d(el)), pointSize, 0, Math.PI*2, true);
			context.fill();
		});
	}
	
	printEdges(subject, context){
		subject.edges.forEach((el)=>{
			this.line(subject.points[el.p1], subject.points[el.p1],
					  subject.points[el.p2], subject.points[el.p2],
				  	  context, 'pink', 2);
		});
	}

	printSubject(subject, context){

	}

	_AddEventListeners(){
		canvas3d1.addEventListener('wheel', this.callbacks.wheel);
        canvas3d1.addEventListener('mousedown', ()=>this.callbacks.mouseD(this));
        canvas3d1.addEventListener('mouseup', ()=>this.callbacks.mouseU(this));
        canvas3d1.addEventListener('mousemove', (ev)=>this.callbacks.mouseM(ev, this));
	};
}