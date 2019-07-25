// store.js

var store = {};

// add to cart button on item hover
// $( ".card" ).hover(function() {
//     $('.addToCart', this).show();
// },  function() {
//     $('.addToCart', this).hide();
//   }
// );




// emulate loading 
var posSet;

function loader() {
    posSet = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("wrapper").style.display = "block";

// $('#branchModal').modal('show')

}





// search
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});



$('.bars.open').on('click', function() {
    // event.preventDefault();
    $('#sidebar').attr("class","open");
    $('body').css({"margin": "0", "height": "100%", "overflow": "hidden"});
   
});

$('.overlay>button,#sidebar').on('click', function() {
    // event.preventDefault();
    $('#sidebar').attr("class","closed");
    $('body').attr("style"," ");
});

$('.copy-link').click(function(e) {
    var click = $('.copy-link');
    e.preventDefault();
    $(click).text("Copied");
    $('.share-div').addClass("shake");
  

    setTimeout(function() { 
        $('.share-div').removeClass("shake");
        $(click).text("Copy URL");
    }, 2000);
 });




// quantity changing on cart
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });

    $( ".itemaddtocart" ).hide();

    $('.add-to-cart').on('click', function() {
        // event.preventDefault();
        $('.cart-item img').addClass('animated bounce');
        $('.cart-item .badge').addClass('animated bounce');
        $( ".itemaddtocart" ).fadeIn('slow');

        setTimeout(function() { 
            $('.cart-item img').removeClass('animated bounce');
            $('.cart-item .badge').removeClass('animated bounce');

        }, 1000);

    });

    $( ".business-info" ).hide();

    $("#deliver-item").click(function() {
        $( ".user-info" ).slideDown('slow');
        $(".business-info").slideUp();
    });

    $("#pickup-item").click(function() {
        $( ".user-info" ).slideUp();
        $(".business-info").slideDown('slow');
    });

    $(".cart .cart-item").click(function(){
        $(".dropdown-menu").removeAttr('style');
    });

    $("[data-target='#cartDrawer']").click(function(){
        $(".dropdown-menu").hide();
    });


    window.onscroll = function() {myFunction()};

    var header = document.getElementById("sticky-div"); 
    var wrapper = document.getElementById("wrapper");
    var sticky = header.offsetTop;

    function myFunction() {
    if ($(window).scrollTop() >= 80) {
        header.classList.add("sticky");
        wrapper.classList.add("stickyDiv");
    } else {
        header.classList.remove("sticky");
        wrapper.classList.remove("stickyDiv");
    }
    }

    //mini cart
    // $('body').on('mouseenter mouseleave','.dropdown-menu',function(e){
    //     var _d=$(e.target).children(".dropdown-menu");_d.addClass('show');
    //     setTimeout(function(){
    //       _d[_d.is(':hover')?'addClass':'removeClass']('show');
    //       $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    //     },300);
    //   });

    // $("[data-target='#deliveryDrawer']").click(function() {
    //     $("body").addClass('modal-open');
    // });

    // $("[data-target='#deliveryDrawer']").on('shown', function(){
    //     alert("I want this to appear after the modal has opened!");
    // });

   



});

var pnProductNavContents = document.getElementById("pnProductNavContents");

// Handle setting the currently active link
    $(".pn-ProductNav_Link").click(function(e) {
        var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
        links.forEach(function(item) {
            item.setAttribute("aria-selected", "false");
        })
        e.target.setAttribute("aria-selected", "true");
        // Pass the clicked item and it's colour to the move indicator function
        // moveIndicator(e.target, colours[links.indexOf(e.target)]);
    });

    // var colours = {
    //     0: "#17cebf",
    // }

    // var pnIndicator = document.getElementById("pnIndicator");
    // var pnProductNav = document.getElementById("pnProductNav");
    
    //  // Set the indicator
    //  moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]);


    // function moveIndicator(item, color) {

    //     var textPosition = item.getBoundingClientRect();
    //     var container = pnProductNavContents.getBoundingClientRect().left;
    //     var distance = textPosition.left - container;
    //      var scroll = pnProductNavContents.scrollLeft;
    //     pnIndicator.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")";
    //     // count = count += 100;
    //     // pnIndicator.style.transform = "translateX(" + count + "px)";
        
    //     if (color) {
    //         pnIndicator.style.backgroundColor = color;
    //     }
    // }



// carousel
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});