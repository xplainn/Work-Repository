// JavaScript Document


function startMove(Opa)
	{
		var timer=null;//设置定时器
	var alpha=30;
		var oDiv=document.getElementById('div1');
		clearInterval(timer);
		timer=setInterval(function()
		{
			var speed=0;
			if(alpha>Opa)
			{
				speed=-5;
			}
			else
			{
				speed=5;
			}
			if(alpha==Opa)
			{
				clearInterval(timer);
			}
			else
			{
				alpha+=speed;
				oDiv.style.filter='alpha(opacity:'+alpha+')';
				oDiv.style.opacity=alpha/100;
			}
		},30)//每隔30毫秒执行一次
	}
	
	
	
function Change()
{
	var timer="";
	var Change=document.getElementById("public-middle1");
}