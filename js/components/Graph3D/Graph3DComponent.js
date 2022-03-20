class Graph3DComponent extends Component {
    win = {
        // относительно начала координат
        left: -10,
        bottom: -10,
        // относительно всего canvas'a
        width: 20,
        height: 20,

        camera: new Point(0,0,50),
        display: new Point(0,0,30),
    };

    userObjects = [];
    standartObjects = [{},{},{}];


    constructor(options){
        super(options);

        this.canvas1 = new Canvas3DComponent({
            id:'canvas3DBox',
            parent: this,
            template: template.graph3DTemplate.canvasTemplate,
            callbacks: {},

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
            callbacks: {},
            standartFuncs: this.standartFuncs,
        });

        this.render();
    };

    render(){
        this.canvas1.render();
        // this.canvas2.render();
        // this.canvas3.render();
        // ...
    };
}