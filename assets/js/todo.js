// alert("connected");

//Check off specific todos by clicking 
// $("li").click(function(){            //click function works on the current elements only								     
$("ul").on("click","li" ,function(){    // while on function works on future elements also 
	// alert("clicked");
	// $(this).css("color" ,"grey");
	$(this).toggleClass("completed");
});

//click on X to delete todo
// $("span").click(function(event){
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// console.log("enter");
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to  ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});