var modal_template = '<div class="jx-modal">'+
        '<div class="modal-content" style="#style">' +
            '#content'+
            '<div class="modal-close"></div>' +
        '</div>' +
    '</div>';

var success_template = "<div class=\"message_modal\">\n" +
    "        <span class=\"message_modal_success-bgi\"></span><span class=\"message_modal_success_txt\">#content</span>\n" +
    "    </div>";

var error_template = "<div class=\"message_modal\">\n" +
    "        <span class=\"message_modal_error\">!</span><span class=\"message_modal_txt\">#content</span>\n" +
    "    </div>";

window.jx = window.jx || {};

window.jx.modal = {
    show:function(content,width,height){
        var style = "width:"+width+"px;height:"+height+"px;margin-left:"+(0-width/2)+"px;margin-top:"+(0-height/2)+"px";
        var $dialog = $(modal_template.replace(/#content/,content).replace(/#style/,style));
        $dialog.find(".modal-close").click(function(){
            $(".jx-modal").remove();
        });
        $dialog.appendTo($('body'));
    },

    hide:function(){
        $(".jx-modal").remove();
    },

    success:function(message){
        var $msg = $(success_template.replace(/#content/,message));
        $msg.appendTo($('body'));
        setTimeout(function () {
            $msg.css({'top': '70px','opacity': '1'});

            setTimeout(function () {
                $msg.css({'top': '0','opacity': '0'});
                setTimeout(function () {
                    $msg.remove();
                }, 1000);
            }, 2000);
        },100);
    },
    error:function(message){
        var $msg = $(error_template.replace(/#content/,message));
        $msg.appendTo($('body'));
        setTimeout(function () {
            $msg.css({'top': '70px','opacity': '1'});

            setTimeout(function () {
                $msg.css({'top': '0','opacity': '0'});
                setTimeout(function () {
                    $msg.remove();
                }, 1000);
            }, 2000);
        },100);
    }
};
