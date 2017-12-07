$('#searchMap').click(function() {
    $(this).parent().removeClass().addClass('container-pane');
    $('.nb-map-search-result').show();

});

$('.addWidth').click(function() {
    changeWidth(true, this);

});

$('.subWidth').click(function() {
    changeWidth(false, this);

});

$('.addHeight').click(function() {
    changeHeight(true, this);

});

$('.subHeight').click(function() {
    changeHeight(false, this);

});

function changeWidth(isAdd, target) {
    var w = $(target).parent().width();
    if (isAdd) {
        w += 100;
    } else {
        w -= 100;
    }
    $(target).parent().width(w);
}

function changeHeight(isAdd, target) {
    var h = $(target).parent().height();
    if (isAdd) {
        h += 20;
    } else {
        h -= 20;
    }
    $(target).parent().height(h);
}

$('#close').click(function() {
    $(this).parent().removeClass().addClass('container-pane pane-float-left nb-map-search');
    $('.nb-map-search-result').hide();

});

$('.floatPane').click(function() {
    $(this).parent().addClass('pane-float-left');

});

$('.floatPaneRight').click(function() {
    $(this).parent().addClass('pane-float-right');

});

$('.pinPane').click(function() {
    $(this).parent().removeClass('pane-float-left pane-float-right');

});


$('.hide').click(function() {
    $(this).parent().hide();

});


var dragFlag = false,
    dragStartX;
$('body').on('mousedown', function(event) {

    if ($('.dragBar')[0] == event.target) {
        dragFlag = true;
        dragStartX = event.pageX;
    }

});

$('body').on('mouseup', function(event) {

    dragFlag = false;

});

$('body').on('mousemove', function(event) {

    if (dragFlag) {
        var offsetX = event.pageX - dragStartX;
        dragStartX = event.pageX;
        var pane = $('.dragBar').parent();
        var w = pane.width() + offsetX;
        pane.width(w);

    }


});
