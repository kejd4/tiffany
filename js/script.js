//서브메뉴나타나기
$(".submenu,.subbg").hide()
$(".menu>ul>li,.subbg").mouseover(function(){
 $(".submenu,.subbg").show()
})

$(".menu>ul>li,.subbg").mouseleave(function(){
 $(".submenu,.subbg").hide()
})

//새소식,교육프로그램공지 탭메뉴
$(".notice").hide()

$(".tap_tit>li:first-child").click(function(){
 $(".news").show()
 $(".notice").hide()
 $(".tap_tit>li:first-child").css({color:"#154283"})
 $(".tap_tit>li:nth-child(3)").css({color:"#222326"})
 $(".news_tri").css({left:"11px"})
})

$(".tap_tit>li:nth-child(3)").click(function(){
 $(".news").hide()
 $(".notice").show()
 $(".tap_tit>li:nth-child(3)").css({color:"#154283"})
 $(".tap_tit>li:first-child").css({color:"#222326"})
 $(".news_tri").css({left:"120px"})
})

//fsite 나타나기
$(".fsite>.site>ul").hide()
$(".fsite>.site").mouseover(function(){
 $(this).children(".fsite>.site>ul").show()
})
$(".fsite>.site").mouseleave(function(){
 $(this).children(".fsite>.site>ul").hide()
})

//language 나타나기
$(".lang").hide()
$(".m_menu>.tit>ul>li:last-child").mouseover(function(){
 $(".lang").show()
})
$(".m_menu>.tit>ul>li:last-child").mouseleave(function(){
 $(".lang").hide()
})

/* 모바일 영역 */
// m_btn 클릭하면 모바일 메뉴 띄우기
$(".m_menu_wrap").hide()
$(".m_btn").click(function(){
 $(".m_menu_wrap").show()
 $(".wrap").css({height:"100vh",overflow:"hidden"})
})
$(".m_close").click(function(){
 $(".m_menu_wrap").hide()
 $(".wrap").css({height:"auto",overflow:"auto"})
 
})

//모바일 메뉴
$(".m_submenu").hide() // 모바일 서브메뉴 가리기
//slideToggle() // Toggle()
// >> 토글이란? 스위치 역할을 하는 매서드 
// 조건이 클릭일때, 같은 선택자를 한번 클릭하면 메서드가 발생하고, 한번더 클릭하면 다른 메서드가 발생하게하는 함수
$(".mobile_menu>ul>li").click(function(){
 $(this).children(".m_submenu").slideToggle()
 $(this).css({background:"#154283",color:"#ffffff"})
 $(".m_submenu").css({color:"#222326"})
})








// 모바일메뉴안에있는 li를 클릭했을때, 서브메뉴 나타나기
// 단, 개인 서브메뉴가 나타나야 함!!
// 단, 서브메뉴가 나타나면 위에 li의 배경색이 남색으로 변경되고, 텍스트가 흰색으로 바뀌어야 한다.

