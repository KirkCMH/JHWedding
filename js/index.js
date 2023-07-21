


$(window).scroll(function(){

  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    let times = 1.3;
    let height = $('.timeline_page').eq(0).offset().top
    let plus = (height+100) * 0.25;
    let window_top = [
      height + (plus * 0),
      height + (plus * 1),
      height + (plus * 2),
      height + (plus * 3),
      height + (plus * 10),
      height + (plus * 10),
      height + (plus * 10)
    ]
    // console.log(height)
    if (scroll < window_top[0]) {
      // console.log('00');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[0] && scroll < window_top[1]) {
      // console.log('00');
      $('#image_one').css('display', 'block');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[1] && scroll < window_top[2]) {
      // console.log('1');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'block');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[2] && scroll < window_top[3]) {
      // console.log('2');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'block');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[3] && scroll < window_top[4]) {
      // console.log('2');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'block');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[4] && scroll < window_top[5]) {
      // console.log('3');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'block');
      $('#image_six').css('display', 'none');
    }
    else if (scroll > window_top[5] && scroll < window_top[6] ) {
      // console.log('4');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      $('#image_six').css('display', 'block');
    }
    else if (scroll > window_top[6] ) {
      // console.log('4');
      $('#image_one').css('display', 'none');
      $('#image_two').css('display', 'none');
      $('#image_three').css('display', 'none');
      $('#image_four').css('display', 'none');
      $('#image_five').css('display', 'none');
      // $('#image_six').fadeOut();
    }


    let page_class = new Array()
    page_class.push(document.getElementsByClassName('timeline_page')[0]);
    page_class.push(document.getElementsByClassName('huge_photo_page')[0]);
    page_class.push(document.getElementsByClassName('location_page')[0]);

    if (scroll > 300) {
      $('.audio').css('display', 'block');
    }
    if (scroll > (page_class[0].offsetTop - 200)) {
      $('.timeline').css('display', 'block');
      $('.image_window').css('display', 'block');
    }
    if (scroll > (page_class[1].offsetTop - 50)) {
      $('.handwriting').css('display', 'block');
    }
  });



});


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.9486608, lng: 121.5611433 },
    zoom: 8,
  });
}


$( document ).ready(function() {
    // Create the script tag, set the appropriate attributes
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDo7z4FE8tNOqmkLLkIBtnlsZbItCYZqyE&callback=initMap';
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
  initMap()
  $('#image_one').css('display', 'none');
  let image_class = document.getElementsByClassName('desktop_image');
  // let polygon_class = document.getElementsByClassName('polygon');
  $('.time_section').each(function(index){
    $('.time_section').eq(index).click(function() {
        // console.log(image_class[index])
        for (let i = 0; i < image_class.length; i++) {
          // console.log(i)
          image_class[i].style.display = 'none';
          $('.polygon').eq(i).removeClass('active');
          $('.opacity').eq(i).removeClass('show');
          $('.desktop_image').eq(i).removeClass('fadeInRight');
        }
        $('.desktop_image').eq(index).addClass('fadeInRight');
        image_class[index].style.display = 'block';
        $('.polygon').eq(index).addClass('active');
        $('.opacity').eq(index).addClass('show');
      })
  })

});
