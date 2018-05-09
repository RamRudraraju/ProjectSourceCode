
$(document).ready(function() {
    $(document).on("scroll", scroller);
    $('a[href^="#"]').on('click', function(e) { // Selecting all "href" when Clicked.
        e.preventDefault();                     // This will cansil the Default Functionalities.
        $(document).off("scroll");              // Canselling all the Scrollers
        
        $('a').each(function() { // It will Run Through Each Hiper link & Remove the Active Class 
            $(this).removeClass('active');
        });
        $(this).addClass('active');   // Add The active Functionality to the Clicked- Element.
        
        var moveto = this.hash;       // $(this.hash).offset().top  --> It will indicate where the Section is Located
        $('html, body').stop().animate({
            'scrollTop': ($(this.hash).offset().top) - 50
        }, 500, 'swing', function() {
            window.location.hash = moveto;
            $(document).on("scroll", scroller); // Enabiling the "Scroll"
        });
        console.log($(this.hash).offset().top);
    });
});

function scroller(e) { // Scroller Function
    var sPos = $(document).scrollTop();   // Gives the position where we are located.
    console.log(sPos);
    $('#mainnav a').each(function() {
        var currentLink = $(this);
        var currentattr = $(this).attr("href");
        if (($(currentattr).position().top) - 50 <= sPos && ($(currentattr).position().top) - 50 + $(currentattr).height() > sPos) {
            console.log(currentLink);
            window.location.hash = currentattr;
            currentLink.addClass('active');
        } else {
            currentLink.removeClass('active');
        }
    });
}


/*
$(document).ready(function () {    // Standerd way to load the Page when we are writing jQuery
    
    $(document).on("scroll", scroller);

    $('a[href^="#"]').on('click', function (e) {  // Code that will rum when clicked on "a tag"
        e.preventDefault();        // This will cancell the default functinality of that function.
        $(document).off("scroll"); // Tuning the scroll OFF (For jQuery Setting UP where we want the page to Go)

        $('a').each(function () {  // Filtering through all Hyperlinks
            $(this).removeClass('active'); // Removing the CSS Class
        });
        
        $(this).addClass('active'); // Adding the CSS Class
        console.log(this);

        var moveto = this.hash;
        $('html, body').stop().animate({ // Selcting the Elements and Adding the Animations to it.
            'scrollTop': ($(this.hash).offset().top) - 50 // Scrolling to the Top "Calculation of Exact Location"
        }, 500, 'swing', function () {
            window.location.hash = moveto;
            $(document).on("scroll", scroller);
        });
        console.log($(this.hash).offset().top);

    });

});

function scroller(e) {
    
    var sPos = $(document).scrollTop();

    console.log(sPos);
    $('#mainnav a').each(function () {
        var currentLink = $(this);
        var currentattr = $(this).attr("href");
        if (($(currentattr).position().top) - 50 <= sPos && ($(currentattr).position().top) - 50 + $(currentattr).height() > sPos)
        {
            console.log(currentLink);
            window.location.hash = currentattr;
            currentLink.addClass('active');
        } else {
            currentLink.removeClass('active');
        }

    });

}