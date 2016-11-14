//////////////////////////////////////////////////
function turnShow(x,e){
    // x is the inner box which is moving
    //e is which width according to...
    this.x = document.getElementById(x);
    this.element =document.getElementById(e);
    this.list= this.x.getElementsByTagName('img');
    this.list.length = this.x.getElementsByTagName('img').length;
    this.distance = this.element.offsetWidth;
    this.index = 0;
    this.time;
    this.Go = Go;
    this.forward = forward;
    this.backward = backward;
    this.maxT = 30;
}
function Go(){
    var x = this.x;
    var start = x.offsetLeft;
    var end = this.index*this.distance*(-1);
    var change = end - start;
    var timer;
    var t = 0;
    var maxT =this.maxT;
    clearInterval(timer);
    timer =setInterval(function(){
        t++;
        if(t>=maxT){
            clearInterval(timer);
        }
        x.style.left = change/maxT*t+start+"px";
    },10)
}
function forward(){
    this.flag = 0;
    this.index++;
    if(this.index>=this.list.length){
        clearInterval(this.time);
     }
    this.Go();
}
function backward() {
    this.index--;
    if(this.index<=0){
       clearInterval(this.time);
    }
    this.Go();
}


///////////////////////////////////////////////////////
function shine(x){
    this.x = document.getElementById(x);
    this.up = up;
    this.down = down;
    this.start =start;
}
function up(){
    var x = this.x;
    var s = 0;
    var change = 1;
    var timer;
    var t = 0;
    clearInterval(timer);
    timer =setInterval(function(){
        t = t+ 0.01;
        if(t>=change){
            clearInterval(timer);
        }
        x.style.opacity = t+s;
        //console.log(x.style.opacity);
    },20)
}
function down(){
    var x = this.x;
    var s = 0;
    var change = 1;
    var timer;
    var t =0;
    clearInterval(timer);
    timer =setInterval(function(){
        t = t-0.01;
        if(t<0){
            clearInterval(timer);
        }
        x.style.opacity = t+s;
    },20)
}
function start(){
    var x = this.x;
    var s = 0;
    var change = 1;
    var timer;
    var t = 0;
    var maxT = this.maxT;
    var flag = 1;
    timer = setInterval(function(){
        if(flag == 1){
            t =t+0.01;
            x.style.opacity = t+s;
            if(t>=change){
                //learInterval(timer);
                flag=0;
                //t =0.5;
            }
            //console.log(x.style.opacity);
            //console.log(flag);
        }
        if(flag == 0){
            t=t-0.01;
            x.style.opacity = t+s;
            if(t<=0){
                //clearInterval(timer);
                flag = 1;
            }
            //console.log(x.style.opacity);
            //console.log(flag);
        }
    },20)
}
////////////////////////////////////////////////////////////
function getPosition(i){
    var n = i+1;
    var row = parseInt(n/7,10);
    var col = n%7;
    var x = 100+col*150;
    var y = row*200;
    x = x+ Math.random()*200-100;
    y = y+ Math.random()*60-30;
    var result = new Array(2);
    result[0]=x;
    result[1]=y;
    return result;
}

function getRotation(){
    var rotation =0;
    rotation = Math.random()*90 -45;
    return rotation;
}

function getzIndex() {
    var z =0;
    z = parseInt(Math.random()*10-1,10);
    return z;
}


/////////////////////////////////////////////////////////////
function img(x){
    this.i =x;
    this.style = new Array();
    this.style['left'] = getPosition(this.i)[0];
    this.style['top'] = getPosition(this.i)[1];
    this.style['zIndex'] = getzIndex();
    this.style['rotation']=getRotation();
}

function animation(img1,img2,obj){
    var img1 = img1;
    console.log(img1);
    var img2 = img2;
    var obj = obj;
    console.log(obj);
    var timer;
    var t=img2.style["top"]-img1.style["top"];
    var l=img2.style["left"]-img1.style["left"];
    var z=img2.style["zIndex"]-img1.style["zIndex"];
    var r=img2.style["rotation"]-img1.style["rotation"];
    console.log(r);
    var n=0;
    var maxN = 100;
    clearInterval(timer);
    timer = setInterval(function(){
        n++;
        if(n>=maxN){
            clearInterval(timer);
        }
        obj.style.left=l/maxN*n+img1.style['left']+"px";
        obj.style.top=t/maxN*n+img1.style['top']+"px";
        obj.style.zIndex =z/maxN*n+img1.style['zIndex'];
        obj.style.transform ="rotate("+(r/maxN*n+img1.style['rotation'])+"deg)";

    },10);
}
