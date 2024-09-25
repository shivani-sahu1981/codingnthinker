/*let h2= document.queryselector('h2')

for (let i of h2){
    i.style.color="red"
}*/

/*let div= document.querySelector('div')

  let h2= document.createElement('h2')

  h2.innerText='hello'

  div.appendChild(h2)
  console.log(div,"dikh jaa.....");*/

 /* let a= document.querySelector('a')

  console.log(a.getAttribute('href'));
  a.setAttribute('href','http://flipkart.com')*/

  /*const arr = [
    'https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1692533436686-5c04084a8296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1698406096055-91a364147db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1726486896376-4d1340e2f672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D'
  ]
  const imageEl = document.querySelector('img');

  let num = 0;

  setInterval(function(){
    imageEl.setAttribute('src', arr[num]);
    num = (num + 1) % arr.length;
    num++
  },1000)*/

 /* function fun1(){
    console.log('hiii');
  }*/

  // let btn= document.querySelector('button')

  /*btn.onclick=function(){
    console.log('hello');
  }*/
 
  // btn.addEventListener('click',function(){
  //   console.log('hello');
  // }) 

  // 21 sep 2024


 /* let btn= document.querySelector('button')
  let body= document.querySelector('body')
  let h2= document.querySelector('h2')
  btn.addEventListener('click',function(){
       console.log('hello');
       h2.innerText='hello'
       body.style.backgroundColor='green'
  })*/

 /* let inp= document.querySelector('input')

  inp.addEventListener('input',(e)=>{
    // console.log('hiiiiii');
     console.log(e.target.value);
  })*/

  /*   let formE= document.querySelector('form')

     formE.addEventListener('submit',(e)=>{
      e.preventDefault()
      console.log('hello')
      console.log(formE.elements[0].value);
      console.log(formE.elements[1].value);
     })*/


      /*let inp= document.querySelector('input')
      let btn= document.querySelector('button')
      let ul= document.querySelector('ul')

      btn.addEventListener('click',()=>{
        let data=inp.value

        let li= document.createElement('li')
        li.innerText=data

        ul.append(li)
        inp.value=''

      })*/


       /* let inp= document.querySelector('input')
        let button= document.querySelectorAll('button')
        for(let btn of button){
          btn.addEventListener('click',(e)=>{
            let text= e.target.innerText
            if(text==='c'){
              inp.value=''
            }
            else if(text==='='){
              inp.value= eval(inp.value)
            }
            else{
              inp.value=inp.value+text
            }
          })
        }*/


// <h1>24 septemer 2024</h1>

/* let canvas=  document.querySelector('canvas')
 let pen=   canvas.getContext('2d')
 pen.fillStyle='red'
 let cell=50
 let snakeC=[[0,0]]
 let direction='right'
 let score=100
 let gameOver=false
 let randomData=randomCell()
  let id=  setInterval(()=>{
    draw()
    update()

 },200)

//  pen.fillRect(0,0,cell,50)


document.addEventListener('keydown',(e)=>{
    // console.log(e,"he");
    if(e.key==='ArrowLeft'){
        direction='left'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowUp'){
        direction='up'
    }
    else{
        direction='right'
    }
    
    // console.log('hehehe');
    

})


function draw(){
    if(gameOver===true){
        pen.font='40px sans-sarif'
        pen.fillStyle='white'
        pen.fillText('gameOver',200,300)
        clearInterval(id)
        return
    }
    pen.clearRect(0,0,1200,600)
    for(let i of snakeC){
        pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='green'
    pen.fillRect(randomData[0],randomData[1],cell,cell  )
    pen.font='50px sans-sarif'
    pen.fillText(`${score}`,500,200)

}
function update(){
   let headX=  snakeC[snakeC.length-1][0]
  let headY=  snakeC[snakeC.length-1][1]
   let newX
   let newY
   if(direction==='up'){
    newX=headX
    newY=headY-cell
    if(newY<0){
        gameOver=true
    }

   }
   else if(direction==='down'){
    newX=headX
    newY=headY+cell
    if(newY===600){
        gameOver=true
    }
   }
   else if(direction==='left'){
    newX=headX-cell
    newY=headY
    if(newX<0){
        gameOver=true
    }
   }
   else{
    newX=headX+cell
    newY=headY
    if(newX===1200){
        gameOver=true
    }

   }
   if(newX===randomData[0] && newY===randomData[1]){
     randomData=   randomCell()
     score+=1
   }
   else{
    snakeC.shift()
   }
   snakeC.push([newX,newY])

//   console.log(headX,headY,"hdehehe");
  


}

function randomCell(){
    return [
      Math.floor(Math.random()*(1200-cell)/cell)*cell  ,
        
        Math.floor(Math.random()*(600-cell)/cell)*cell
    ]
}

*/

       /*fetch('https://dummyjson.com/user/me').then((res)=>{
        return res.json()
       }).then((data)=>{
        console.log(data);
       })*/

        /*let apikey='9f6290d6cda9a36a63755fadee71f83d'
        let city='bhopal'
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).
        then((res)=>{
            return res.json()
        
        }).then((data)=>{
            console.log(data);
            
        })*/

        /*let btn= document.querySelector('button')
        btn.addEventListener('click',()=>{
          let inp= document.querySelector('input')
          let city=inp.value
          let h2= document.querySelector('h2')
          let apikey='9f6290d6cda9a36a63755fadee71f83d'
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).
        then((res)=>{
            return res.json()
        
        }).then((data)=>{
            console.log(data);
            h2.innerText=data.main.temp
        })
        })*/

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).
        then((res)=>{
            return res.json()
        
        }).then((data)=>{
            console.log(data);
            
        })

        letbtn= document.querySelector('button')



