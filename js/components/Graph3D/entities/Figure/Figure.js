function Figure(){
	this.userFigures = [];

    this.standartFigures = [
        {
            isActive: true,
            subject: this.cube(),
            // center: new Point(0,0,0),
            color: 'yellow',
            width: 2,
            showPolygons: true,
            name: 'cube',
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