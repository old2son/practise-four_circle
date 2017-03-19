/*
*
*  点击和选择的按钮
*
*
*/ 
window.onload = function(){
	var nfs = new nf_select('main');
	nfs.init();
}
function nf_select(maindiv){
	this.main_d = document.getElementsByClassName(maindiv)[0];
	this.nf_btn = this.main_d.getElementsByClassName('nf_btn');
	this.pwf_Btn = this.main_d.getElementsByClassName('post_who_follow_Btn');
	this.zan_Btn = this.main_d.getElementsByClassName('zan');
}
nf_select.prototype = {
	constructor: nf_select,
	init: function(){
		var that = this;
		// 点击和选择按钮
		if(this.nf_btn.length!=0){
			for(let i=0;i<this.nf_btn.length;i++){
				this.nf_btn[i].onclick = function(){
					that.nfBtn_change(this);
				}
			}
		}
		// 点击和选择按钮
		if(this.pwf_Btn.length!=0){
			for(let i=0;i<this.pwf_Btn.length;i++){
				this.pwf_Btn[i].onclick = function(e){
					// 阻止冒泡，防 a 标签跳转
					//如果提供了事件对象，则这是一个非IE浏览器
					if ( e && e.stopPropagation ){
						//因此它支持W3C的stopPropagation()方法
					    e.stopPropagation();
					}else {
					    //否则，我们需要使用IE的方式来取消事件冒泡
					    window.event.cancelBubble = true;
					}
					//阻止浏览器的默认行为
   					if ( e && e.preventDefault ){
   						//阻止默认浏览器动作(W3C)
   					    e.preventDefault();
   					}else{
   						//IE中阻止函数器默认动作的方式
   						window.event.returnValue = false;
   						// return false;
   					}
					that.pwf_Btn_change(this);
				}
			}
		}
		// 点击和选择按钮
		if(this.zan_Btn.length!=0){
			for(let i=0;i<this.zan_Btn.length;i++){
				this.zan_Btn[i].onclick = function(){
					this.classList.toggle('zanOn');
				}
			}
		}
		// 折叠头部菜单
		$('.title,.Q_ReadAll > .Q_All').click(function(){
			$('.Q_arrow').toggleClass('Q_arrowOn');
			if($('.cp_eject,.Q_ReadAll + div').css('display')==='none'){
				$('.cp_eject,.Q_ReadAll + div').show()
				$('.cp_eject > .PostSlide,.Q_slideList').slideDown();
			}else {
				$('.cp_eject > .PostSlide,.Q_slideList').slideUp();
				$('.cp_eject,.Q_ReadAll + div').hide(600);
			}
		});
		//  推荐人才 || 应聘职位按钮
		$('.rtd_btnBox :button,.join').click(function(){
			$('.eject ').css('display','block');
		});
		$('.EbtnBox :submit').click(function(){
			$('.eject ').css('display','none');
		});
		// $('.join').click(function(){
		// 	$('.eject ').css('display','block');
		// });
	},
	nfBtn_change: function(nf_this){
		nf_this.value = '已是朋友';
		nf_this.classList.add('bg-color-888');
		nf_this.setAttribute('disabled','block');
	},
	pwf_Btn_change: function(pwf_this) {
		pwf_this.classList.toggle('bg-color-aaa');
		let text = pwf_this.value;
		pwf_this.value = text==='关注'?'已关注':'关注';
	}
}