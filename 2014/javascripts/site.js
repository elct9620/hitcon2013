(function($){
var ns = "Site";

window[ns] = function() {
};

window[ns].prototype = {
  setup: function() {
    xx('site.setup();');
    this.init();
    this.prepare();
    this.animate();
  },

  init: function() {
    this.window     = $( window );
    this.document   = $( document );
    this.body       = $('body');
    this.frameCount = 0;

    this.subtitleStyle = "#d2cd7c";
    $.ajaxSetup({
      cache: true
    });

    xx('site.init();')
  },

  prepare: function() {
    this.heros       = [];
    this.animators   = [];
    this.callbacks   = {};
    this.globalIndex = {};

    var obj = this.body.find('.obj'),
        wrapper,
        type,
        className,
        index;

    obj.each(function( i, dom ){
      wrapper = $(dom);

      if( type == wrapper.attr('data-type') ) index ++;
      else index = 0;
      type = wrapper.attr('data-type');

      if( typeof this.globalIndex[type] != 'number' ) this.globalIndex[type] = 0;
      else this.globalIndex[type] ++;

      this.heros.push( new Hero({ type: type, wrapper: wrapper, index: index, globalIndex: this.globalIndex[type] }) );
    }.bind(this));
    xx('site.prepare();')
  },

  animate: function() {
    this.heros.do('clear');
    this.animators.do('animate');
    this.frameCount++;
    requestAnimFrame( this.animate.bind(this) );
  },
};

// FAQ Toggle
var faqElements = {
    "#faq-normal": $("#faq-normal"),
    "#faq-session": $("#faq-session"),
    "#faq-training": $("#faq-training"),
    "#faq-sponsor": $("#faq-sponsor"),
    "#faq-registration": $("#faq-registration"),
    "#faq-participant": $("#faq-participant"),
    "#faq-location": $("#faq-location"),
    "#faq-site": $("#faq-site"),
    "#faq-ctf": $("#faq-ctf"),
    "#faq-disaster": $("#faq-disaster"),
    "#faq-other": $("#faq-other")
}

$body = $("html, body")

$(".faq-toggle").click(function(e) {
    var toggleTarget = $(this).data("toggle");
    /*if(faqElements[toggleTarget]) {
        for(var id in faqElements) {
            faqElements[id].addClass("toggle-hide");
        }
    */
    faqElements[toggleTarget].toggleClass("toggle-hide");
    //}
    e.preventDefault();
});

})(jQuery);
