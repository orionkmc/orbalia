$(function(){"use strict";$(".knob").knob({format:function(n){return n+"%"}}),$(".knob").each(function(){var n=$(this),t=n.attr("rel");n.knob(),$({value:0}).animate({value:t},{duration:2e3,easing:"swing",step:function(){n.val(Math.ceil(this.value)).trigger("change")}})})});