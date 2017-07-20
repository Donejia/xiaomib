var indexI
$(".div3 div .product1 li").each(function(i){
	
	$(this).bind("mouseover",function(){		
		indexI=$(this).index()						
		$(".div3 .product1 li div").eq(indexI).css({"display":"block"})		
	})
	$(this).bind("mouseout",function(){		
		indexI=$(this).index()						
		$(".div3 .product1 li div").eq(indexI).css({"display":"none"})		
	})
	
})

/*$(".div6 img").hover(function(){
	$(this).stop().animate({"margin-bottom":400},1000)
},function(){
	$(this).animate({"width":236},1000)
})*/


