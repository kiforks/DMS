// function spinIncrement() {
//   let number = document.querySelector('.services__number');
//   let sliderButton = document.querySelectorAll('.services__button');
//   let start = +number.innerHTML, end = +number.dataset.max;
//   let element = document.querySelector('.services__item--track');
//   let index = true;
//
//   if(index) {
//     sliderButton.forEach(button => {
//       button.addEventListener('click', event => {
//         event.preventDefault();
//
//         setTimeout(() => {
//           if(element.classList.contains('services__item--active') && index) {
//             let interval = setInterval(function() {
//               number.innerHTML = ++start;
//               if(start == end) {
//                 clearInterval(interval);
//               }
//             }, 5);
//             index = false;
//           }
//         },1000)  // Зависит от скорости анимации слайда
//       })
//     })
//   }
// }
//
// spinIncrement();



