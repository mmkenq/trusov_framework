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

		let addBut = document.createElement('button');
		addBut.innerHTML = 'add Figure'
		addBut.addEventListener('click',()=>{
			this.callbacks.addFigure();

			let figInputs = document.createElement('div');
			figInputs.dataset.num = this.num;
			figInputs.setAttribute('class','userInputs');

			let x = document.createElement('input');
			let y = document.createElement('input');
			let z = document.createElement('input');
			x.value = 0; x.setAttribute('placeholder', 'x');
			y.value = 0; y.setAttribute('placeholder', 'y');
			z.value = 0; z.setAttribute('placeholder', 'z');
			x.id = 'newFigureX';
			y.id = 'newFigureY';
			z.id = 'newFigureZ';
			figInputs.appendChild(x);
			figInputs.appendChild(y);
			figInputs.appendChild(z);
			let color = document.createElement('input');
			color.setAttribute('placeholder', 'color');
			figInputs.appendChild(color);

			let changeFigBut = document.createElement('select');
			this.objects.forEach((el)=>{
				let option = document.createElement('option');
				option.innerHTML = el;
				option.value = el;
				option.addEventListener('click',()=>
					{
						this.callbacks.changeFigure(
							figInputs.dataset.num,
							figure[el](),
						 	new Point(Number(x.value), Number(y.value), Number(z.value)),
							el);
						 

						
						// this.addUserFigure(this.num);
					});

				changeFigBut.appendChild(option);
			});
			figInputs.appendChild(changeFigBut);

			figures.appendChild(figInputs);
			this.num++;
		})
		

		buts3d.appendChild(addBut)
	};


	_AddEventListeners(){
		// for template only
	};
}