const imgs = document.querySelectorAll('.headerslider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
function changeSlide() {
    for (let  i = 0;  i< imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display = 'block';
    
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll('.product');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

const scrollContainer2 = document.querySelectorAll('.movieproducts');
for (const item of scrollContainer2) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

const scrollContainer3 = document.querySelectorAll('.con4-allproduct');
for (const item of scrollContainer3) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
