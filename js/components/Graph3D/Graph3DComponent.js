class Graph3DComponent extends Component {
    win = {
        // относительно начала координат
        left: -10,
        bottom: -10,
        // относительно всего canvas'a
        width: 20,
        height: 20,

        camera: new Point(0,0,60),
        display: new Point(0,0,30),
    };

    userObjects = [];
    standartObjects = [
        {
            f: figure.cube(),
            isActive: true,
            color: 'red',
            width: 2,
            name: 'cube'
        },
        {},
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
        if(ev.deltaY < 0){
            if(this.win.width <= 5) return;
            this.win.width -= 2;
            this.win.height -= 2;
            this.win.left++;
            this.win.bottom++;
        } else {
            this.win.width += 2;
            this.win.height += 2;
            this.win.left--;
            this.win.bottom--;
        };
        this.render()
    }

    mouseD(canvasComponent){canvasComponent.canMove = true}
    mouseU(canvasComponent){canvasComponent.canMove = false}
    mouseM = (ev, canvasComponent) => {
        if (canvasComponent.canMove) {
            canvasComponent.win.left -= canvasComponent.sx2dToCanvas(ev.movementX);
            canvasComponent.win.bottom -= canvasComponent.sy2dToCanvas(ev.movementY);

            // TODO: 3DMOUSEMOVE NOT 2D
            this.render();
        };
    }

}