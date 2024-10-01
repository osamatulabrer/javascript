// // creating array 
// // arrey in js is written two ways
// // 1 literal array
// let arr = [6,8,9,'poil','polk'];
// console.log(arr);
// // 2 arrey constructor
// let arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);


// let arr2 = new Array(5);
// console.log(arr2);

// // 2. Accessing Array Elements
// let arr3 = [4,56,76,76,'loki'];
// console.log(arr3[2]);

// // 000000000000000
// let room = 'gggggg';
// console.log(room);
// room = 'hhhhhh';
// console.log(room);
// // 0000000000000000000

// // dom select

// // document.getElementById('google').textContent = 'this is my boy';
// // document.getElementsByClassName('roton').innerHTML = 'nowshad mahfuz';
// // let element = document.getElementsByTagName('div');
// // element.innerHTML = 'url';
// // // console.log(element)

// // document.querySelector('#pop').textContent = 'window';
// // document.querySelector('.testy').innerText = 'door';
// // document.querySelectorAll('li').innerHTML = '1day';
// // let elem = document.querySelectorAll('li');
// // let amol = document.querySelector('li');
// // console.log(amol);
// // console.log(elem);
// // // dom select
// // // dom style
// // let widow = document.getElementsByClassName('testy');
// // console.log(widow);
// // widow.style.backgroundColor = "red";




// let widow = document.setAttribute('type', 'number' );
// // console.log(widow);
let myId = document.getElementById('one');
myId.style.color = 'green';
console.log(myId);

let myFun = function(){
    let color =  myEvent.style.backgroundColor;
    if(color == 'gray'){
        myEvent.style.backgroundColor = 'red';
    }
    else{
        myEvent.style.backgroundColor = 'gray';
    }
}

let myEvent = document.getElementById('one');

myEvent.addEventListener('click', myFun);




let myInp = document.querySelector('input');
let myBtn = document.querySelector('button');
console.log(myBtn)

myBtn.addEventListener('click', function(){
    let myInpType = myInp.getAttribute('type');
    if(myInpType == 'text'){
        myInp.setAttribute('type', 'password')
    }
    else{
        myInp.setAttribute('type', 'text');
    };

});



let hide = document.querySelector('.hide');
let show = document.querySelector('.show');
console.log(show);


show.addEventListener('click', function(){
    let input = hide.getAttribute('type');
    if(input == 'text'){
        hide.setAttribute('type', 'password');
        show.textContent = 'show';
    }
    else{
        hide.setAttribute('type', 'text');
        show.textContent = 'hide';
    }
}
);


let id = document.getElementById('two');
id.addEventListener('click', function(){
    let className = id.classList;

    let check = className.contains('blue');
    // if(check == true){
    //     className.remove('blue');
    //     className.add('green');
    // }else{
    //     className.add('blue');
    //     className.remove('green');
    // }
    className.toggle('blue');
    className.toggle('green');
});