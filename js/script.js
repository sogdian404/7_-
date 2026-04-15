//cards
const card = `<div class="card">
            <div class="card_img">
                <img src="img/1.jpg" alt="hoimg">
            </div>
            <div class="card_text">
                <div class="card_up">
                    <div class="card_title">Название продукта</div>
                    <div class="card_info">
                        <div class="card_count">
                            <button class="minus">-</button>
                            <span>1</span>
                            <button class="plus">+</button>
                        </div><p class="card_price">100 Руб.</p>
                    </div>
                </div>
                <p class="card_desc">Краткое описание продукта или товара</p>
                <button class="card_btn">Добавить в корзину</button>
            </div>
        </div>`;
document.querySelector('cards').innerHTML += card;
const cards = document.querySelectorAll('cards .card');
cards.forEach(item=>{
    let count = 1;
    let price = 100;
    item.querySelector('.minus').addEventListener('click', ()=>{
        const span = item.querySelector('span');
        
        if (span.textContent >1)
        {
            count--;
            span.textContent = count;
            price = count * 100;
            item.querySelector('.card_price').textContent = `${price} Руб`;
        }
        
    })
    item.querySelector('.plus').addEventListener('click', ()=>{
        const span = item.querySelector('span');
        
        if (span.textContent <10)
        {
            count++;
            span.textContent = count;
            price += 100;
            item.querySelector('.card_price').textContent = `${price} Руб`;
        }
    })
})

//slider

const slider = document.querySelector('slider');
const rightBtn = slider.querySelector('.right_btn');
const leftBtn = slider.querySelector('.left_btn');

const items = (slider.querySelectorAll('img')).length -1;

let current = 0;
rightBtn.addEventListener('click', ()=>{
    if (current < items)
    {
        current++;
        slider.querySelector('.slider').style.transform = `translateX(-${current*100}%)`;
    }
     else
    {
        current = 0;
        slider.querySelector('.slider').style.transform = `translateX(0%)`;
    }
})
leftBtn.addEventListener('click', ()=>{
    if (current > 0)
    {
        current--;
        slider.querySelector('.slider').style.transform = `translateX(-${current*100}%)`;
    }
    else
    {
        current = items;
        slider.querySelector('.slider').style.transform = `translateX(-201%)`;
    }
})
//finder
const finder = document.querySelector('finder');

const btn = finder.querySelector('.btn_result');
const num = finder.querySelector('#num');
const result = finder.querySelector('.result');
const trying = finder.querySelector('.trying');

const n = Math.floor(Math.random() * 100);
let trycount = 0;
btn.addEventListener('click', ()=>{
    if (num.value >0){
        if (num.value == n){
            trying.innerHTML = ` `;
            result.innerHTML = `Поздравляем вы выиграли за ${trycount} Попыток`;
            btn.disabled = true;
            num.disabled = true;
            setTimeout(()=>{
                window.location.reload();
            },2000)
        }else {
            let i = Math.abs(n - num.value);
            console.log(n,i);
            switch(true){
                case i>60 && i <=100 :result.innerHTML = `Мороз`; result.style.color = `blue`; break;
                case i>40 && i <=60 : result.innerHTML = `Холодно`; result.style.color = `aqua`; break;
                case i>20 && i <=40 : result.innerHTML = `Тепло`; result.style.color = `orange`; break;
                case i>10 && i <=20 : result.innerHTML = `Горячо`; result.style.color = `indianred`; break;
                case i>0 && i <=10 : result.innerHTML = `Очень горячо`; result.style.color = `red`; break;
            }
            trycount++;
        }
        trying.innerHTML = `Попыток ${trycount}`;
    }
    else
        alert("Введите число");
})

//timeUTC
const now = new Date();

const FormatTime = (value) => {
    return `${(now.getUTCHours() + value).toString().padStart(2,"0")}:${now.getUTCMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}

document.querySelector('.item_moscow').textContent = `${FormatTime(3)}`;
document.querySelector('.item_london').textContent = `${FormatTime(0)}`;
document.querySelector('.item_newyork').textContent = `${FormatTime(-4)}`;

setInterval(()=>{
    const now = new Date();
    const FormatTime = (value) => {
    return `${(now.getUTCHours() + value).toString().padStart(2,"0")}:${now.getUTCMinutes().toString().padStart(2,"0")}:${now.getSeconds().toString().padStart(2,"0")}`;
}
    document.querySelector('.item_moscow').textContent = `${FormatTime(3)}`;
    document.querySelector('.item_london').textContent = `${FormatTime(0)}`;
    document.querySelector('.item_newyork').textContent = `${FormatTime(-4)}`;
},1000)

const orelIReshka = document.querySelector("rand");


const buttom = orelIReshka.querySelector('.coin_btn');
const coin = orelIReshka.querySelector('.coin');

let i=0;
let deg = 0;

console.log(coin.children)

buttom.addEventListener('click',()=>{
    deg += 3600;
    coin.style.transform = `rotate3d(-1,1,-1, ${deg}deg)`
        coin.children[Math.round(Math.random())].style.zIndex = ++i;
})