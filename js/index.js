$(document).ready(function() {
    // var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

    //to do:
    /*
        - Create a list where you can store each topic.
            ex. [
                {
                    label: string,      --> name of the topic
                    image_src: string,  --> Source of the image related to the label
                    alt: string,        --> Alternative text for the image for people with unsupporting websites or using text narration tools
                    xPosition: int,     --> sets its horizontal position on the skeleton
                    yPosition: int,     --> sets its vertical position on the skeleton
                }
            ]
        - To avoid Bugs:
            - don't forget to set the maximum scroll to list.length * sizeOfScrollBlock
            - don't over-traverse through the list when scrolling: highlightedTopic = max(list.length-1, highlightedTopic + 1)
    */

    var lastScrollTop = 0;
    var isScrolling = false;
    $(document).scroll((event) => {

        if(isScrolling) return;
        isScrolling = true;
        setTimeout(() => {isScrolling = false}, 500);

        var startingScollPosition = $(this).scrollTop();
        var designatedScrollPosition = lastScrollTop;

        if(startingScollPosition > lastScrollTop){
                designatedScrollPosition = lastScrollTop + 1048;
        } else {
                designatedScrollPosition = lastScrollTop - 1048;
        }

        $('html, body').animate({scrollTop: designatedScrollPosition}, 300);
        lastScrollTop = designatedScrollPosition;
    })

    // scrollorama.animate('#title1',{ duration: 300, property:'zoom', end: 8 });
    // scrollorama.animate('#title3',{ duration: 600, property:'rotate', start:180,end:360 });
    // scrollorama.animate('#title2',{ duration: 600, property:'left', start:-800,end: 0 });

});