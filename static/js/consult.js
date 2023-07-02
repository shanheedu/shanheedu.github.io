$(function(){
    $(document.body).append(consult_template);
    //回到顶部
    $('.consult_main_goTop').on('click', function () {
        $(document).scrollTop(0)
    })

});
