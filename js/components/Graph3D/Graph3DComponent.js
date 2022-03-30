class Graph3DComponent extends Component {
    win = {
        // относительно начала координат
        left: -5,
        bottom: -5,
        // относительно всего canvas'a
        width: 10,
        height: 10,

        camera: new Point(0,0,60),
        display: new Point(0,0,30),
    };

    userObjects = [];
    standartObjects = [
        {
            f: figure.cube(),
            isActive: true,
            color: 'yellow',
            width: 2,
            name: 'cube'
        },
        {
            f: figure.pyramid(),
            isActive: false,
            color: 'red',
            width: 2,
            name: 'pyramid'
        },
        {}
    ];


    constructor(options){
        super(options);

        this.canvas1 = new Canvas3DComponent({
            id:'canvas3DBox',
            parent: this,
            template: template.graph3DTemplate.canvasTemplate,
            callbacks: {wheel: this.wheel, mouseD: this.mouseD, mouseU: this.mouseU, mouseM: this.mouseM },

            win: this.win,
            width: 350,
            height: 350,
            standartObjects: this.standartObjects,
            userObjects: this.userObjects,
        });

        this.ui = new Graph3DUIComponent({
            id:'ui3d',
            parent: this,
            template: template.graph3DTemplate.uiTemplate,
            callbacks: { addFigure: this.addFigure },
            standartObjects: this.standartObjects,
        });

        this.render();
    };

    render(){
        // console.log(this.win)
        this.canvas1.render(canvas3d1.getContext('2d'));
        // this.canvas2.render(canvas2d2.getContext('2d'));
        // this.canvas3.render(canvas2d3.getContext('2d'));
        // ...
    };

    addFigure(name){
        figure.figures.push({
			name: name,
			points: []
		});
		console.log(figure)
    }

    wheel = (ev) => {
        // if(ev.deltaY < 0){
        //     // this.win.width -= 2;
        //     // this.win.height -= 2;
        //     // this.win.left++;
        //     // this.win.bottom++;
        //     this.win.camera.z += 5;
        // } else {
        //     if(this.win.camera.z <= this.win.display.z+5) return;
        //     this.win.camera.z -= 5;
        //     // this.win.width += 2;
        //     // this.win.height += 2;
        //     // this.win.left--;
        //     // this.win.bottom--;
        // };

        const a = 5/57.295779513082;
        // const a = 45;

        // TURN AROUND X MATRIX
        /*const turnAroundX = new Matrix(
            [
            [1,0,0],
            [0, Math.cos(a), -Math.sin(a)],
            [0, Math.sin(a), Math.cos(a)]
            ])*/

        const turnAroundX = new Matrix([
            [1,0,0,0],
            [0, Math.cos(a), Math.sin(a)*0,0],
            [0, -Math.sin(a), Math.cos(a), 0],
            [0,0,0,1]
        ]);           


        // TURN AROUND Y MATRIX
        const turnAroundY = new Matrix([
            [Math.cos(a), 0, Math.sin(a)],
            [0, 1, 0],
            [-Math.sin(a), 0, Math.cos(a)]
        ]);

        // TURN AROUND Z MATRIX
        const turnAroundZ = new Matrix(
            [
            [Math.cos(a), -Math.sin(a), 0],
            [Math.sin(a), Math.cos(a), 0],
            [0, 0, 1]
            ])

        // console.log(turnAroundX)
        // console.log(turnAroundY)
        // console.log(turnAroundZ)

        // X
        this.standartObjects[0].f.points.forEach(point=>{
            point.y = point.y*Math.cos(a) + point.z*Math.sin(a);
            point.z = -point.y*Math.sin(a) + point.z*Math.cos(a);
        })
        // TODO: Y, Z

        
        console.log(this.win.display, this.win.camera)
        this.render();
    }

    mouseD(canvasComponent){canvasComponent.canMove = true}
    mouseU(canvasComponent){canvasComponent.canMove = false}

    // TODO
    mouseM = (ev, canvasComponent) => {
        if (canvasComponent.canMove) {
            // canvasComponent.win.left -= canvasComponent.sx2dToCanvas(ev.movementX);
            // canvasComponent.win.bottom -= canvasComponent.sy2dToCanvas(ev.movementY);



            this.render();
        };
    }

}