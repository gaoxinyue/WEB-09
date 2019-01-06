window.onload = function() {

	var winScro = document.getElementsByClassName("winScro")[0];
	window.onscroll = function(){
	    var st = document.documentElement.scrollTop || document.body.scrollTop;
	    if(st > 100){
	        winScro.style.position = "fixed";
	        winScro.style.left = "0";
	        winScro.style.top = "0";
	    }else{
	        winScro.style.position = "static";
	    }
	}

/**************/
	var button1 = document.getElementsByClassName("button1")[0];
	var button2 = document.getElementsByClassName("button2")[0];
	var haosheng = document.getElementsByClassName("haosheng")[0];
	button1.onclick = function(){
		button1.style.border = "1px solid #ff0000";
		button2.style.border = "none";
		button1.style.background = "url(../images/duigou.png) no-repeat bottom right";
		button2.style.background = "none";
		haosheng.innerHTML = '"'+ parseInt(button1.value) + "ml" + '"';
	}
	button2.onclick = function(){
		button1.style.border = "none";
		button2.style.border = "1px solid #ff0000";
		button1.style.background = "none";
		button2.style.background = "url(../images/duigou.png) no-repeat bottom right";
		haosheng.innerHTML = '"'+ parseInt(button2.value) + "ml" + '"';
	}




/****************/
	var jian = document.getElementsByClassName("jian")[0];
	var num = document.getElementsByClassName("num")[0];
	var jia = document.getElementsByClassName("jia")[0];
	// var jia = document.getElementsByClassName("jia")[0];
	jian.onclick = function(){
		if(num.value > 1){
			num.value = num.value - 1;
		} else if(num.value == 1){
			jian.style.cursor = "not-allowed";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}
	jia.onclick = function(){
		if(num.value < 5){
			num.value = parseInt(num.value) + 1;
		} else if(num.value == 5){
			jia.style.cursor = "not-allowed";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}
}

// ******
window.onload = function() {
	var jiarugouwuche = document.getElementsByClassName("jiarugouwuche")[0];
	var Mengzhao = document.getElementsByClassName("Mengzhao")[0];
	var chance = document.getElementsByClassName("chance")[0];
	var chanceguanbi = document.getElementsByClassName("chanceguanbi")[0];
	var jixu = document.getElementsByClassName("jixu")[0];
	var jiesuan = document.getElementsByClassName("jiesuan")[0];
	jiarugouwuche.onclick = function(){
		Mengzhao.style.display = "block";
		chance.style.display = "block";
	}

	jixu.onclick = guanbi;
	jiesuan.onclick = guanbi;
	chanceguanbi.onclick = guanbi;
	function guanbi(){
		Mengzhao.style.display = "none";
		chance.style.display = "none";
	}
}

// ******