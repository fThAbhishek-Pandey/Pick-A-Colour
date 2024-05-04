const randomColor =function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for( let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalid =null; 
const startChangingColor = function (){
  intervalid =   setInterval (changeBgColor , 1000);
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    } 
};
const pickChangingColor = function(){
    clearInterval(intervalid);
    intervalid =null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#pick').addEventListener('click',pickChangingColor);


 