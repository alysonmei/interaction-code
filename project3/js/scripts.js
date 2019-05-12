// $('body').append('<div style="width:100% !important; height:10000vh !important; background-color: #e5e5d7 !important; z-index:500 !important; position: fixed !important; top: 0px !important; left: 0px !important;"></div>');
//
// $("img").each(function(counter){
//
//   var myposition = counter * 500;
//
//   var mystyle = 'position: fixed !important; left: 20px !important; top: ' + myposition + 'px !important; z-index: 550 !important; width:40% !important; margin-bottom:200px !important';
//
//   $(this).css('cssText', mystyle);
//
// });
//
// $("p, a, h1, h2, h3, ul").each(function(counter){
//
//   var myposition = counter * 10;
//
//   var mystyle = 'position: fixed !important; right: 20px !important; top: ' + myposition + ' px !important; font-style:"Helvetica" !important; width:400px !important; background-color: #e5e5d7 !important; border: 1px solid black !important; z-index: 550 !important; margin-bottom:100px !important';
//
//   $(this).css('cssText', mystyle);
//
// });
//
// $("img, p, a, h1, h2, h3, ul, li").hover(
//   function(){
//     $(this).css('cssText', 'z-index:5000 !important;');
//   }
// );

$(document).ready(function(){

  $('head').append("<style>body{width:100% !important; display:flex !important; margin:0 !important;}");

  $('body').append("<div class='left'></div>");
    $('.left').css('cssText', 'width:34.9% !important; background-color:#e5e5d7 !important; border-right:1px solid black !important; height:120vh !important; z-index:500 !important; padding:5vmin 0 5vmin 5% !important; overflow:scroll !important; float:left !important; position:absolute !important; top:0 !important; left:0!important;');

  $('body').append("<div class='right'></div>");
  $('.right').css('cssText', 'width:50% !important; background-color:#e5e5d7 !important; height:120vh !important; z-index:500 !important; padding:5vmin 5% 5vmin 5% !important; overflow:scroll !important; float:right !important; position:absolute !important; top:0 !important; right:0 !important;');

  $('img').appendTo(".left");
  $('img').css('cssText', 'width:40vmin !important; padding-bottom:5vmin !important; z-index:501 !important;');

  $('h1').css('cssText', 'font-family:Helvetica !important; z-index:501 !important; font-size:30pt !important; margin-bottom:15px !important;');

  $('h2, h3').css('cssText', 'font-family:Helvetica !important; z-index:501! important; font-size:20pt !important; font-weight:normal !important; margin-bottom:10px !important;');

  $('p, a, ul, li').css('cssText', 'font-family:Helvetica !important; font-size:15pt !important; font-weight:lighter !important; z-index:501 !important; margin-bottom:5px !important;');

  $('h1, h2, h3, p, a, ul, li').appendTo(".right");

  $('a:visited').css('cssText', 'color: blue !important; text-decoration:none !important;');

});

// $('h2').appendTo(".right");
//
// $('h3').appendTo(".right");
//
// $('p, a').appendTo(".right");
//
// $('ul').appendTo(".right");
//
// $('li').appendTo(".right");
