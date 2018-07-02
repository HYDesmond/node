var newsBox = document.getElementById('newsBox');
var newsList = newsBox.getElementsByTagName('li');

for (var i = 0; i < newsList.length; i++) {
    /*
     * i=0 第一次循环  第一个LI  newsList[0]
     * i=1 第二次循环  第二个LI  newsList[1]
     * ...
     * newsList[i] 当前这一轮循环，我们获取到想要操作的那一个LI
     */
    /*
     * 第一个LI(奇数行)  索引0(偶数)
     * 第二个LI(偶数行)  索引1(奇数)
     * 如果当前LI的索引是偶数，代表奇数行；如果索引是奇数，代表偶数行
     */
    if (i % 2 === 1) {
        newsList[i].style.backgroundColor = '#EEE';
    }
}