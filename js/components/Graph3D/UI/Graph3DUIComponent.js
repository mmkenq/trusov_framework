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
					console.log(el)
				})

			selectObjBut.appendChild(option);
		});
		document.getElementById('buts3d').appendChild(selectObjBut);

	};

	_AddEventListeners(){
		// for template only
	};
}