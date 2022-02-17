window.onload = function(){
    var span = document.getElementsByClassName('span');
    //下拉框change事件
    $("#font_size").on("change",function(event){
       font_size = event.target.value
    });
    // 改变字体大小
    var btn01 = document.getElementById('btn01');
    var options=$("#font_size option:selected")
    btn01.onclick = function(event){
        event.preventDefault()
        if(font_size =='big'){
            $('.p1').children('span').css('font-size','10vw').css('margin-top','-10vw')
            $('.p2').children('span').css('font-size','10vw').css('margin-top','8vw')
        }
        if(font_size =='middle'){
            $('.p1').children('span').css('font-size','4vw').css('margin-top','0vw')
            $('.p2').children('span').css('font-size','4vw').css('margin-top','0vw')
        }
        if(font_size =='small'){
            $('.p1').children('span').css('font-size','2vw').css('margin-top','0vw')
            $('.p2').children('span').css('font-size','2vw').css('margin-top','-1vw')
        }
    }

    // 输入框输入
    var p1 = document.getElementsByClassName("p1");
    var p2 = document.getElementsByClassName("p2"); 
    var span = document.getElementsByClassName('span');
    document.onkeydown = function(event){
        event = event||window.event
        if(event.keyCode == 13 ){
            var array = []
            length = event.target.value.length
            for(var i=0;i<event.target.value.length;i++){
                array[i] = event.target.value[i]
            }
            $('.p1').empty();
            $('.p2').empty();
            if(length<10){
                for(var i=0;i<length;i++){
                    $('.p1').append('<span style="--i:'+i+'">'+ event.target.value[i]+'</span>')
                }
            }
            else{
                for(var i=0;i<parseInt(length/2);i++){
                    $('.p1').append('<span style="--i:'+i+'">'+ event.target.value[i]+'</span>')
            };
                
                for(var i=parseInt(length/2);i<length;i++){
                    $('.p2').append('<span style="--i:'+i+'">'+ event.target.value[i]+'</span>')
                }
            }
        }
    }
}