const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const userResult = document.getElementById('result')
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const mul = document.querySelector('.mul')
const div = document.querySelector('.div')
const firstOption = document.getElementById("firstOption")
const secondOption = document.getElementById("secondOption")
const thirdOption = document.getElementById("thirdOption")
const audioFile = document.getElementById('myAudio')
const operand = document.getElementById("operand")
var answer = 0;


add.addEventListener('click',()=>{

operand.innerHTML='+';

    const generateEquation = () =>{
        let x = Math.floor((Math.random() * 10) + 1);
        let y = Math.floor((Math.random() * 10) + 1);
        let dummyAnswer1 = Math.floor((Math.random() * 14) + 1);
        let dummyAnswer2 = Math.floor((Math.random() * 16) + 1);
    
        
        console.log(x,y)
        
        num1.innerHTML = x;
        num2.innerHTML = y;
    
        answer = eval(x + y);
    
    allAnswers = [];
    switchAnswers = [];
    
    allAnswers = [answer,dummyAnswer1,dummyAnswer2]
    
    for(i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    console.log(switchAnswers)
    
    firstOption.innerHTML = switchAnswers[0]
    secondOption.innerHTML = switchAnswers[1]
    thirdOption.innerHTML = switchAnswers[2]
    
    }
    
    generateEquation()
    
    
        
    firstOption.addEventListener('click',()=>{
        if (firstOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    secondOption.addEventListener('click',()=>{
        if (secondOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    
    thirdOption.addEventListener('click',()=>{
        if (thirdOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
})

sub.addEventListener('click',()=>{

    operand.innerHTML='-';
    const generateEquation = () =>{
        let x = Math.floor((Math.random() * 9) + 1);
        let y = Math.floor((Math.random() * 2) + 1);
        let dummyAnswer1 = Math.floor((Math.random() * 14) + 1);
        let dummyAnswer2 = Math.floor((Math.random() * 16) + 1);
    
        
        console.log(x,y)
        
        if(x<y){
            x=y;
            num1.innerHTML = x;
            num2.innerHTML = y;
        
            answer = Math.floor(x - y);
        } else {
            num1.innerHTML = x;
            num2.innerHTML = y;
        
            answer = Math.floor(x - y);
        }
        
    
    allAnswers = [];
    switchAnswers = [];
    
    allAnswers = [answer,dummyAnswer1,dummyAnswer2]
    
    for(i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    console.log(switchAnswers)
    
    firstOption.innerHTML = switchAnswers[0]
    secondOption.innerHTML = switchAnswers[1]
    thirdOption.innerHTML = switchAnswers[2]
    
    }
    
    generateEquation()
    
    
        
    firstOption.addEventListener('click',()=>{
        if (firstOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    secondOption.addEventListener('click',()=>{
        if (secondOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    
    thirdOption.addEventListener('click',()=>{
        if (thirdOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
})

mul.addEventListener('click',()=>{

    operand.innerHTML='*';
    const generateEquation = () =>{
        let x = Math.floor((Math.random() * 10) + 1);
        let y = Math.floor((Math.random() * 10) + 1);
        let dummyAnswer1 = Math.floor((Math.random() * 14) + 1);
        let dummyAnswer2 = Math.floor((Math.random() * 16) + 1);
    
        
        console.log(x,y)
        
        num1.innerHTML = x;
        num2.innerHTML = y;
    
        answer = eval(x * y);
    
    allAnswers = [];
    switchAnswers = [];
    
    allAnswers = [answer,dummyAnswer1,dummyAnswer2]
    
    for(i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    console.log(switchAnswers)
    
    firstOption.innerHTML = switchAnswers[0]
    secondOption.innerHTML = switchAnswers[1]
    thirdOption.innerHTML = switchAnswers[2]
    
    }
    
    generateEquation()
    
    
        
    firstOption.addEventListener('click',()=>{
        if (firstOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    secondOption.addEventListener('click',()=>{
        if (secondOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    
    thirdOption.addEventListener('click',()=>{
        if (thirdOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
})

div.addEventListener('click',()=>{

    operand.innerHTML='/';
    const generateEquation = () =>{
        let x = Math.floor((Math.random() * 10) + 1);
        let y = Math.floor((Math.random() * 10) + 1);
        let dummyAnswer1 = Math.floor((Math.random() * 14) + 1);
        let dummyAnswer2 = Math.floor((Math.random() * 16) + 1);
    
        
        console.log(x,y)
        
        num1.innerHTML = x;
        num2.innerHTML = y;
    
        answer = Math.floor(x / y);
    
    allAnswers = [];
    switchAnswers = [];
    
    allAnswers = [answer,dummyAnswer1,dummyAnswer2]
    
    for(i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    console.log(switchAnswers)
    
    firstOption.innerHTML = switchAnswers[0]
    secondOption.innerHTML = switchAnswers[1]
    thirdOption.innerHTML = switchAnswers[2]
    
    }
    
    generateEquation()
    
    
        
    firstOption.addEventListener('click',()=>{
        if (firstOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    secondOption.addEventListener('click',()=>{
        if (secondOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
    
    
    thirdOption.addEventListener('click',()=>{
        if (thirdOption.innerHTML == answer){
            generateEquation()
        }
        else{
            audioFile.play();
        }
    })
})









