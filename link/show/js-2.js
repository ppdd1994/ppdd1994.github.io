var data=[
{img:1,h2:'Creative',h3:'DUET'},
{img:2,h2:'Friendly',h3:'DEVILE'},
{img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
{img:4,h2:'Insecure',h3:'HUSSLER'},
{img:5,h2:'Loving',h3:'REBEL'},
{img:6,h2:'Creazy',h3:'FRIEND'},
];

function addSlider(){
 var temp = document.getElementById('template_main'),
 	 ctrl = document.getElementById('template_ctrl'),
 	 tempmain= temp.innerHTML.replace(/^\s*/,'').replace(/^\s*$/,''),
 	 ctrlmain=ctrl.innerHTML.replace(/^\s*/,'').replace(/^\s*$/,'');
 var outmain=[];
 var outctrl=[];
 for(var i in data){
	var html=tempmain
				.replace(/{{index}}/g,data[i].img)
				.replace(/{{h2}}/g,data[i].h2)
				.replace(/{{h3}}/g,data[i].h3);
	var ctrl=ctrlmain
				.replace(/{{index}}/g,data[i].img);
     outmain.push(html);
     outctrl.push(ctrl);
}

 document.getElementById('template_main').innerHTML = outmain.join('');
 document.getElementById('template_ctrl').innerHTML = outctrl.join('');

};
function switchSlider(n){
	var main= document.getElementById('tempalte_'+n),
		ctrl= document.getElementById('ctrl_'+n);
	var clearmain = document.getElementsByClassName('main-i'),
		ctrlmain = document.getElementsByClassName('ctrl-i');
	for (var i = 0 ; i < clearmain.length; i++) {
		clearmain[i].className = clearmain[i].className.replace(' main-i-active','');
		ctrlmain[i].className = ctrlmain[i].className.replace(' ctrl-i-active','')
	};
	main.className += ' main-i-active';
	ctrl.className += ' ctrl-i-active';
}
window.onload=function(){
	addSlider();
	switchSlider(1);
};