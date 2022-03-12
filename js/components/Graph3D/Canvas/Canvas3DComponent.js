class Canvas3DComponent extends Component {
	context1 = canvas3d1.getContext('2d');
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

	clear(){
		this.context1.fillStyle = '#292929';
		this.context1.fillRect(0,0,canvas3d1.width, canvas3d1.height);

		// this.context2.fillStyle = '#292929';
		// this.context2.fillRect(0,0,canvas3d2.width, canvas3d2.height);
	};

	render(){
		this.clear();
	}

	_AddEventListeners(){
		// canvas3d1.addEventListener();
	};
}