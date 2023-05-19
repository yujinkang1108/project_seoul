//header
$(function(){
/**
 * @언어선택
 * 
 * @url 셀렉트의 벨류값
 */
$('#langBtn').click(function(){
    const url = $('#langList').val();
    // console.log(url);
    window.open(url);
})




// 메인

//swiper main-slide

const mainSwiper = new Swiper('.main-slide',{
    loop:true,
    
    pagination:{
     el:".pagination",
     type:"fraction",
    },
 
    navigation:{
     nextEl:".next",
     prevEl:".prev",
    },
 
    autoplay:{
     autopplay:true,
     delay:2500,
     disableOnInteraction: false
    }
 });

 // mainslide title-area 클릭시 스타일변경
 $('.inner3 .title-area a').on('click',function(e){
   e.preventDefault();
   if($(this).hasClass('active')){
    $('.inner3 .title-area a').removeClass('active')

   }else{
    $('.inner3 .title-area a').removeClass('active')
    $(this).addClass('active')
   }
 })


// mainslide title-area 클릭시 컨트롤박스 숫자데이터 변경
 $('.inner3 .title-area a').on('click',function(e){
    e.preventDefault();
    idx = $(this).data('index');

    $('.inner3 .title-area a').removeClass('active');
    $(this).addClass('active');

    mainSwiper.slideTo(idx);
 })

 // mainslide 컨트롤박스 숫자데이터 5일 때 title-area 변경
 mainSwiper.on('slideChange',function(){
    if(this.realIndex >= 4){
        $('.inner3 .citizen').addClass('active').siblings().removeClass('active')
    }else{
        $('.inner3 .news').addClass('active').siblings().removeClass('active')
    }
 })



$('.inner3 .autoplay').click(function(e){
    e.preventDefault();
    })
    
    
    //main-slide btn 자동재생
    
    $('.inner3 .autoplay').click(function(e){
    e.preventDefault();
    
    if($(this).hasClass('on')){
       $(this).removeClass('on').attr('aria-label','자동재생 정지')
       mainSwiper.autoplay.start()
    }else{
        $(this).addClass('on').attr('aria-label','자동재생 적용')
        mainSwiper.autoplay.stop()
    } 
    })




// sc-relate sub 
// slideup 요소를 위로 밀어 내용을 숨김
// slidedown 요소를 아래로 밀어 내용을 표시

$('.relate-item').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')){ //sub이 열렸을 때
        $('.relate-item .sub').stop().slideUp(); //1 /닫아요
        $('.relate-item').removeClass('on') //1 /전체 클래스 빼주기

    } else{ //sub이 닫혔을 때,버튼 누르기 전 
        $('.relate-item .sub').stop().slideUp(); //1
        $(this).find('.sub').stop().slideDown()//2
        
        $('.relate-item').removeClass('on') //1 /원래버튼 눌렀다가 다른버튼 눌렀을 때 원래버튼이 닫히게끔
        $(this).addClass('on')//2
    }
})

/**
 * @시프트탭이벤트
 */

$('.sc-relate .sub li:first-child').keydown(function(e){
    // console.log(e.keyCode); 
    // console.log(e.shiftKey); 

    if(e.keyCode === 9 && e.shiftKey){
        $('.sc-relate .sub').stop().slideUp();
        $('.sc-relate .title').removeClass('.on');
    }
})

$('.sc-relate .sub li:last-child').keydown(function(e){
    // console.log(e.keyCode); 
    // console.log(e.shiftKey); 

    if(e.keyCode === 9 && !e.shiftKey){
        $('.sc-relate .sub').stop().slideUp();
        $('.sc-relate .title').removeClass('.on');
    }
})

//





// sc-relate.link 
//preventDefault 해제

$('.relate-item.link').click(function(){
    $('.relate-item.link').unbind();
})






//swiper banner-slide

const bannerSwiper = new Swiper (".banner-slide",{
loop:true,
slidesPerView: 3,
spaceBetween : 43,

pagination:{
 el:".pagination",
 type:"fraction",
},

navigation:{
 nextEl:".next",
 prevEl:".prev",
},

autoplay: {
 delay:2500,
 disableOnInteraction:false,
},
});

$('sc-banner .autoplay').click(function(e){
e.preventDefault();
})


//swiper banner-slide btn 자동재생

$('.sc-banner .autoplay').click(function(e){
e.preventDefault();

if($(this).hasClass('on')){
   $(this).removeClass('on').attr('aria-label','자동재생 정지')
   bannerSwiper.autoplay.start()
}else{
    $(this).addClass('on').attr('aria-label','자동재생 적용')
    bannerSwiper.autoplay.stop()
} 
})





//푸터
/**
 * 
 * @btn-top
 */
 
 $(window).scroll(function(){

     curr = $(this).scrollTop();
       
     if(curr > 100){
        $('.btn-top').removeClass('hide')
         $('.btn-top').addClass('show')

        }else{
            $('.btn-top').removeClass('show')
            $('.btn-top').addClass('hide')
    
        }  
    })
    
    $(".btn-top").click(function(){
       $('html,body').animate({scrollTop:'0'},300);
       return false;
    });

})//지우지마