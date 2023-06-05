// 创建一个新的段落并添加至html body底部
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = '你点击了这个按钮！';
    document.body.appendChild(para);
}
/*
    1.取得页面上所有的按钮，并将他们置于一个数组中
    2.通过循环为每个按钮添加一个点击事件的监听器
    3.当按钮被点击，调用createParagraph（）函数
 */
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
}