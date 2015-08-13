$( document ).ready(function() {

// code for sticky navigation at top of page
var mn = $('.main-nav');
  
$(window).scroll(function() {
  if( $(this).scrollTop() > 150 ) {
    mn.addClass("main-nav-scrolled");
  } else {
    mn.removeClass('main-nav-scrolled');
  }
});
  
//code for changing thumbnails to view as list of all artists page
  
$('#thumb-to-list').on('click', function() {
  if ($(this).text() == "View As List") {
    $(this).html('View As Thumbnails');
    $('.artist-thumbs').fadeOut();
  } else {
    $(this).html('View As List');
    $('.artist-thumbs').fadeIn();
  }
});
  
// IMAGE GALLERY ON EACH ARTIST PAGE CODE
  
//Variables for image gallery
  
var images = [];
var imageIndex =0;
var $mainImage = $(".large-image img");
var $thumbnails =$(".thumbnails img");
var imageCount = $thumbnails.length;
  
//load array
  
for(var i=0; i<imageCount; i= i+1) {
  
  images.push({
    source : $($thumbnails[i]).attr("src"),
    picHeight : $($thumbnails[i]).attr("height"),
    picWidth : $($thumbnails[i]).attr("width"),
  });
  
}
  
// function that allows you to show image
  
function showImage(index) {
  $($mainImage).attr("src",images[index].source);
  
  if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 82 && Math.round((images[index].picHeight / images[index].picWidth) *100) <= 100) {
    
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 100) {
    
    $mainImage.height(450);
    $mainImage.width((images[index].picWidth / images[index].picHeight) * 450);
    
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) < 82) {
    var newHeight = (images[index].picHeight / images[index].picWidth) * 550;
    $mainImage.width(550);
    $mainImage.height(newHeight);
  }
  
};

function showLightBox(index) {
  $("#imageWrap img").attr("src",images[index].source);
  
  if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 82 && Math.round((images[index].picHeight / images[index].picWidth) *100) <= 100) {
    
    $("#imageWrap img").height(600);
    $("#imageWrap img").width((images[index].picWidth / images[index].picHeight) * 600);
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) > 100) {
    
    $("#imageWrap img").height(600);
    $("#imageWrap img").width((images[index].picWidth / images[index].picHeight) * 600);
    
  
  } else if(Math.round((images[index].picHeight / images[index].picWidth) *100) < 82) {
    var newHeight = (images[index].picHeight / images[index].picWidth) * 850;
    $("#imageWrap img").width(850);
    $("#imageWrap img").height(newHeight);
  }
  
};
  
// function that finds each images index in the array 
  
function findImageIndex(imageSource) {

  for(var i=0; i <images.length; i = i+1) {
    if(images[i].source === imageSource) {
    
      return i
      
    }
  }
}
  
// shows image when clicking on thumbnails
  
$(".thumbnails img").click(function(){

  imageIndex = findImageIndex($(this).attr("src"));
  
  showImage(imageIndex);
});
  
//show first image 

showImage(imageIndex);
  
// when clicking arrows it moves to next image
  
$(".left-container img").click(function() {
  
  if(imageIndex === 0) {
    
    imageIndex= images.length - 1;
    
  } else {
    
    imageIndex -=1;
    
  }
  
  showImage(imageIndex);

});
  
$(".right-container img").click(function() {
  
  if(imageIndex === images.length - 1) {
    
    imageIndex = 0;
    
  } else {
    
    imageIndex +=1;
    
  }
  
  showImage(imageIndex);

});
  
// Click on the large image to reveal lightbox

var $overlay = $('<div id="overlay"></div>');
var $imageWrap = $('<div id="imageWrap"></div>');
var $img = $('<img>');
var $leftArrow = $('<div class="leftArrow"></div>');
var $rightArrow = $('<div class="rightArrow"></div>');
var $cross = $('<div class="cross"></div>')
var $crossing = $('<p class="crossing">menu</p>')
  
  
$("body").append($overlay);
$overlay.append($imageWrap);
$imageWrap.append($leftArrow);
$imageWrap.append($rightArrow);
$imageWrap.append($cross);
$cross.append($crossing);
$imageWrap.append($img);
  
$(".large-image img").click(function() {
  var $scrollPos = $(window).scrollTop() + "px";
  $overlay.css("top", $scrollPos);
  $('body').css("overflow","hidden");
  
  imageIndex = findImageIndex($(this).attr("src"));
  showLightBox(imageIndex);
  
  $overlay.fadeIn(500);
});
  
$(".leftArrow").click(function() {
  
  if(imageIndex === 0) {
    
    imageIndex= images.length - 1;
    
  } else {
    
    imageIndex -=1;
    
  }
  
  showLightBox(imageIndex);

});
  
$(".rightArrow").click(function() {
  
  if(imageIndex === images.length - 1) {
    
    imageIndex = 0;
    
  } else {
    
    imageIndex +=1;
    
  }
  
  showLightBox(imageIndex);

});
$cross.click(function(){
  //Hide the overlay
  $('body').css("overflow","visible");
  $overlay.fadeOut(500);
});
  
});// end ready*/
  
