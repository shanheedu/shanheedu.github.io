// 选项卡和样式切换
$('.tab_list li').each(function (index) {
    $(this).on('click', function () {

        console.log(index);

        $(this).addClass('tab_active').siblings().removeClass('tab_active')

        $('.tab_main').each(function (i) {
            $(this).css("display", 'none')
        })
        $('.tab_main')[index].style.display = 'block'
    })
})




function htmlScroll() {
    var bottemWidth = $('.header').css("border-bottom-width");
    bottemWidth = bottemWidth?bottemWidth.replace(/px/,''):bottemWidth;
    if(bottemWidth > 0){
        if ($(document).scrollTop() > 0) {
            $('.header').css('background-color', '#3e3e4a')
        } else {
            $('.header').css('background-color', 'rgba(0, 0, 0, 0.1)')
        }
    }
}

//顶部导航栏滚动后的样式
$(window).scroll(function () {
    // console.log($(document).scrollTop());
    htmlScroll()
});

htmlScroll();

$(".icon-menu").click(function (e) {
    $(".header_nav").css('display',$(".header_nav").css("display")=='none'?"block":"none");
    e.stopPropagation();
});
$(".header_nav").click(function(e){
    e.stopPropagation();
});
$(document.body).click(function () {
    $(".header_nav").css('display', '');
});


//新闻资讯tap
$('.i_middle7_tap_list li').each(function (i) {
    $(this).on('click', function () {
        $(this).addClass('i_m7_on').siblings().removeClass('i_m7_on')

        $('.i_middle7_content_article').each(function (index) {
            $(this).css('display', 'none')
        })
        $('.i_middle7_content_article')[i].style.display = 'block'
    })
});

