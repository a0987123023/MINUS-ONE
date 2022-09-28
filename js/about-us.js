var controller = new ScrollMagic.Controller();


var stickmove = new TimelineMax();
stickmove.fromTo('.m_1 h2', 1, {
    y: 0,
    opacity: 0,
}, {
    y: 200,
    opacity: 1,
}).fromTo('.m_2 h2', 1, {
    y: 0,
    opacity: 0
}, {
    y: 200,
    opacity: 1
}).fromTo('.m_3 h2', 1, {
    y: 0,
    opacity: 0
}, {
    y: 200,
    opacity: 1
});
stickmove.fromTo('.m_1 p', 1, {
    y: 250,
    x: -100,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
}).fromTo('.m_2 p', 1, {
    y: 250,
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
}).fromTo('.m_3 p', 1, {
    y: 250,
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1
});


var scene01 = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    offset: 0,
    transition: 1,
    triggerHook: 0,
    duration: '3000'
}).setPin('.section').setTween(stickmove).setClassToggle('.container .section', 'chang').addTo(controller);


$(window).scroll(function() {
    var gogo = $(this).scrollTop();
    if (gogo > 4000 && gogo < 5000) {
        $('#circle1').addClass('circlegogo');
        $('#circle2').addClass('circlegogo');
        $('#circle3').addClass('circlegogo');
    } else {
        $('#circle1').removeClass('circlegogo');
        $('#circle2').removeClass('circlegogo');
        $('#circle3').removeClass('circlegogo');
    };


});

var message = 'hello world!';

function sayhello() {
    console.log(message);
    var message = 'hello';
    console.log(message);
}
sayhello();