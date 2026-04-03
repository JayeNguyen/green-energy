function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let buttons = document.getElementById('controls').children

let resource = {
    obj_1: {
        headingContent: 'Broadening our understanding of “energy access” is essential',
        bodyText: 'Beyond mere household connections, energy access should encompass livelihoods, productivity, and economic development. This broader vision is clearly reflected in UNDP’s Africa Minigrids Programme. The programme not only focuses on household electrification but also strategically enhances the work of entrepreneurs, companies, and key economic sectors such as education, health, and commerce. By making these connections, UNDP demonstrates a philosophy that links clean energy to both individual and socioeconomic empowerment. Building on this comprehensive approach, UNDP’s commitment to provide clean energy for an additional 500 million people by 2025 aims to empower livelihoods and stimulate economic growth.',
        imgUrl: './img/img-1.jpg',
        imgAlt: 'solar panels'
    },
    obj_2: {
        headingContent: 'Bringing different actors into the solution space',
        bodyText: 'This means supporting the next generation of leaders and innovators to ensure that they are equipped with the skills to address the complex challenges. We also need to be gender responsive and ensure that women are part of the process at every level. Experiences supported by UNDP in Peru and Yemen have shown the development benefits of engaging women as agents of change through their training as clean energy technicians. Projects in Malawi, Nepal and India have shown that energy access can be a game-changer for women, freeing up their time and opening diverse livelihood opportunities such as education and entrepreneurship, including in the renewable energy value chain.',
        imgUrl: './img/img-2.jpg',
        imgAlt: 'light bulb'
    },
    obj_3: {
        headingContent: 'Ensuring that new energy access - especially reaching the last mile - is clean and, whenever possible, renewable',
        bodyText: 'Energy access can directly contribute to a just energy transition. All of the Nationally Determined Contributions supported through UNDP’s Climate Promise include energy-related targets or policies. In the context of Africa, the region’s carbon emissions, which account for less than 3% of global energy-related emissions, present an opportunity to embark on a new paradigm of sustainable development. This paradigm prioritizes energy access and unlocks the continent’s renewable energy potential, while safeguarding the climate.',
        imgUrl: './img/img-3.jpg',
        imgAlt: 'wind turbine'
    }
}

let HTML = document.getElementById('content')

function first_content() {
    let first = resource.obj_1
    HTML.innerHTML = 
    `<h1>${first.headingContent}</h1>
    <img src="${imgUrl}" alt="${imgAlt}">
    <p>${bodyText}</p>`
}

let handleSelection = function (ev) {
    for (let btn of buttons) {
        if (btn.hasAttribute('id')) {
            btn.removeAttribute('id');
        }
    }

    ev.target.setAttribute('id', 'active-button')
    let currentBtn = ev.target.innerText

    if (currentBtn === 'Understanding'){
        HTML.innerHTML = 
        `<h1>${resource.obj_1.headingContent}</h1>
        <img src="${resource.obj_1.imgUrl}" alt="${resource.obj_1.imgAlt}">
        <p>${resource.obj_1.bodyText}</p>`
    }
    else if (currentBtn === 'Innovators'){
        HTML.innerHTML =
        `<h1>${resource.obj_2.headingContent}</h1>
        <img src="${resource.obj_2.imgUrl}" alt="${resource.obj_2.imgAlt}">
        <p>${resource.obj_2.bodyText}</p>`
    }
    else if (currentBtn === 'Accessibility'){
        HTML.innerHTML =
        `<h1>${resource.obj_3.headingContent}</h1>
        <img src="${resource.obj_3.imgUrl}" alt="${resource.obj_3.imgAlt}">
        <p>${resource.obj_3.bodyText}</p>`
    }
}

for (let btn of buttons) {
  btn.addEventListener('click', handleSelection)
}