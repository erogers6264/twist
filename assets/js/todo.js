// Check Off Specific Todos By Clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut();
    event.stopPropagation();
});
