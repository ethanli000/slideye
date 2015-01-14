var currentPosition = 0,
  containerHeight = 0,
  maxPostion = 0,
  scrollLock = false,
  lastScrollTime = new Date().getTime();


function setSecSize() {
  var width = 0,
    height = 0,
    count = 0;
  width = $('#main-content').width();
  height = $('#main-content').height() - 60;
  containerHeight = height;
  $('.selfie-main').css("max-height", height);
  $('.selfie-main > div').each(function () {
    $(this).width(width);
    $(this).height(height);
    $(this).css('top', count * height);
    count++;
  });
}

function setSubNavi(currentLabel) {
  $('#sub-content > ul > li.selected').removeClass('selected');
  $('a[href="' + currentLabel + '"]').parent('li').addClass('selected');
}

function init() {
  var naviCount = 0;
  setSecSize();
  setSubNavi('#' + (window.location.hash.substring(1) || 'status'));
  $('#sub-content > ul > li').each(function () {
    if ($(this).hasClass("selected")) {
      currentPosition = maxPostion;
    }
    maxPostion =  naviCount * containerHeight;
    naviCount++;
  });
}

function upOneSec() {
  $prevLabel = $('#sub-content > ul > li.selected').prev('li');
  setSubNavi($prevLabel.children('a').attr('href'));
  currentPosition -= containerHeight;
  $('.selfie-main').animate({scrollTop: currentPosition}, 'slow', function () {scrollLock = false; });
}
function downOneSec() {
  //alert("downOne");
  $nextLabel = $('#sub-content > ul > li.selected').next('li');
  setSubNavi($nextLabel.children('a').attr('href'));
  currentPosition += containerHeight;
  $('.selfie-main').animate({scrollTop: currentPosition}, 'slow', function () {scrollLock = false; });
}

$(document).ready(function () {
  //alert("ready!");
  init();

  //PAGE SWITCH: a tag
  $('a[href*=#]').click(function () {
    //event.preventDefault();
    //alert($( $.attr(this, 'href') ).offset().top);
    var scrollHeight = $(this.hash).position().top;
    currentPosition += scrollHeight;
    //alert(currentPosition);
    $('.selfie-main').animate({scrollTop: currentPosition}, 'slow');
    setSubNavi($(this).attr('href'));
  });

  //PAGE SWITCH: mouse wheel
  $('.selfie-main').bind('mousewheel', function (event) {
    event.preventDefault();
    var nowTime = new Date().getTime();
    //alert(lastScrollTime);
    if (!scrollLock && nowTime - lastScrollTime > 50) {
      //alert(nowTime);
      lastScrollTime = nowTime;
      if (event.originalEvent.wheelDelta < 0 && currentPosition < maxPostion) {
        //DOWN
        //alert("down");
        scrollLock = true;
        downOneSec();
        //setTimeout(downOneSec, 200);
      } else if (currentPosition > 0) {
        //UP
        //alert("up");
        scrollLock = true;
        upOneSec();
        //setTimeout(, 200);
      }
    } else {
      lastScrollTime = nowTime;
    }
  });

  //PAGE SWITCH: keyboard
  $(document).bind('keydown', function (event) {
    var nowTime = new Date().getTime();
    //alert(lastScrollTime);
    if (!scrollLock && nowTime - lastScrollTime > 50) {
      //alert(nowTime);
      lastScrollTime = nowTime;
      if (event.keyCode === 40 && currentPosition < maxPostion) {
        event.preventDefault();
        //DOWN
        //alert("down");
        scrollLock = true;
        downOneSec();
        //setTimeout(downOneSec, 200);
      } else if (event.keyCode === 38 && currentPosition > 0) {
        event.preventDefault();
        //UP
        //alert("up");
        scrollLock = true;
        upOneSec();
        //setTimeout(, 200);
      }
    } else {
      lastScrollTime = nowTime;
    }
  });
});