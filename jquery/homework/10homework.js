if(!window.jQuery){
    throw new Error ("配合jquery使用");
}
jQuery.fn.clickXY = function () {
    this.on("click",function(e){
        e.stopImmediatePropagation();
        // var oDisplay = $(this).next()[0].style.display;
        var oDisplay = $(this).next().css('display');
        if(oDisplay === "none"){
            $(this).next().show();
        }
       
        // else{          
        //     $(this).next().hide();
        // }   
    })
    $(document).on("click",function (e) {
        console.log(e.target.parentNode)
        if(e.target.parentNode !== $("ul")[0]){
            $(".dropdown ul").hide();
        }
    })
}
jQuery.fn.shouFQ = function (choice) {
    $(this).on("click",function () {
        $(this).next().slideToggle().siblings(choice).slideUp();
    })
    
}