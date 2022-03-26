class Graph3DUIComponent extends Component {
	objects = [
		'cube',
		'sphere',
		'pyramid',
		'cone',
		'cylinder',
	]


	constructor(options){
		super(options);

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
		document.getElementById('buts3d').appendChild(selectObjBut);


		let x = document.createElement('input');
		let y = document.createElement('input');
		let z = document.createElement('input');
		x.value = 0;
		y.value = 0;
		z.value = 0;
		x.id = 'newFigureX';
		y.id = 'newFigureY';
		z.id = 'newFigureZ';
		document.getElementById('buts3d').appendChild(x);
		document.getElementById('buts3d').appendChild(y);
		document.getElementById('buts3d').appendChild(z);
	};

	_AddEventListeners(){
		// for template only
	};
}