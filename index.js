//获取页面所有图片
var images = document.images;
// console.log(images);

// const videos = document.querySelectorAll('.video');
// console.log(document.getElementsByClassName("video"));
// function playVideos(){
// 	document.getElementsByClassName("video").autoplay="autoplay";
// }


//图片异步加载
function preload(images, index) {
    index = index || 0;
    if (images && images.length > index) {
        var img = images[index];
		console.log(img);
        //图片加载完成后回到函数中开始加载下一张图片
        img.onload = function() {
			// console.log(index)
            preload(images, index + 1);
        };
        var src = img.getAttribute('data-src');
        img.src = src;
    }
}

