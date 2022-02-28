window.onload = function(){
    var span = document.getElementsByClassName('span');
    // 01 改变字体大小
    // 下拉框change事件
    $("#font_size").on("change",function(event){
    font_size = event.target.value
    });
    $("#font_weight").on("change",function(event){
    font_weight = event.target.value
    });
    var btn01 = document.getElementById('btn01');
    // var options=$("#font_size option:selected")
    btn01.onclick = function(event){
        // 阻止点击就发生页面刷新的默认行为
        event.preventDefault();
        if(font_size =='big'){
            $('.p1').children('span').css('font-size','10vw').css('margin-top','-10vw')
            $('.p2').children('span').css('font-size','10vw').css('margin-top','8vw')
        };
        if(font_size =='middle'){
            $('.p1').children('span').css('font-size','4vw').css('margin-top','0vw')
            $('.p2').children('span').css('font-size','4vw').css('margin-top','0vw')
        };
        if(font_size =='small'){
            $('.p1').children('span').css('font-size','2vw').css('margin-top','0vw')
            $('.p2').children('span').css('font-size','2vw').css('margin-top','-1vw')
        }
    };

    // 02 改变字体粗细
    var btn02 = document.getElementById('btn02');
    btn02.onclick = function(event){
        console.log($('.p1').children('span').css('font-family'))
        event.preventDefault();
        if(font_weight =='thick'){
            $('.p1').children('span').css('font-weight','bold')
            $('.p2').children('span').css('font-weight','bold')
        };
        if(font_weight =='normal'){
            $('.p1').children('span').css('font-weight','normal')
            $('.p2').children('span').css('font-weight','normal')
        };
    };



    // 03 输入框输入
    var btn03 = document.getElementById('btn03');
    var p1 = document.getElementsByClassName("p1");
    var p2 = document.getElementsByClassName("p2"); 
    var span = document.getElementsByClassName('span');
    btn03.onclick = function(event){
        event = event||window.event
        var input01 = document.getElementById('input01').value;
        length = input01.length
            $('.p1').empty();
            $('.p2').empty();
            if(length<10){
                for(var i=0;i<length;i++){
                    $('.p1').append('<span style="--i:'+i+'">'+ input01[i]+'</span>')
                }
            }
            else{
                for(var i=0;i<parseInt(length/2);i++){
                    $('.p1').append('<span style="--i:'+i+'">'+ input01[i]+'</span>')
            };
                
                for(var i=parseInt(length/2);i<length;i++){
                    $('.p2').append('<span style="--i:'+i+'">'+ input01[i]+'</span>')
                }
            }
            // 字体也改变
            var font = document.getElementById('input02').value;
            $('.p1').children('span').css('font-family',font)
            $('.p2').children('span').css('font-family',font)
        }

    // 04改变字体
    var btn04 = document.getElementById('btn04');
    btn04.onclick = function(){
        var font = document.getElementById('input02').value;
        $('.p1').children('span').css('font-family',font)
        $('.p2').children('span').css('font-family',font)
    }
}