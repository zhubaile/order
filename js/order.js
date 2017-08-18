/**
 * Created by lenovo on 2017/8/17.
 */
$(function(){
    var $main=$("#main");
    $(".menu-item").on("click","a",function(){
        var $this=$(this),attrId=$this.attr("data-id");
        if(attrId!="0"){
            $main.addClass("sub-menu-show")
        }else{
            $main.removeClass("sub-menu-show")
        }
    })
});