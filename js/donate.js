$('.checkboxGroup li input').click(function(){
if($(this).prop('checked')){
$('.checkboxGroup li input:checkbox').prop('checked',false);
$(this).prop('checked',true);
}
});

$('.step .step-title input').click(function(){
if($(this).prop('checked')){
$('.step1 .step-title input:checkbox').prop('checked',false);
$(this).prop('checked',true);
}
});

$('.step .step-title input').click(function(){
if($(this).prop('checked')){
$('.step .step-title input:checkbox').prop('checked',false);
$(this).prop('checked',true);
}
});

$('.step .choose input').click(function(){
if($(this).prop('checked')){
$('.step .choose input:checkbox').prop('checked',false);
$(this).prop('checked',true);
}
});



$('#have-toy').on('click', function(){
    $(this).parent().next('.img-content').children('img').show()
    $(this).parent().next('.img-content').children('img').addClass('down')
});
$('#no-toy').on('click', function(){
    $(this).parent().next('.img-content').children('img').removeClass('down')
    $(this).parent().next('.img-content').children('img').hide()
});




$('#step2').hide();
$('#step3').hide();
$('#step4').hide();

let index=1;
    if(index == 1){
        $('#back').show();
        $('#back').hide();
        $('#finish').hide();
    }
$('#next').on('click',function(){
    index = index+1;
    if(index == 2){
        $('#step1').hide();
        $('#step2').show();
        $('#step3').hide();
        $('#step4').hide();
        $('#back').show();
    };
    if(index == 3){
        $('#back').show();
        $('#step1').hide();
        $('#step2').hide();
        $('#step3').show();
        $('#step4').hide();
    };
    if(index == 4){
        $('#back').hide();
        $('#next').hide();
        $('#step1').hide();
        $('#step2').hide();
        $('#step3').hide();
        $('#step4').show();
        $('#finish').show();
    };
    return false;
});

    if(index == 2){
        $('#back').show();
        $('#finish').hide();
        $('#next').show();
    }
$('#back').on('click',function(){
    index = index-1;
if(index == 1){
    $('#step1').show();
    $('#step2').hide();
    $('#step3').hide();
    $('#step4').hide();
    $('#back').hide();
};
if(index == 2){
    $('#step1').hide();
    $('#step2').show();
    $('#step3').hide();
    $('#step4').hide();
};
if(index == 3){
    $('#step1').hide();
    $('#step2').hide();
    $('#step3').show();
    $('#step4').hide();
    $('#finish').hide();
};
return false;
});








