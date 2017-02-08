window.onload = function(){

	PBL('wrap','box');

	var data = [
					{'src':'1.jpg','title':'111'},
					{'src':'2.jpg','title':'222'},
					{'src':'3.jpg','title':'333'},
					{'src':'4.jpg','title':'444'},
					{'src':'5.jpg','title':'555'},
					{'src':'6.jpg','title':'666'},
					{'src':'7.jpg','title':'777'},
					{'src':'8.jpg','title':'888'},
					{'src':'9.jpg','title':'999'},
					{'src':'10.jpg','title':'000'}
				];
	
	

	window.onscroll = function(){

		if(getCheck()){
			var wrap = document.getElementById('wrap');
			for(i in data){
				
				var box = document.createElement('div');
				box.className = 'box';
				wrap.appendChild(box);

				var info = document.createElement('div');
				info.className = 'info';
				box.appendChild(info);

				var pic = document.createElement('div');
				pic.className = 'pic';
				info.appendChild(pic);

				var img = document.createElement('img');
				img.src = 'images/'+data[i].src;
				img.style.height = 'auto';
				pic.appendChild(img);

				var title = document.createElement('div');
				title.className = 'tt';
				info.appendChild(title);

				var a = document.createElement('a');
				a.innerHTML = data[i].title;
				title.appendChild(a);
			}
			PBL('wrap','box');
		}
	}
}

function PBL(wrap,box){

	var wrap = document.getElementById(wrap);
	var boxs  = getClass(wrap,box);

	var boxW = boxs[0].offsetWidth;
	var colsNum = Math.floor(document.documentElement.clientWidth/boxW);
	wrap.style.width = boxW*colsNum+'px';

	var everyH = [];
	for (var i = 0; i < boxs.length; i++) {
		if(i<colsNum){
			everyH[i] = boxs[i].offsetHeight;
		}else{
			var minH = Math.min.apply(null,everyH);
			var minIndex = getIndex(minH,everyH); 
			getStyle(boxs[i],minH,boxs[minIndex].offsetLeft,i);
			everyH[minIndex] += boxs[i].offsetHeight;
		}
	}
}

function getClass(wrap,className){
	var obj = wrap.getElementsByTagName('*');
	var arr = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className == className){
			arr.push(obj[i]);
		}
	}
	return arr;
}

function getIndex(minH,everyH){
	for(index in everyH){
		if (everyH[index] == minH ) return index;
	}
}

function getCheck(){
	var documentH = document.documentElement.clientHeight;
	var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
	return documentH+scrollH>=getLastH() ?true:false;
}

function getLastH(){
	var wrap = document.getElementById('wrap');
	var boxs = getClass(wrap,'box');
	return boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;
}

var getStartNum = 0;
function getStyle(box,top,left,index){
    if (getStartNum>=index) return;
    $(box).css({
    	'position':'absolute',
        'top':top,
        "left":left,
        "opacity":"0"
    });
    $(box).stop().animate({
        "opacity":"1"
    },999);
    getStartNum = index;
}