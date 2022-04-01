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
			let figInputs = document.createElement('div');
			figInputs.dataset.num = this.num;

			let x = document.createElement('input');
			let y = document.createElement('input');
			let z = document.createElement('input');
			x.value = 0;
			y.value = 0;
			z.value = 0;
			x.id = 'newFigureX';
			y.id = 'newFigureY';
			z.id = 'newFigureZ';
			figInputs.appendChild(x);
			figInputs.appendChild(y);
			figInputs.appendChild(z);
			let color = document.createElement('input');
			color.setAttribute('placeholder', 'color');
			figInputs.appendChild(color);

			figures.appendChild(figInputs);
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
	};

	addUserFigure(num){
		this.callbacks.addFigure('sphere');
	}

	_AddEventListeners(){
		// for template only
	};
}