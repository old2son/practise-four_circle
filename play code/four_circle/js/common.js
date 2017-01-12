// 底部按钮无刷新页面（学习中），底部按钮变色
var bottomBox = new bottomBtnBox('bottomBtnBox');
function bottomBtnBox(id){
	// 获取元素
	this.bBtnBox  = document.getElementById(id);
	this.bBtn = this.bBtnBox.getElementsByClassName('footer_box');
}
bottomBtnBox.prototype.dianji = function(){
	// 底部按钮变色
	// 循环绑定点击事件
	for(var i=0;i<this.bBtn.length;i++){
		var that = this;
		// 自定义属性，存储索引值
		this.bBtn[i].index = i;
		this.bBtn[i].onclick = function(){
			// 排除之前已经有类名的元素
			for(var j=0;j<that.bBtn.length;j++){
				that.bBtn[j].className = 'footer_box';
			}
			// this.index的 this 指向点击对象 this.bBtn[i]
			that.bBtn[this.index].className += ' footer_box_on';
		}
	}
}
// ajax刷新页面


