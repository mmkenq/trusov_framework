class Graph2DUIComponent extends Component {
	num = 0;
	constructor(options){
		super(options);

		// AddFunction button
		let addFuncBut = document.createElement('button');
		addFuncBut.innerHTML = 'Новая функция';
		addFuncBut.addEventListener('click', ()=>{
			options.api.addFunction(this.num);
			this.newUserFunction(this.api, this.num);
			// funcs.dataset.num = this.num;
			this.num++;
		});
		document.getElementById('buts').appendChild(addFuncBut);

		// Clear button
		let clearBut = document.createElement('button');
		clearBut.innerHTML = 'clear';
		// clearBut.addEventListener('click', options.api.canvasRender.bind(null, true));
		clearBut.addEventListener('click', () => options.api.canvasRender(true));
		document.getElementById('buts').appendChild(clearBut);

		// Standart Funcs buttons
		for (let i = 0; i < options.standartFuncs.length; i++){
			let but = document.createElement('button');
			but.innerHTML = options.standartFuncs[i].name;
			but.dataset.num = i;
			but.addEventListener('click', function(){
				// TODO: add feature to change defalt params
				// options.standartFuncs[this.dataset.num].color = ;
				// options.standartFuncs[this.dataset.num].width = ;
				options.standartFuncs[this.dataset.num].isActive = true;
				options.api.canvasRender();
			});
			document.getElementById('buts').appendChild(but);
		};
	};

	newUserFunction(api, num){
		// User Funcs inputs
		let funcInputs = document.createElement('div');

		// 'delete' button
		let dbutton = document.createElement('button');
		dbutton.innerHTML = 'Удалить';
		dbutton.addEventListener('click', () => {
			this.api.delFunction(funcInputs.dataset.num);
			funcInputs.remove();
		});

		let color = document.createElement('input');
		color.setAttribute('placeholder', 'color (default: #df8cff)');

		let width = document.createElement('input');
		width.setAttribute('placeholder', 'width (default: 2)');
		

		let name = document.createElement('input');
		name.setAttribute('placeholder', 'name (default: f(x))');

		let a = document.createElement('input');
		a.setAttribute('placeholder', 'Нули ф-ии (a): ');
		let b = document.createElement('input');
		b.setAttribute('placeholder', 'Нули ф-ии (b): ');

		a.addEventListener('blur', function(){
			if(!a.value || !b.value) return;
			api.printZeroes(num, a.value, b.value);
		});

		b.addEventListener('blur', function(){
			if(!a.value || !b.value) return;
			api.printZeroes(num, a.value, b.value);
		});

		color.addEventListener('blur', function(){
            	api.changeFunction(null, num, this.value, width.value, name.value||input.value);
		    }
		);
		width.addEventListener('blur', function(){
				api.changeFunction(null, num, color.value, this.value, name.value||input.value);
			}
		);
		name.addEventListener('blur', function(){
				api.changeFunction(null, num, color.value, width.value, this.value||input.value);
			}
		);
		
		let input = document.createElement('input');
		input.setAttribute('placeholder', 'f(x)');
		input.addEventListener('keyup', function(){
			let f;
			try {
				eval(`f = function (x) { return ${this.value};}`);
				api.changeFunction(f, num, color.value, width.value, name.value||this.value);
			}
			catch(e){
				console.log(e);
			};
		});
		input.setAttribute('class', 'function');

		funcInputs.dataset.num = this.num;
		funcInputs.setAttribute('class','funcInputs');
		funcInputs.appendChild(color);
		funcInputs.appendChild(width);
		funcInputs.appendChild(a);
		funcInputs.appendChild(b);
		funcInputs.appendChild(name);
		funcInputs.appendChild(input);
		funcInputs.appendChild(dbutton);

		// let funcs = document.getElementById('funcs');
		funcs.appendChild(funcInputs);
	};

	_AddEventListeners(){
		// for template only
	};
};