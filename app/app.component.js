var App= ng

.Component({
	selector:'app',
})

.View({
	directives: [Header, Breadcrumb, Content, Footer],
	templateUrl:'app/app.component.html'     
})

.Class({
	constructor:function(){}
});

document.addEventListener('DOMContentLoaded',function(){
	ng.bootstrap(App);
});