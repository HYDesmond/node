var newsBox = document.getElementById('newsBox');
var newsList = newsBox.getElementsByTagName('li');

for (var i = 0; i < newsList.length; i++) {
    //i % 2 === 1 ? newsList[i].style.backgroundColor = '#EEE' : null;

    switch (i % 2) {
        case 1:
            newsList[i].style.backgroundColor = '#EEE';
            break;
        /*case 0:
         ...*/
    }
}

//=>思考题：实现每三个为一组的颜色切换(建议使用if判断和switch case都去试试)