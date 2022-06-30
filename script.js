let thumbsData = ["./projectImages/wpw_02b.png", "./projectImages/april_ed.png", "./projectImages/crafting_ed.png", "./projectImages/momissleeping_ed.png", "./projectImages/character_A4.png", "./projectImages/advent02.jpg"];

let thumbsTitle = ["Warm Picnic Week", "April In The Garden", "Crafting", "Mom Is Sleeping", "Character", "Advent"];

let activeProject = 0;

thumbsData.forEach((src, index) => {
    $('#projectThumbs').append(`<figure class ="thumbwrapper"><img class="thumb" src="${src}"><figcaption class="title" data-index="${index}">${thumbsTitle[index]}</figcaption></figure>`);
    });

$('.title').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let newActiveProject = parseInt(indexClicked);
        clearProject();
        loadProject(newActiveProject);
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        activeProject = newActiveProject;
});

let imagesData = [{
    photo: ["./projectImages/wpw_01b.png", "./projectImages/wpw_02b.png", "./projectImages/wpw_03.png", "./projectImages/wpw_04b.png", "./projectImages/wpw_05.png"],
    title: 'Warm Picnic Week',
    description: 'I created this series of pictures for an instagram challenge.'
}, {
    photo: ["./projectImages/april_ed.png", "./projectImages/april_detail1.png", "./projectImages/april_detail2.png", "./projectImages/april_detail3.png"],
    title: "April In The Garden",
    description: "I painted this picture for a family calendar. I was largely inspired by my own children."
}, {
    photo: ["./projectImages/crafting_ed.png", "./projectImages/craftin_detail1.png", "./projectImages/craftin_detail2.png"],
    title: "Crafting",
    description: "Created for the same calendar, and that's still my family :)"
}, {
    photo: ["./projectImages/momis sleeping_ed.png", "./projectImages/momsleeping_detail1.png", "./projectImages/momsleeping_detail2.png", "./projectImages/momsleeping_detail3.png"],
    title: "Mom Is Sleeping",
    description: "Created for the same calendar. I remember so well those first days with tiny ones, the tiredness and the wonder of it all. The readiness to help filled me alwayxs with gratitude. "
}, {
    photo: ["./projectImages/character_A4.png", "./projectImages/character_01b.png", "./projectImages/character_02b.png", "./projectImages/character_03b.png", "./projectImages/character_04b.png", "./projectImages/character_05b.png", "./projectImages/character_06b.png", "./projectImages/character_07b.png", "./projectImages/character_08b.png", "./projectImages/character_09b.png"],
    title: "Character Study",
    description: "A little study inspired by my daughter."
}, {
    photo: ["./projectImages/advent01.jpg", "./projectImages/advent02.jpg", "./projectImages/advent03.jpg", "./projectImages/advent04.jpg", "./projectImages/advent05.jpg", "./projectImages/advent06.jpg"],
    title: "Advent",
    description: "I created this series of pictures for an instagram challenge."
}
];

function loadProject(activeProject) {
    imagesData[activeProject].photo.forEach((src, index) => {
        $('#project-image-list').append(`<img class="project" id="${index}" src="${src}">`);
    });
    $('#project-title').text(imagesData[activeProject].title);
    $('#project-description').text(imagesData[activeProject].description);
};

function clearProject() {
    $('#project-image-list').empty();
    $('#project-title').text('');
    $('#project-description').text('');
};

$('#next').click(() => {
    clearProject();
    if (activeProject < 5) {
        activeProject++;
    }
    loadProject(activeProject);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});

$('#prev').click(() => {
    clearProject();
    if (activeProject > 0) {
        activeProject--;
    }
    loadProject(activeProject);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});

$('#back').click(() => {
    clearProject();
})