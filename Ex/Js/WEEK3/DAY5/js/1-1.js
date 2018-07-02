var imgBox = document.getElementById('imgBox'),
    curImg = imgBox.getElementsByTagName('img')[0];

function computed() {
    var A = utils.offset(imgBox).top + imgBox.offsetHeight,
        B = utils.winBox('clientHeight') + utils.winBox('scrollTop');
    if (A <= B) {
        //=>加载真实的图片
        // var trueImg = curImg.getAttribute('data-img');
        // curImg.src = trueImg;
        // utils.css(curImg, 'display', 'block');
        //=>以上实现真实图片加载的方式有问题：如果真实图片是不存在的地址,我们用上述方式加载,原有图片展示了,但是展示的都是叉叉或者ALT值

        //=>解决办法：真实图片加载的时候,先不要操作原始IMG标签（操作原始IMG标签肯定会导致页面中的内容跟着变化或者渲染）,我们操作临时创建的标签,当能正常的加载成功我们在操作原始的标签
        var tempImg = new Image();//<=>document.createElement('img')
        tempImg.onload = function () {
            //=>证明图片可以正常加载（onerror是图片无法正常加载）
            curImg.src = this.src;//=>this:tempImg
            curImg.style.display = 'block';
            tempImg = null;
        };
        tempImg.src = curImg.getAttribute('data-img');//=>部分IE浏览器需要把赋值SRC的操作放在事件绑定的下面才可以
    }
}
computed();
window.onscroll = computed;