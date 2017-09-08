// Check Off Specific Todos By Clicking
$("li").click(function () {
    $(this).css({
        color: "#E0E0E0",
        textDecoration: "line-through"
    })
});
