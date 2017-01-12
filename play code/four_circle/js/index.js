/*
*
*   首页的顶部搜索栏相对定位
*	关注点击
*	底部按钮无刷新页面（学习中）
*
*/

// 首页的顶部搜索栏相对定位
window.onload = function(){
	var followBtn = new followBox('followBox','contentBox');
	var indexTopPage = new indexTop('indexTopSide');
	indexTopPage.dianji(); // 点击搜索栏改变定位
	followBtn.dianji(); // 点击改变关注按钮
}
function indexTop(id) {
	// 获取搜索栏的元素
	this.indexTopSide = document.getElementById(id);
	this.searchBox = this.indexTopSide.getElementsByTagName('input')[0];
}
indexTop.prototype.dianji = function(){
	var that = this;
	// 事件监听判断是否有焦点
	this.searchBox.addEventListener('focus',function(){
		that.indexTopSide.style.position = 'absolute';
	});
	this.searchBox.addEventListener('blur',function(){
		that.indexTopSide.style.position = 'fixed';
	});
}
// 关注点击,传入2个参数
function followBox(id1,id2) {
	// 获取关注和显示内容
	this.fB = document.getElementById(id1);
	this.cB = document.getElementById(id2);
	this.fBBtn = this.fB.getElementsByClassName('post_who_follow_Btn')[0];
	this.content = this.cB.getElementsByTagName('p')[0];
}
followBox.prototype.dianji = function(){
	// 获取 followBox函数的 this
	var that = this;
	// 控制节流 
	var flag = true;
	// 这里 this 指的是点击的对象
	this.fB.onclick = function() {
		if(flag){
				that.cB.style.display = 'block';
				// 判断关注按钮
				if(that.fBBtn.value == '关注'){
					that.fBBtn.style.backgroundColor = '#ccc';
					that.fBBtn.value = '已关注';
					that.content.innerHTML = '关注成功！';
				}else {
					that.fBBtn.style.backgroundColor = '#66a4f9';
					that.fBBtn.value = '关注';
					that.content.innerHTML = '已取消关注';
				}
				flag = false;
				// 定时器 + jQuery淡入效果
				clearTimeout(timer);
				var timer = setTimeout(function(){
					$(that.cB).fadeOut('slow');
					flag = true;
				},2500);
			}
		}
		
}

