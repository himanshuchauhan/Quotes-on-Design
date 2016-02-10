//to change the quote on click of the button.
$('#change').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        timeout:2000,
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            //add the quote to the page.
            $('.author').html("-" + post.title);
            $('.quote').html(post.content);


            //change the font size depending on quotes length.
            var quotestring = $(".quote").text();
            if (quotestring.length < 150) {
                $(".quote").css("font-size", "30px")
            } else if (quotestring.length < 300) {
                $(".quote").css("font-size", "25px")
            } else if (quotestring.length < 450) {
                $(".quote").css("font-size", "22px")
            } else {
                $(".quote").css("font-size", "16px");
            };



            // If the Source is available, use it. Otherwise hide it.
            if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                $('#quote-source').html('Source:' + post.custom_meta.Source);
            } else {
                $('#quote-source').hide();
            };

        },
        error: function(data) {
            $('.quote').html("You Got an ERROR. Hit that Awesome Button Again.");
            $('.author').html("-Himanshu Chauhan");
        },
        cache:false,


    });
});


//animation for the svg loader
(function() {
    var triggerLoading = [].slice.call(document.querySelectorAll('.pageload-link')),
        loader = new SVGLoader(document.getElementById('loader'), {
            speedIn: 400,
            easingIn: mina.easeinout
        });

    function init() {
        triggerLoading.forEach(function(trigger) {
            trigger.addEventListener('click', function(ev) {
                ev.preventDefault();
                loader.show();
                // after some time hide loader
                setTimeout(function() {
                    loader.hide();
                }, 2000); //loader hide delay in mili seconds.
            });
        });
    }

    init();
})();
