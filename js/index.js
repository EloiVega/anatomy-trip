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


    const Labels = [
        {
            label: "skin",
            image_src: "./ui/images/skin.jpg",
            alt: "An illustration of skin",
            xPosition: 0,
            yPosition: 0,
        },
        {
            label: "bones",
            image_src: "./ui/images/skeleton.jpg",
            alt: "An illustration of bones",
            xPosition: 10,
            yPosition: 0,
        },
        {
            label: "joints",
            image_src: "./ui/images/joints.jpg",
            alt: "An illustration of joints",
            xPosition: 20,
            yPosition: 0,
        },
        {
            label: "perephiral nerves",
            image_src: "./ui/images/nerves.jpg",
            alt: "An illustration of nerves",
            xPosition: 30,
            yPosition: 0,
        },
        {
            label: "teeth",
            image_src: "./ui/images/teeth.jpg",
            alt: "An illustration of teeth",
            xPosition: 40,
            yPosition: 0,
        },
        {
            label: "heart",
            image_src: "./ui/images/heart.jpg",
            alt: "An illustration of heart",
            xPosition: 50,
            yPosition: 0,
        },
        {
            label: "blood vessels",
            image_src: "./ui/images/blood.jpg",
            alt: "An illustration of blood vessels",
            xPosition: 60,
            yPosition: 0,
        },
        {
            label: "bone marrow",
            image_src: "./ui/images/bonemarrow.jpg",
            alt: "An illustration of bone marrow",
            xPosition: 70,
            yPosition: 0,
        },
        {
            label: "muscles",
            image_src: "./ui/images/muscles.jpg",
            alt: "An illustration of muscles",
            xPosition: 80,
            yPosition: 0,
        },
        {
            label: "retina",
            image_src: "./ui/images/eye.jpg",
            alt: "An illustration of retina",
            xPosition: 90,
            yPosition: 0,
        },
        {
            label: "thyroid",
            image_src: "./ui/images/thyroid.jpg",
            alt: "An illustration of thyroid",
            xPosition: 0,
            yPosition: 10,
        },
        {
            label: "kidneys",
            image_src: "./ui/images/kidney.jpg",
            alt: "An illustration of a kidney",
            xPosition: 20,
            yPosition: 10,
        },
    ]

    var lastScrollTop = 0;
    var isScrolling = false;
    $(window).scroll((event) => {

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