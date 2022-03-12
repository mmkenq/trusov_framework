const template = new Template;
window.onload = () => {
	let app = new AppComponent({
        id:'app',
        template: template.appTemplate,
        render: true
    });

    // console.log(app);
};
