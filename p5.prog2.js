var prog2 = {
	soma: function (a, b){
		var vec = p5.Vector.add(a,b);
		return vec;
	},

	distVec: function (de,ate){
		var vec = p5.Vector.sub(ate,de);
		return vec;
	},
	
	dist: function (de,ate){
		return p5.Vector.dist(de, ate);
	},

	debug: function (vec,cor,base){	
		if(!cor){
			cor = color(0);
		}
		stroke(cor);
		fill(cor);
	
		if(base){		
			push();
			translate(base.x, base.y);
			line(0, 0, vec.x, vec.y);
			rotate(vec.heading());
			var arrowSize = 7;
			translate(vec.mag() - arrowSize, 0);
			triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
			pop();
		}else{
			push();
			line(0, 0, vec.x, vec.y);
			rotate(vec.heading());
			var arrowSize = 7;
			translate(vec.mag() - arrowSize, 0);
			triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
			pop();
		}
	}
};