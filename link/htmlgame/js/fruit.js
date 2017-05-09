var fruitobj = function(){
  this.alive = [];
  this.oringe = new Image();
  this.blue = new Image();
  this.x = [];
  this.y = [];
  this.l = [];
  this.speed = [];
  this.type = [];
  this.aneId = [];
};
fruitobj.prototype.num = 30;

fruitobj.prototype.init = function(){
  this.oringe.src = "src/fruit.png";
  this.blue.src = "src/blue.png";
  for (var i = 0; i < this.num; i++) {
  	this.alive[i] = false;
  	this.x[i] = 0;
  	this.y[i] = 0;
    this.aneId[i] = 0;
    var typenum = Math.random();
    if(typenum>0.17){
      this.type[i] = 'oringe';
    }else{
      this.type[i] = 'blue';
    }
  	
  };

}
fruitobj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {

        if (this.alive[i]) {
          if (this.type[i] == "oringe"){
            var pic = this.oringe;
          }else{
            var pic = this.blue
          };

          if(this.l[i]<13){
              var id = this.aneId[i];
              this.l[i] += this.speed[i]*dl;
              this.x[i] = ane.headx[id];
              this.y[i] = ane.heady[id]; 
          }else{
              this.y[i] -= this.speed[i]*dl;
          };
          ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
        }
			    // fruit dead
            if (this.y[i]<10) {
             	this.alive[i] = false;
             };
        
	};
}

fruitobj.prototype.born = function(i){
  this.aneId[i] = Math.floor(Math.random()*35);
  this.l[i] = 0;
  this.speed[i] = Math.random()*0.02+0.05;
  this.alive[i] = true;
}

fruitobj.prototype.dead = function(i){
  this.alive[i] = false;
}
 function fruitMonitor(){
   var num = 0;
   for (var i = 0; i < fruit.num; i++) {
   	if (fruit.alive[i]) {
  		num++;
   	};
   };
   if (num<15) {
  		sendFruit();
   		return ;
   };
 
 }
  function sendFruit(){
  for (var i = 0; i < fruit.num; i++) {
  	if (!fruit.alive[i]) {
   		fruit.born(i);
   		return;
   	};
  };
 }