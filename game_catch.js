let pictures = document.getElementsByClassName('picture'); //Получение всех картинок
let game_bill = document.querySelector(".total"); //Счётчик очков
let record = document.querySelector(".record"); //Лучший результат
let timer = document.querySelector(".timer"); //Таймер 
let your_time = document.getElementById("time"); //Инпут для времени
let start_btn= document.getElementById("start");
let restart_btn = document.getElementById("restart");
let speed = 700; //Время, на которое появляется крот в мс
let all_mole = []; //Здесь будут все картинки кротов
let rec = 0; //Изначально рекорд 0
let total = 0; //Изначально очков набрано 0
let stoper = true; //Переменная для остановки функций исключением изнутри
let time; //Время, которое показывает таймер
let fina; //Глобальная переменная для интервала, который работает таймером и выдаёт результаты игры

//Функция, которая сработатет по нажатию кнопки старт, пример время из инпута и переведёт в численный тип, спрячет всех кротов
// и запустит все интервалы с функциями, остановится при нажатии стоп
function start(){
    time = parseInt(your_time.value);
  
     if(!stoper){
       stoper = true;
       return;
      
    }
    for(let picture of pictures){

        picture.classList.remove("picture_vis");
    }
     smash = setInterval(smash, speed);
     hide = setInterval(hide, speed*2);
    fina = setInterval(fin, 1000);
    start_btn.setAttribute('disabled', true);
    
    
}
//Функция делает всех кротов видимыми и останавливет все остальные 
function stop(){
   
    stoper = false;
    
}
//Функция делает случайного крота видимым
 function smash(){
   if(!stoper){
        return;
    }
    for(let picture of pictures){
        all_mole.push(picture);
    }
    all_mole[Math.floor(Math.random()*10)].classList.add("picture_vis");
    
}
//Функция прячет всех кротов
 function hide(){
   if(!stoper){
        return;
    }
    for(let picture of pictures){

        picture.classList.remove("picture_vis");
    }
    
}
//Функция, срабатывает по нажатию на крота, прячет всех кротов и добавляет 100 очков к счётчику
function score(){
  total += 100;
  game_bill.textContent = total;
  for(let picture of pictures){

    picture.classList.remove("picture_vis");
}
}

function restart(){
     time = parseInt(your_time.value);
    clearInterval(fina);
    fina = setInterval(fin, 1000);
    start();
    restart_btn.setAttribute('disabled', true);

}
function fin(){
    
    seconds = time%60;
    minutes = time/60%60;
    if(!stoper){
        rec = total;
        if(rec> +record.textContent){
        record.textContent = rec;}
        alert(`Time is out \nYour bill: ${total} Record: ${record.textContent}  `);
        total = 000;
        game_bill.textContent = '000';
        stoper = false;
        restart_btn.removeAttribute('disabled');
        clearInterval(fina);
        for(let picture of pictures){
            picture.classList.remove("picture_vis");}
        return;
    }

    if(time >= 0){
         timer.innerHTML = `${Math.trunc(minutes)}:${seconds}`;
          
    }
    else{
        
        rec = total;
        if(rec> +record.textContent){
        record.textContent = rec;}
        alert(`Time is out \nYour bill: ${total} Record: ${+record.textContent}  `);
        total = 000;
        game_bill.textContent = '000';
        stoper = false;
        restart_btn.removeAttribute('disabled');
        clearInterval(fina);
        for(let picture of pictures){

            picture.classList.remove("picture_vis");}
    }
   time--;
}

