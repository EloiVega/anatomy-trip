$(document).ready(function() {
    // var scrollorama = $.scrollorama({ blocks:'.scrollblock' });

    //to do:
    /*
        ✔️ - Create a list where you can store each topic.
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
        ✔️ - don't forget to set the maximum scroll to list.length * sizeOfScrollBlock
            - don't over-traverse through the list when scrolling: highlightedTopic = max(list.length-1, highlightedTopic + 1)
    */


    const labels = [
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

    const size = labels.length;
    const scrollBlockHeight = 1048;
    const maximumScrollPosition = (size-1) * scrollBlockHeight;
    let markedPos = 0;
    let timer; //Used to avoid timeout Loops

    // UTILITY FUNCTIONS //
    const removeWhiteSpaces = (str) => str.replace(/\s/g, "");

    // Marking and Unmarking Logic //
    const markTopic = (index) => {
        let id = removeWhiteSpaces(labels[markedPos].label);
        //unmark the previous markedPos
        $(`#${id}`).removeClass('marked');
        $(`#${id}_label`).removeClass('marked_label');
        
        //update markedPos and mark the new marker
        markedPos = index;
        id = removeWhiteSpaces(labels[markedPos].label);
        $(`#${id}`).addClass('marked');
        $(`#${id}_label`).addClass('marked_label');

        const designatedScrollPosition = index * scrollBlockHeight;

        isScrolling= false;
        if(timer) clearTimeout(timer);
        
        isScrolling = true;
        $('html, body').animate({scrollTop: designatedScrollPosition}, 700);
        timer = setTimeout(()=>{isScrolling = false}, 800);
    }

    // SCROLLING LOGISTICS //

    // Customized Parallax
    var lastScrollTop = 0;
    var isScrolling = false;
    $(window).scroll((event) => {

        if(isScrolling) return;
        isScrolling = true;
        setTimeout(() => {isScrolling = false}, 500);

        var startingScollPosition = $(this).scrollTop();
        var designatedScrollPosition = lastScrollTop;

        if(startingScollPosition > lastScrollTop){
            designatedScrollPosition = Math.min(maximumScrollPosition, lastScrollTop + 1048);
        } else {
                designatedScrollPosition = lastScrollTop - 1048;
        }

        $('html, body').animate({scrollTop: designatedScrollPosition}, 300);
        lastScrollTop = designatedScrollPosition;
    })

    // RENDERING //

    // Constructing the skeleton-pinning modal
    $("#anatomy_pin_modal").append(`
        <div id="anatomy_model" class="anatomy_model">
            <img src="./ui/images/anatomy.png" alt="a figure of the human body anatomy with circle on top to indicate parts' positions">
        </div>
    `)
    labels.forEach((topic, currentIndex) => {
        //First we construct the circles elements
        const id = removeWhiteSpaces(topic.label);
        let element = `<span id = "${id}" class="marker"></span>`;
        $("#anatomy_model").append(`
            ${element}
        `);
        //Then we edit their HTML CSS to position them as we wish
        $(`#${id}`).css({
            top: `${topic.yPosition}%`,
            left: `${topic.xPosition}%`
        })
        //Then make it marked when clicked
        $(`#${id}`).click(() => {markTopic(currentIndex)});
    });

    //-------------------------------------------------------------------------//
    
    //Mark the marker at the markedPos position
    const markedId = removeWhiteSpaces(labels[markedPos].label);
    $(`#${markedId}`).addClass('marked');
    
    // Constructing the Labels' List
    //first add the parent container of the list
    $("#anatomy_pin_modal").append(`<div id="label_list" class="label_list"></div>`);
    //then add each label
    labels.forEach((topic, currentIndex) => {
        const id = removeWhiteSpaces(topic.label);
        $(`#label_list`).append(`
        <div class = "label" id = "${id}_label">
                ${topic.label}
            </div>
        `)
        $(`#${id}_label`).click(()=>{markTopic(currentIndex)})
    })
    //Mark the label at the markedPos position
    $(`#${markedId}_label`).addClass('marked_label');
    
    //-------------------------------------------------------------------------//

    // Constructing the Scroll-Blocks
    labels.forEach(topic => {
        $("#scroll_block_container").append(`
        <div class="scrollblock" id="skin_container">
                <div class = "filter topic_banner"></div>
                <img class = "topic_banner" src="${topic.image_src}" alt="${topic.alt}">
            </div>
        `);
    })

});