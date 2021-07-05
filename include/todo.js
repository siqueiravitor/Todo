var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        store();
    };
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        store();
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Notas vazias não podem ser adicionadas!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            div.remove();
            store();
        };
    }
    store();
}
function removeAll() {
    window.localStorage.clear();
    list.innerHTML = "";
}
function removeChecked() {
    var myClassList = document.getElementsByClassName('checked');
    var i;
    for (i = 0; i < myClassList.length; i++) {
        while (myClassList) {
            myClassList[i].style.display = "none";
            myClassList[i].remove();
            store();
        }
    }
}

function store() {
    window.localStorage.myitems = list.innerHTML;
}
function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
        list.innerHTML = "";
    } else {
        list.innerHTML = storedValues;
    }
}
getValues();
  
