var container = document.createElement('div');
 container.setAttribute('class','container');

 var row = document.createElement('div');
 row.setAttribute('class','row');

 var col1 = document.createElement('div');
 col1.setAttribute('class','col-2');

 var col2 = document.createElement('div');
 col2.setAttribute('class','col-8');
 

 var rowa = document.createElement('div');
 rowa.setAttribute('class','row');
 var cola = document.createElement("div");
cola.setAttribute("class", "col-12");

var col3 = document.createElement("div");
col3.setAttribute("class", "col-2 ");

row.append(col1, col2, col3);
container.append(row);

rowa.append(cola);
col2.append(rowa);
document.body.append(container);

var tb = document.createElement('table');
tb.setAttribute = ('class', 'table-striped');
//document.getElementByClassName('table').style.border = "solid black";

var tr = document.createElement('tr');
tr.setAttribute = ('class', 'row1');
var head1 = document.createElement('th');
head1.classList.add("bg-dark", 'text-light');
head1.setAttribute = ('class', 'head');
head1.innerHTML = 'Name';
var head2 = document.createElement('th');
head2.setAttribute = ('class', 'head');
head2.innerHTML = 'Email';
var head3 = document.createElement('th');
head3.setAttribute = ('class', 'head');
head3.innerHTML = 'Id';
tr.append(head1, head2, head3);
tb.append(tr);

var arr = [];
head1.style.width = '50px';
head1.style.height = '50px';

head2.style.width = '50px';
head2.style.height = '50px';

head3.style.width = '50px';
head3.style.height = '50px';
head3.style.padding = '10px';
head1.style.padding = '10px';
head2.style.padding = '10px';

var b = 10;
 var request = new XMLHttpRequest();
 request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
request.onload = function fun() {
    var data = JSON.parse(this.response);
    console.log(data);

 function print(x) {
     tb.innerHTML=" ";
     for (var i = ((x - 1) * b); i < (b * x); i++) {

        console.log(data, i, x, b);
        var tr1 = document.createElement('tr');
        tr1.setAttribute = ('id', 'row1');

        var dataa1 = document.createElement('td');
        dataa1.innerHTML = data[i].name;
        var dataa2 = document.createElement('td');
        dataa2.innerHTML = data[i].email;
        var dataa3 = document.createElement('td');
        dataa3.innerHTML = data[i].id;
        tr1.append(dataa3, dataa1, dataa2);
        tb.append(tr1);

        document.body.append(tb);
        col2.append(tb);

        dataa1.style.width = '50px';
        dataa1.style.height = '50px';
        dataa1.style.border = '2px solid black';

        dataa2.style.width = '50px';
        dataa2.style.height = '50px';
        dataa2.style.border = '2px solid black';

        dataa3.style.width = '50px';
        dataa3.style.height = '50px';
        dataa3.style.padding = '10px';
        dataa1.style.padding = '10px';
        dataa2.style.padding = '10px';
        dataa3.style.border = '2px solid black';
    }
 }
    for (var j = 0; j <= (data.length / b) - 1; j++) {

        var a = document.createElement('button');

        a.innerHTML = j + 1;


        document.body.appendChild(a);
        arr.push(a);

        console.log(arr[arr.length - 1], arr[arr.length - 1].innerHTML);
    }
    console.log(arr[arr.length - 1].innerHTML);
    arr.forEach(element => {
        element.onclick = function() {
            print(element.innerHTML);
        }
    });
}

