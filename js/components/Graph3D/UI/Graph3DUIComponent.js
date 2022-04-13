class Graph3DUIComponent extends Component {
	num = 0;
	objects = [
		'cube',
		'cylinder',
		'sphere',
		'pyramid',
		'cone',
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
			x.addEventListener('blur', ()=>{
				this.callbacks.changeFigureXYZ(figInputs.dataset.num, Number(x.value), 0, 0);
		    });
		    y.addEventListener('blur', ()=>{
				this.callbacks.changeFigureXYZ(figInputs.dataset.num, 0, Number(y.value), 0);
		    });
			z.addEventListener('blur', ()=>{
				this.callbacks.changeFigureXYZ(figInputs.dataset.num, 0, 0, Number(z.value));
		    });
			figInputs.appendChild(x);
			figInputs.appendChild(y);
			figInputs.appendChild(z);

			let color = document.createElement('input');
			color.setAttribute('placeholder', 'color');
			figInputs.appendChild(color);

			let linewidth = document.createElement('input');
			linewidth.setAttribute('placeholder', 'linewidth');
			figInputs.appendChild(linewidth);			

			let name = document.createElement('input');
			name.setAttribute('placeholder', 'name');
			figInputs.appendChild(name);			

			let scalingPlus = document.createElement('button');
			scalingPlus.innerHTML = '+';
			scalingPlus.addEventListener('click', ()=>{
				console.log('scalingPlus')
			});
			let scalingMinus = document.createElement('button');
			scalingMinus.innerHTML = '-';
			scalingMinus.addEventListener('click', ()=>{
				console.log('scalingMinus');
			});
			figInputs.appendChild(scalingPlus);
			figInputs.appendChild(scalingMinus);

			let polygons = document.createElement('input');
			polygons.setAttribute('type','checkbox');
			polygons.id = 'showPolygons'
			let label = document.createElement('label');
			label.setAttribute('for', 'showPolygons');
			label.innerHTML = 'polygons';

			polygons.addEventListener('change', ()=>{
				this.callbacks.togglePolygons(figInputs.dataset.num);
			});
			figInputs.appendChild(polygons);
			figInputs.appendChild(label);


			let changeFigBut = document.createElement('select');
			this.objects.forEach((el)=>{
				let option = document.createElement('option');
				option.innerHTML = el;
				if(el == 'sphere') option.innerHTML = 'СФЕРА ХУЛИ'; // xd
 				option.value = el;
				option.addEventListener('click',()=>
					{
						this.callbacks.changeFigure(
							figInputs.dataset.num,
							figure[el](new Point(Number(x.value), Number(y.value), Number(z.value))),
						 	color.value,
						 	linewidth.value,
						 	polygons.checked,
							name.value||el);
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