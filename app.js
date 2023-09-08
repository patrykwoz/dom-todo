function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`

}

const letters = document.querySelectorAll('.letter');


setInterval(function(){
    for (let letter of letters){
        letter.style.color = randomRGB();
    }
    
}, 500)


function makeBody(color){
    document.body.style.backgroundColor = color;
}
const btn = document.querySelector('button.mack');
btn.addEventListener("click", function (ev) {
    makeBody('cyan');
    console.log('Im clicke');
    console.log(ev);
})


document.addEventListener("mousemove", function(ev){
    let r = Math.round(ev.pageY*255/window.innerHeight);
    let b = Math.round(ev.pageX*255/window.innerWidth);
    document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;

})


const form = document.querySelector('#beaverform');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log(brandInput.value, colorInput.value, fontSizeInput.value);
    const newLogo = makeLogo(
        brandInput.value,
        colorInput.value,
        fontSizeInput.value
    );
    results.appendChild(newLogo);
});

function makeLogo(text,color, size){
    const logo = document.createElement('h2');
    
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;

}

document.addEventListener("keypress", function(e){
    console.log(e.key)
})

// const removeButtons = document.querySelectorAll('li button');
// for(let btn of removeButtons){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();

// });


// }

// const beaverForm = document.querySelector('#add-friend');
// const beaverInput = document.querySelector('#first-name');
// const beaverList = document.querySelector('#beaver-list');

// beaverForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(beaverInput.value);
//     const newBeaver = document.createElement('li');
//     const removeBeaverBtn = document.createElement('button');
//     removeBeaverBtn.innerText = 'Unfriend';
//     removeBeaverBtn.addEventListener('click', function(e){
//         e.target.parentElement.remove();

// });
//     newBeaver.innerText = beaverInput.value;
//     newBeaver.appendChild(removeBeaverBtn);
//     beaverInput.value = '';
//     beaverList.appendChild(newBeaver);


// })



const beaverForm = document.querySelector('#add-friend');
const beaverInput = document.querySelector('#first-name');
const beaverList = document.querySelector('#beaver-list');

beaverList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    } else if(e.target.tagName  === 'LI'){
        e.target.classList.add('best-beaver');
        const heart = document.createElement('span');
        heart.innerHTML = '&hearts;';
        e.target.prepend(heart);

    }
})

beaverForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(beaverInput.value);
    const newBeaver = document.createElement('li');
    const removeBeaverBtn = document.createElement('button');
    removeBeaverBtn.innerText = 'Unfriend';
    newBeaver.innerText = beaverInput.value;
    newBeaver.appendChild(removeBeaverBtn);
    beaverInput.value = '';
    beaverList.appendChild(newBeaver);


})