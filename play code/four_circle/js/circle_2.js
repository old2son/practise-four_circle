/*
*
*   点击箭头，变换样式，展开菜单，折叠菜单动画
*
*/ 

function circle2(clName1,clName2) {
	this.dArrow = document.querySelectorAll(clName1);
	this.contentBox = document.querySelectorAll(clName2);
	thisX = clName2;
}
circle2.prototype = {
	constructor: circle2,
	// 点击事件函数
	arrowClick : function() {
		// 保存this
		var that = this;
		// 遍历按钮
		var index;
		for(var i=0;i<this.dArrow.length;i++){
			// 自定义属性保存 值
				this.dArrow[i].index = i
				this.dArrow[i].onclick = function(){
				// 自定义属性 this.index 代表当前的值
				if(that.contentBox[this.index].style.display!=='block'){
					this.style.transform = 'rotate(135deg)';
					// 不能用 :eq()，要在 $() 直接用索引值
					$(that.contentBox[this.index]).slideDown('normal');
				}else {
					this.style.transform = 'rotate(-45deg)';
					$(that.contentBox[this.index]).slideUp('normal');
				}
			}
		}
	}
}
