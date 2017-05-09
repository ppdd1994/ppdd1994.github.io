var dustobj = function(){
    this.x = [];
    this.y = [];
    this.amp = [];
    this.index = [];
    this.alpha;

}
dustobj.prototype.num = 30;
dustobj.prototype.init = function(){
    for (var i = 0; i < this.num; i++) {
    	this.x[i] = Math.random()*cw;
    	this.y[i] = Math.random()*ch;
    	this.amp[i] = Math.random()*20 + 15;
    	this.index[i] = Math.floor(Math.random()*7);
    };
    this.alpha = 0;
}
dustobj.prototype.draw = function(){
	this.alpha += dl*0.001;
	var l = Math.sin(this.alpha);
	for (var i = 0; i < this.num; i++) {
		var num = this.index[i];
      ctx2.drawImage(dustimg[num],dust.x[i]+dust.amp[i]*l,dust.y[i]);

	};
}