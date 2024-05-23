function clock() {

let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hour.innerHTML = h;
minutes.innerHTML = m;
second.innerHTML = s;

let interval = setInterval(clock , 100);

}


clock();