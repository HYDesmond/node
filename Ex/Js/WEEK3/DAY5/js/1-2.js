var imgBox = document.getElementById('imgBox'),
    curImg = imgBox.getElementsByTagName('img')[0];

function computed() {
    if (imgBox.myIsLoad) return;//=>已经处理过了就没必要重复处理了
    var A = utils.offset(imgBox).top + imgBox.offsetHeight,
        B = utils.winBox('clientHeight') + utils.winBox('scrollTop');
    if (A <= B) {
        imgBox.myIsLoad = true;//=>条件第一次符合,我们已经开始加载真实的图片了,不管条件是否加载完成,都给当前盒子记录一个自定义属性存储一个值:代表当前图片已经处理过了,以后在符合条件的时候,没必要在重复处理了
        var tempImg = new Image();
        tempImg.onload = function () {
            curImg.src = this.src;
            curImg.style.display = 'block';
            tempImg = null;
        };
        tempImg.src = curImg.getAttribute('data-img');
    }
}
computed();
window.onscroll = computed;