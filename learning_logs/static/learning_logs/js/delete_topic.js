$(".delete_btn").click(function () {
    var $this = $(this);
    $.ajax({
        url: $this.attr('href'),
        type: "GET",
        dataType: "json",
        success: function (response) {
            if(response.message === 'success'){
                $this.parent().remove()
            }
            else{
                alert(response.message);
            }
            },
        error: function(response){
            console.log("Error")
        }
    });
    return false;
});