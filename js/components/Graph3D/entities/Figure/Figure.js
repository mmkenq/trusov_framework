function Figure(){
	this.userFigures = [];

    this.standartFigures = [
        {
            subject: this.cube(),
            isActive: true,
            color: 'yellow',
            width: 2,
            name: 'cube',
            center: new Point(0,0,0)
        },
        {
            subject: this.pyramid(),
            isActive: false,
            color: 'red',
            width: 2,
            name: 'pyramid'
        },
        {
            subject: this.sphere(),
            isActive: false,
            color: 'pink',
            width: 2,
            name: 'sphere'
        }
    ];

};