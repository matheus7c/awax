let totalSliders = document.getElementsByClassName('sliders')[0].clientWidth;
console.log (totalSliders)
let slider = document.getElementsByClassName('slide')[0].clientWidth;
console.log (slider)
const oneSlider = document.getElementsByClassName('slide')[0].clientWidth;
console.log (oneSlider)
let twoSliders = oneSlider *2;
console.log(twoSliders)

let currentSlide = 0;
// document.querySelector('.sliders').style.marginLeft = `-${twoSliders}px`;

setInterval(() => {
    nextSlide()
}, 5000);

// document.querySelector('.sliders').style.marginLeft = "-2556px";
function nextSlide(){
    if(currentSlide < 2 ){
        document.querySelector('.sliders').style.marginLeft = `-${slider}px`;
        slider = slider + slider;
        currentSlide++;

    }else{
        document.querySelector('.sliders').style.marginLeft = ``;
        currentSlide = 0;
        slider = oneSlider;
    }

}

pointer = document.querySelectorAll('.banner .sliders-pointers .pointer');
console.log(pointer);




// document.querySelectorAll('.pointer').forEach((size, sizeIndex)=>{
//     size.addEventListener('click', (e)=>{
//         document.querySelector('.pointer.active').classList.remove('active');
//         size.classList.add('active');
//     });
// });



// class Sliders {
//     /**
//      * Recebe o seletor CSS para o Slider a ser criado e no segundo parametro
//      * o mesmo só que para os pontinhos.
//      * O terceiro parametro é opcional, e representa o index que slider vai iniciar.
//      *
//      * @param {HTMLElement} slidersSelector
//      * @param {NodeListOf<HTMLElement>} countersSelector
//      * @param {number} index
//      */
//     constructor(sliders, counters, index = 0) {
//         /**
//          * @var {HTMLElement}
//          */
//         this.element = sliders;
  
//         /**
//          * @var {NodeListOf<HTMLElement>}
//          */
//         this.counters = counters;
//         /**
//          * @var {number}
//          */
//         this.index = index;
//     }
  
//     /**
//      * Recebe o index do slide a ser movido e move o slider.
//      *
//      * @param {number} index
//      * @returns {this}
//      */
//     move(index) {
//         this.activeCounter(index);
//         this.element.style.marginLeft = `${-1 * (window.innerWidth * index)}px`;
//         return this;
//     }
  
//     activeCounter(index) {
//         const activeClass = "active";
//         this.counters.forEach((counter) =>
//             counter.classList.remove(activeClass)
//         );
//         this.counters[index].classList.add(activeClass);
//     }
  
//     init() {
//         this.counters.forEach((counter, index) => {
//             counter.addEventListener("click", () => {
//                 this.index = index;
//                 this.move(index);
//             });
//         });
  
//         window.addEventListener("resize", () => {
//             this.move(this.index);
//         });
//     }
// }
   
// const sliders = document.querySelector(".sliders");
// const slidersCounters = document.querySelectorAll(
//     ".sliders + .sliders-pointers > .pointer"
// );
   
// const s = new Sliders(sliders, slidersCounters).init();