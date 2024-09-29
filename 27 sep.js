// $('h2').css('color','red')
// console.log($('h2').text())

// $('h2').css({
//     color:'red',
//     backgroundColor:'green'
// })
// console.log('h2').text()

// console.log($('a').attr('href','http://flipkart.com'));

/*$('#btn1').on('click',()=>{
    $('#btn1').fadeOut()
})

$('#btn2').on('click',()=>{
    $('#btn1').fadeIn()
})*/

/*let arr=[1,2,3,45,56]
arr.map(()=>{
    
})*/

/*function user(a,b,c){
   this.userName=a,
   this.userName=b,
   this.userName=c
}
let data=  new user('rauf','lala','danish')
let data1=  new user('rauf1','lala2','danish3')
let data2=  new user('rauf1','lala2','danish3')
console.log(data,data1,data2);*/


/*import {user,sum} from './home.js'
console.log(user,"hehehe");
sum(5,5)*/

/* 28 september 2024 */

/*async function api(){
    try{
        let data= await axios('https://dummyjson.com/recipes')
        console.log(data);
    }catch{
        console.log('errrr');
    }
}
api()*/

/*let obj={
    id:1,
    name:"rahul",
    age:21
}

localStorage.setItem('user',JSON.stringify(obj))

let data= localStorage.getItem('user')
console.log(data);*/
let form= document.querySelector('form')

form.addEventListener('submit',()=>{
    let name= document.querySelector('#name').value
    let email= document.querySelector('#email').value
    let password= document.querySelector('#pass').value
    let data={
       name:name,
       email:email,
       pass:password
    }
    localStorage.setItem('user',JSON.stringify(data))
})

