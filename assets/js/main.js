const title = document.querySelector('#title')
title.innerHTML = '12345678'


// ============================== CONST LET VAR
// var age = 8; // GÁN LẠI GIÁ TRỊ , HOSTING


// age = 10;

// console.log(age); // 10


// const age = 8 // hằng số không bị thay đổi giá trị 

// // age = 10;

// // console.log(age);

// function getAge(){ // block scope  => nó chỉ gọi trong cùng 1 phạm vi code
//     const age = 10;
//     console.log(age);
// }

// getAge()



// let age = 8; // gán lại được giá trị


// age = 10;

// console.log(age)

// let


// các kiểu dữ liệu : number , string ,boolean , array , object

// const animal = [
//     'dog',
//     'cat',
//     'snack',
//     'chicken',
// ] // bắt đầu từ phần tử 0
// // animal.forEach(element => {
// //     console.log(element)
// // });

// animal.push('bird');


// const student = {
//     name : 'Quyeest',
//     age : 24,
//     address : 'ha noi'
// }


// const animal = [
//     {
//         name : 'Quyeest',
//         age : 24,
//         address : 'ha noi'
//     },
//     {
//         name : 'Quyeest1',
//         age : 24,
//         address : 'ha noi'
//     }
// ] 
//  animal.forEach(element => {
//      console.log(element.name)
//  });

// function onClickButton(){
//     if (title.style.display === 'none') {
//         title.style.display = 'block'
//     }else{
//         title.style.display = 'none'
//     }
// }



// The Spread (...) Operator

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]

// const arrMegre = arr1.concat(arr2)

// const arrMegre = [...arr1 , ...arr2]

// console.log(arrMegre);


// Destructuring là phân tách dữ liệu 


// const student = {
//     name : 'Quyeest',
//     age : 24,
//     address : 'ha noi'
// } 

// const {name,age,address} = student

// console.log(name);

// const onClickButton = () => {
//     if (title.style.display === 'none') {
//         title.style.display = 'block'
//     }else{
//         title.style.display = 'none'
//     }
// }


// so sánh == so sánh giá trị với === so sánh giá trị và kiểu dữ liệu



const student = 10

const student1 = '10'


console.log('==' , student == student1);

console.log('===' , student === student1);