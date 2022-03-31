class Graph3DUIComponent extends Component {
	num = 0;
	objects = [
		'cube',
		'sphere',
		'pyramid',
		'cone',
		'cylinder',
	];

	constructor(options){
		super(options);

		// TODO
		let addBut = document.createElement('button');
		addBut.innerHTML = 'add Figure'
		addBut.addEventListener('click',()=>{
			this.addUserFigure(this.num);
			this.num++;
		})
		buts3d.appendChild(addBut)


		let selectObjBut = document.createElement('select');
		this.objects.forEach((el)=>{
			let option = document.createElement('option');
			option.innerHTML = el;
			option.value = el;
			option.addEventListener('click',()=>
				{
					options.callbacks.addFigure(el);
				});

			selectObjBut.appendChild(option);
		});
		buts3d.appendChild(selectObjBut);


		let x = document.createElement('input');
		let y = document.createElement('input');
		let z = document.createElement('input');
		x.value = 0;
		y.value = 0;
		z.value = 0;
		x.id = 'newFigureX';
		y.id = 'newFigureY';
		z.id = 'newFigureZ';
		buts3d.appendChild(x);
		buts3d.appendChild(y);
		buts3d.appendChild(z);
	};

	addUserFigure(num){
		this.callbacks.addFigure('sphere');
	}

	_AddEventListeners(){
		// for template only
	};
}