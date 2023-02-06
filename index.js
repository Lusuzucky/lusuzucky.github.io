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


// 创建一个数组，存放要加载的图片src
var src = new Array();
		src.push('img/01.jpg');
    src.push('img/02.jpg');
    src.push('img/03.jpg');
		src.push('img/04.jpg');
		src.push('img/05.jpg');
		src.push('img/06.jpg');
		src.push('img/08.jpg');
		src.push('img/09.jpg');
		src.push('img/07.jpg');
		src.push('img/10_1.jpg');
		src.push('img/10_2.jpg');
		src.push('img/10_3.jpg');
		src.push('img/10_4.jpg');
		src.push('img/10_5.jpg');
		src.push('img/10_6.jpg');
		src.push('img/11.jpg');
		src.push('img/12_1.jpg');
		src.push('img/12_2.jpg');
		src.push('img/12_3.jpg');
		src.push('img/13.jpg');
		src.push('img/01.jpg');


// 图片按顺序加载，使用递归算法，直到加载完最后一张图片，退出递归
function preload(src, index) {
	index = index || 0;
	if(index >= 21) {
		return false;
	}
	if (src && src.length > index) {
		var img = new Image();
		img.onload = function() {
				preload(src, index + 1);
		}
		img.src = src[index];
	}
}
preload(src);


