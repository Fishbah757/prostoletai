function loadtracking(){window._gaq.push(["_setAccount",option_analytics_tracking_id]),window._gaq.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}()}if(jQuery(window).load(function(){"use strict";$("#page-loader").addClass("hide-this"),$("#cycle").cycle("prev"),setTimeout(function(){$(".hero .background-content.page-enter-animated").addClass("show"),setTimeout(function(){sliderRevolution()},200),setTimeout(function(){$(".hero .front-content.page-enter-animated").addClass("show")},540)},1e3)}),jQuery(document).ready(function(){"use strict";function a(){setTimeout(function(){var a=$(window).height(),b=$(".popup .container-intro").outerHeight(),c=(a-b)/2;$(".popup").addClass("active"),a>=b&&$(".popup.active").css("margin-top",c).css("margin-bottom",c/61.8*38.2)},300)}$(".navigation-main .navigation-items").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:750,scrollThreshold:.5,filter:":not(.external)",easing:"swing"}),$(document).scroll(function(){$(this).scrollTop()>1?$("body").addClass("top-leave"):$("body").removeClass("top-leave")}),$(".scroll-top").on("click",function(){var a=!1,b=$(this);b.addClass("active"),$("html, body").animate({scrollTop:"0"},{complete:function(){a||(a=!0,b.removeClass("active"))}})}),"on"==option_animate_content_on_scroll&&(window.sr=ScrollReveal(),sr.reveal(".scroll-animated-from-bottom",{duration:500,delay:0,origin:"bottom",rotate:{x:0,y:0,z:0},opacity:0,distance:"80px",viewFactor:.3,scale:1})),"sticky"==option_navigation_mode&&($(".navigation-main").addClass("sticky-navigation"),$(".navigation-main.sticky-navigation").sticky({topSpacing:0})),"popup"==option_navigation_mode&&($(".navigation-main").addClass("popup-navigation"),$(document).scroll(function(){$(this).scrollTop()>$(window).height()?$(".navigation-main.popup-navigation").addClass("show"):$(".navigation-main.popup-navigation").removeClass("show")})),"off"==option_parallax_scrolling&&dzsprx_init(".dzsparallaxer",{mode_scroll:"spt"}),$(".default-slider-1").cubeportfolio({layoutMode:"slider",drag:!0,auto:!1,autoPauseOnHover:!0,showNavigation:!1,showPagination:!0,rewindNav:!1,scrollByPage:!1,singlePageDelegate:null,gridAdjustment:"responsive",mediaQueries:[{width:1500,cols:1}],gapHorizontal:0,gapVertical:0,caption:"opacity",displayType:"fadeIn",displayTypeSpeed:500}),$(".default-carousel-1").cubeportfolio({layoutMode:"slider",drag:!0,auto:!0,showNavigation:!1,showPagination:!0,rewindNav:!1,scrollByPage:!1,gridAdjustment:"responsive",mediaQueries:[{width:900,cols:3},{width:600,cols:2}],gapHorizontal:0,gapVertical:40,caption:"opacity",displayType:"fadeIn",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!1,lightboxTitleSrc:"data-title",singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!1,singlePageAnimation:"fade",singlePageStickyNavigation:!0,singlePageCallback:function(a,b){var c=this;$.ajax({url:a,type:"GET",dataType:"html",timeout:1e4}).done(function(a){c.updateSinglePage(a)}).fail(function(){c.updateSinglePage("AJAX Error! Please refresh the page!")})}}),$(".phantom-wrapper-popups").cubeportfolio({lightboxDelegate:".cbp-lightbox",lightboxGallery:!1,lightboxTitleSrc:"data-title",singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!1,singlePageAnimation:"fade",singlePageStickyNavigation:!1,singlePageCallback:function(a,b){var c=this;$.ajax({url:a,type:"GET",dataType:"html",timeout:1e4}).done(function(a){c.updateSinglePage(a)}).fail(function(){c.updateSinglePage("AJAX Error! Please refresh the page!")})}}),$(".cbp").on("updateSinglePageComplete.cbp",function(){var b=$(".popup").find("img, iframe"),c=b.length,d=0;b.on("load",function(){++d===c&&($(window).on("resize",function(){a()}),a(),setTimeout(function(){$(".popup-close-button").addClass("active")},300))}),$(".popup").find(".intro-video").length&&($(window).on("resize",function(){a()}),a(),setTimeout(function(){$(".popup-close-button").addClass("active")},300))}),$(".cbp").on("initComplete.cbp",function(){$(document).off("keydown.cbp")}),$("body").on("click",".popup .button-description",function(){$(".popup .button-description").hasClass("active")?($(".popup .container-info").removeClass("active"),$(".popup .button-description").removeClass("active"),$(".popup .allow-push-by-menu").removeClass("active")):($(".popup .button-description").addClass("active"),$(".popup .container-info").addClass("active"),$(".popup .allow-push-by-menu").addClass("active"))}),$("body").on("mousedown",".container-intro",function(){$(".popup .button-description").hasClass("active")&&($(".popup .container-info").removeClass("active"),$(".popup .button-description").removeClass("active"),$(".popup .allow-push-by-menu").removeClass("active"))}),$(document).on("click","a.cbp-lightbox",function(){setTimeout(function(){$(".cbp-popup-lightbox .cbp-popup-content").append('<div id="popup-close-button-1" class="popup-close-button" data-action="close"><span class="ti-back-left" data-action="close"></span></div>'),setTimeout(function(){$(".cbp-popup-lightbox-img").attr("data-action",""),$(".cbp-popup-lightbox").attr("data-action",""),$(".popup-close-button").addClass("active"),$(".cbp-popup-lightbox video").length&&($(".cbp-popup-lightbox video").attr("data-status","false"),$(".cbp-popup-lightbox video").attr("controls",!0),$(".cbp-popup-lightbox video")[0].play(),$(".cbp-popup-lightbox video").on("click",function(){"false"==$(".cbp-popup-lightbox video").attr("data-status")?($(".cbp-popup-lightbox video")[0].pause(),$(".cbp-popup-lightbox video").attr("data-status","true")):($(".cbp-popup-lightbox video")[0].play(),$(".cbp-popup-lightbox video").attr("data-status","false"))}))},500)},100),$(".cbp-popup-lightbox video").removeAttr("controls")})}),"on"==option_analytics_tracking){var _gaq=_gaq||[];loadtracking()}!function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);