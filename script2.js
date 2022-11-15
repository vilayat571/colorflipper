var btn = document.querySelector('button');
var body = document.querySelector("body");
var nav = document.getElementById("navbar");
var title = document.getElementById('title');

nav.style.width = "100%";
nav.style.height = "40px";
nav.style.padding = "6px 15px";
nav.style.background = "#fff";
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.alignItems = "center";
nav.style.margin = "10px 0px";

var lastElements = nav.lastElementChild.children;

for (let i = 0; i < lastElements.length; i++) {
    lastElements[i].style.textDecoration = "none";
    lastElements[i].style.padding = "6px 12px";
    lastElements[i].style.color = "black";
    lastElements[i].style.fontWeight = "bold";
};

var logo = document.getElementById("logo");
logo.style.fontSize = "20px";
logo.style.fontWeight = "bold";
logo.style.color = "black";

var content = document.getElementById("content");
var sty = content.style;

sty.height = "91vh";
sty.background = localStorage.getItem('color');
sty.display = "flex";
sty.justifyContent = 'center';
sty.alignItems = 'center'

btn.addEventListener('click',() => {

    var arrays = ['red','blue','yellow','green','orange','purple','grey','violet'];
    var rnd = Math.round((Math.random() * 10));
    var rColor = rnd > arrays.length ? arrays[0] : arrays[rnd];
    var mixColor = rColor !== undefined ? rColor : (Math.random().toPrecision(6)).slice(2,8);
    localStorage.setItem('color',mixColor);
    var color = localStorage.getItem('color');
    sty.background = ` ${isNaN(parseInt(color)) ? color : `#${color}`}`;
    title.textContent = `Background Color : ${isNaN(parseInt(color)) ? color : `#${color}`}`;
});


title.textContent = `Background Color : #${localStorage.getItem('color')}`
sty.background = `#${localStorage.getItem('color')}`;