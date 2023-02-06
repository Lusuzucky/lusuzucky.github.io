// const images = document.querySelectorAll('img')

// const callback = entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const image = entry.target;
//       const data_src = image.getAttribute('data-src');
//       image.setAttribute('src', data_src);
//       observer.unobserve(image);
//       console.log('触发');
//     };
//   });
// };

// const observer = new IntersectionObserver(callback);

// images.forEach(image => {
//   observer.observe(image);
// });


//获取页面所有图片
const images = document.querySelectorAll('img')
//图片异步加载
preload(images,0);

//图片异步加载
function preload(images, index) {
  index = index || 0;
  images.forEach(image => {
    // if (image && image.length > index) {
      const data_src = image.getAttribute('data-src');
      image.setAttribute('src', data_src);
      //   //图片加载完成后回到函数中开始加载下一张图片
      // img.onload = function() {
      //     preload(images, index + 1);
      // };
      console.log('触发');
    // };
  }); 
}