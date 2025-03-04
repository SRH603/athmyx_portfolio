const PENS_TO_DISPLAY = 80;

const URL_IMG_BASE =
    "https://raw.githubusercontent.com/cbolson/assets/refs/heads/main/codepen/2024/";
const PENS = [
    {
        title: "Domain Echoing",
        url: "https://domainechoing.athmyx.com/",
        img: "/images/domainechoing.png",
        likes: 1223,
        views: 18059
    },
    {
        title: "Skin Talk",
        url: "https://ctb.athmyx.com/",
        img: "/images/ctb.png",
        description: "123",
        likes: 485,
        views: 11697
    },
    {
        title: "Π Tournament",
        url: "https://pitour.athmyx.com/",
        img: "/images/pitour.png",
        likes: 337,
        views: 7844
    },
    {
        title: "Harmony Music Club",
        url: "https://harmonymusic.athmyx.com/",
        img: "harmonymusic.png",
        likes: 213,
        views: 5279
    },
    {
        title: "Artificial Existence",
        url: "https://artiexi.athmyx.com/",
        img: "artiexi.png",
        likes: 165,
        views: 4721
    },
    {
        title: "FPV Drone Club",
        url: "https://FPVDrone.athmyx.com/",
        img: "FPVDrone.png",
        likes: 200,
        views: 4183
    },
    {
        title: "Rhythm Analysis Model",
        url: "RhythmAnalysisModel.athmyx.com",
        img: "RhythmAnalysisModel.png",
        likes: 249,
        views: 5137
    },
    {
        title: "Nyquist Project",
        url: "Nyquist.athmyx.com",
        img: "2024-08.webp",
        likes: 102,
        views: 3006
    },
    {
        title: "Music Therapy",
        url: "https://codepen.io/cbolson/full/LYoLQJy",
        img: "2024-09.webp",
        likes: 46,
        views: 1218
    },
    {
        title: "Avantgarde EDM Works",
        url: "https://codepen.io/cbolson/full/KKOoqbq",
        img: "2024-10.webp",
        likes: 39,
        views: 1442
    },
    // block 2
    {
        title: "Butianera - Minecraft Modpack",
        url: "https://codepen.io/cbolson/full/GRVPGoY",
        img: "2024-11.webp",
        likes: 50,
        views: 1551
    },
    {
        title: "ARMaze",
        url: "https://codepen.io/cbolson/full/YzmZoeO",
        img: "2024-12.webp",
        likes: 29,
        views: 1084
    },
    {
        title: "Nihility - Minecraft Mod",
        url: "https://codepen.io/cbolson/full/LYommYY",
        img: "2024-13.webp",
        likes: 106,
        views: 3417
    },
    {
        title: "Solutions on Art of Problem Solving",
        url: "https://codepen.io/cbolson/full/YzmeyQm",
        img: "2024-14.webp",
        likes: 27,
        views: 1117
    },
    {
        title: "An APP",
        url: "https://codepen.io/cbolson/full/PogLawK",
        img: "2024-15.webp",
        likes: 21,
        views: 1812
    },
    {
        title: "Animated tabbed content using details",
        url: "https://codepen.io/cbolson/full/mdNyWry",
        img: "2024-16.webp",
        likes: 55,
        views: 1776
    },
    {
        title: "Astigmatism MR",
        url: "https://codepen.io/cbolson/full/mdgpjwb",
        img: "2024-17.webp",
        likes: 133,
        views: 5850
    },
    {
        title: "Rift of rafts",
        url: "https://codepen.io/cbolson/full/EaYNZpV",
        img: "2024-18.webp",
        likes: 12,
        views: 1700
    },
    {
        title: "Increasing rate",
        url: "https://codepen.io/cbolson/full/GRbOYpM",
        img: "2024-19.webp",
        likes: 30,
        views: 895
    },
    {
        title: "Eternal Starlight - Minecraft Mod",
        url: "https://codepen.io/cbolson/full/jOoGJmR",
        img: "2024-20.webp",
        likes: 361,
        views: 5915
    },
    // block 3
    {
        title: "F23 - BMS of Fighters",
        url: "https://codepen.io/cbolson/full/dyEdGrK",
        img: "2024-21.webp",
        likes: 34,
        views: 1735
    },
    {
        title: "Geometry Calculator",
        url: "https://codepen.io/cbolson/full/OJGYrQP",
        img: "2024-22.webp",
        likes: 34,
        views: 851
    },
    {
        title: "SRH collection (Dancing Line Fan-made)",
        url: "https://codepen.io/cbolson/full/NWZeWbK",
        img: "2024-23.webp",
        likes: 12,
        views: 804
    },
    {
        title: "2023 Dancing Line Fan-Made Judge",
        url: "https://codepen.io/cbolson/full/JjgqxYg",
        img: "2024-24.webp",
        likes: 74,
        views: 2368
    },
    {
        title: "Whisoul",
        url: "https://codepen.io/cbolson/full/VwNgyWv",
        img: "2024-25.webp",
        likes: 20,
        views: 1621
    },
    {
        title: "Revenia - Phira",
        url: "https://phira.moe/chart/13509",
        img: "2024-26.webp",
        likes: 37,
        views: 894
    },
    {
        title: "E-n^2igha - Rolling Sky Fan-made with WT",
        url: "https://codepen.io/cbolson/full/qBwZaNq",
        img: "2024-27.webp",
        likes: 13,
        views: 1519
    },
    {
        title: "Dancing Line collaborate Fan-Made 'U make Me'",
        url: "https://codepen.io/cbolson/full/WNBxRdP",
        img: "2024-28.webp",
        likes: 118,
        views: 3098
    },
    {
        title: "Fesor Sound Lab",
        url: "https://codepen.io/cbolson/full/MWNBdyV",
        img: "2024-29.webp",
        likes: 54,
        views: 1159
    },

    {
        title: "Minecraft Collab Community",
        url: "https://codepen.io/cbolson/full/rNXvPBR",
        img: "2024-30.webp",
        likes: 30,
        views: 1946
    },

    // block 4
    {
        title: "Exploration",
        url: "https://codepen.io/cbolson/full/JoPjmZa",
        img: "2024-31.webp",
        likes: 112,
        views: 3461
    },
    {
        title: "Arcaea (Moded)",
        url: "Interactive gallery with photo description.",
        img: "2024-32.webp",
        likes: 10,
        views: 1098
    },
    {
        title: "Genshin Impact Mod",
        url: "https://codepen.io/cbolson/full/KKLveax",
        img: "2024-33.webp",
        likes: 0,
        views: 0
    },
    {
        title: "Hollowness - Kinetic Rush (9th World Render Context)",
        url: "https://codepen.io/cbolson/full/xxvBpEN",
        img: "2024-34.webp",
        likes: 20,
        views: 408
    },
    {
        title: "VR Chat World",
        url: "https://codepen.io/cbolson/full/dyBXXrL",
        img: "2024-35.webp",
        likes: 41,
        views: 1661
    },
    {
        title: "Illustrations",
        url: "https://codepen.io/cbolson/full/raBBgeG",
        img: "2024-36.webp",
        likes: 26,
        views: 797
    },
    {
        title: "Oasis of Calm Theory - An open world",
        url: "https://codepen.io/cbolson/full/YzmENGy",
        img: "2024-37.webp",
        likes: 173,
        views: 1536
    },
    {
        title: "Photographs",
        url: "https://codepen.io/cbolson/full/LYKgKoo",
        img: "2024-38.webp",
        likes: 31,
        views: 893
    },
    {
        title: "Minecraft Server",
        url: "https://codepen.io/cbolson/full/RwmPpGa",
        img: "2024-39.webp",
        likes: 6,
        views: 179
    },
    {
        title: "Toolbox Website",
        url: "https://codepen.io/cbolson/full/ExzKdjG",
        img: "2024-40.webp",
        likes: 33,
        views: 3095
    },

    // block 5

    {
        title: "Stable Diffusion",
        url: "https://codepen.io/cbolson/full/abxWQxW",
        img: "2024-41.webp",
        likes: 14,
        views: 152
    },
    {
        title: "Bento grid using grid areas for responsive postitioning.",
        url: "https://codepen.io/cbolson/full/eYqNpON",
        img: "2024-42.webp",
        likes: 33,
        views: 658
    },
    {
        title: "MindMap",
        url: "https://codepen.io/cbolson/full/LYvNEpx",
        img: "2024-43.webp",
        likes: 4,
        views: 443
    },
    {
        title: "SVG filter ripple gallery",
        url: "https://codepen.io/cbolson/full/jOobxwG",
        img: "2024-44.webp",
        likes: 17,
        views: 1082
    },
    {
        title: "Testimonials",
        url: "https://codepen.io/cbolson/full/abxXOPy",
        img: "2024-45.webp",
        likes: 364,
        views: 9960
    },
    {
        title: "Verify code with Toast",
        url: "https://codepen.io/cbolson/full/wvZraXW",
        img: "2024-46.webp",
        likes: 7,
        views: 171
    },
    {
        title: "nothing to see",
        url: "https://codepen.io/cbolson/full/RNbbeMw",
        img: "2024-47.webp",
        likes: 7,
        views: 165
    },
    {
        title: "Linked map using :has()",
        url: "https://codepen.io/cbolson/full/MWRLoWb",
        img: "2024-48.webp",
        likes: 7,
        views: 137
    },
    {
        title: "the medium is the message (Marshall McLuhan)",
        url: "https://codepen.io/cbolson/full/ogvXXaM",
        img: "2024-49.webp",
        likes: 4,
        views: 502
    },
    {
        title: "One 4 All Login / Register / Password-reminder",
        url: "https://codepen.io/cbolson/full/JjgKNJZ",
        img: "2024-50.webp",
        likes: 3,
        views: 482
    },

    // block 6
    {
        title: "Smooth Scrolling Scrolls",
        url: "https://codepen.io/cbolson/full/pomwEEp",
        img: "2024-51.webp",
        likes: 18,
        views: 1213
    },
    {
        title: "Expanse",
        url: "https://codepen.io/cbolson/full/VwoEJza",
        img: "2024-52.webp",
        likes: 32,
        views: 1171
    },
    {
        title: "Let it Snow",
        url: "https://codepen.io/cbolson/full/yyBYMww",
        img: "2024-53.webp",
        likes: 8,
        views: 176
    },
    {
        title: "Pricing card",
        url: "https://codepen.io/cbolson/full/WNBBOmO",
        img: "2024-54.webp",
        likes: 3,
        views: 286
    },
    {
        title: "Wheel Gallery (CSS only)",
        url: "https://codepen.io/cbolson/full/MWNOxvB",
        img: "2024-55.webp",
        likes: 155,
        views: 2710
    },
    {
        title: "Halloween Movie - A Nightmare on Elm Street",
        url: "https://codepen.io/cbolson/full/ExqwbvY",
        img: "2024-56.webp",
        likes: 13,
        views: 656
    },
    {
        title: "Halloween Pumpkin",
        url: "https://codepen.io/cbolson/full/YzmGWMW",
        img: "2024-57.webp",
        likes: 16,
        views: 1365
    },
    {
        title: "F1 Drivers 2024 - circular gallery with thumbs",
        url: "https://codepen.io/cbolson/full/ExBZRpz",
        img: "2024-58.webp",
        likes: 29,
        views: 922
    },
    {
        title: "Why Not?",
        url: "https://codepen.io/cbolson/full/bGXXJPE",
        img: "2024-59.webp",
        likes: 13,
        views: 841
    },
    {
        title: "CSS only infinate marquee",
        url: "https://codepen.io/cbolson/full/NWVdqxW",
        img: "2024-60.webp",
        likes: 248,
        views: 4286
    },
    {
        title: "Happy Christmas!",
        url: "https://codepen.io/cbolson/full/MYgpNJR",
        img: "2024-61.webp",
        likes: 44,
        views: 1302
    },
    {
        title: "Stage Progress radio buttons",
        url: "https://codepen.io/cbolson/full/LYoymMN",
        img: "2024-62.webp",
        likes: 29,
        views: 633
    },
    {
        title: "Glassy Profile",
        url: "https://codepen.io/cbolson/full/wvbwLre",
        img: "2024-63.webp",
        likes: 276,
        views: 5270
    },
    {
        title: "Spinning Around",
        url: "https://codepen.io/cbolson/full/YPKZjVz",
        img: "2024-64.webp",
        likes: 73,
        views: 1712
    },{
        title : 'Notifications and Messages',
        url: 'https://codepen.io/cbolson/full/eYogdKQ',
        img: '2024-65.webp',
        likes: 143,
        views: 5578
    },
    {
        title : 'Simple switch with led indicator',
        url: 'https://codepen.io/cbolson/pen/qBeyKre',
        img: '2024-66.webp',
        likes: 36,
        views: 625
    },
    {
        title : 'Tree View - unlimited nested levels',
        url: 'https://codepen.io/cbolson/full/gOVrZpz',
        img: '2024-67.webp',
        likes: 57,
        views: 968
    },
    {
        title : 'How snowflakes are formed',
        url: 'https://codepen.io/cbolson/full/YPKwXXZ',
        img: '2024-68.webp',
        likes: 22,
        views: 1625
    },
    {
        title : 'The Twelve Days of Christmas',
        url: 'https://codepen.io/cbolson/full/KwPgEwx',
        img: '2024-69.webp',
        likes: 23,
        views: 925
    },
    {
        title : 'Happy 2025',
        url: 'https://codepen.io/cbolson/full/OPLXawr',
        img: '2024-70.webp',
        likes: 35,
        views: 828
    },
    {
        title : '2024 Rewind  - Top 60 most ❤️ pens',
        url: 'https://codepen.io/cbolson/full/ogvWOgN',
        img: '2024-71.webp',
        likes: 46,
        views: 1128
    },
    {
        title : 'Transparent buttons with angled corner borders',
        url: 'https://codepen.io/cbolson/full/RwmXKYv',
        img: '2024-72.webp',
        likes: 20,
        views: 1277
    },
    {
        title : 'Min Max Range Slider with Tooltips & Scale',
        url: 'https://codepen.io/cbolson/full/ExzKdjG',
        img: '2024-73.webp',
        likes: 35,
        views: 3127
    },
    {
        title : '100 Followers 👏',
        url: 'https://codepen.io/cbolson/full/WNBepzq',
        img: '2024-74.webp',
        likes: 14,
        views: 515
    },
    {
        title : 'Unveiling the Blur',
        url: 'https://codepen.io/cbolson/full/GRLVLgx',
        img: '2024-75.webp',
        likes: 74,
        views: 1761
    },
    {
        title : 'Hexagaonal  profiles',
        url: 'https://codepen.io/cbolson/full/YzMMBVW',
        img: '2024-76.webp',
        likes: 38,
        views: 1427
    },
    {
        title : 'E-Ticket',
        url: 'https://codepen.io/cbolson/full/JjVVPPP',
        img: '2024-77.webp',
        likes: 344,
        views: 4839
    },
    {
        title : 'Team Profiles rotation with pure CSS',
        url: 'https://codepen.io/cbolson/full/QWPYQBe',
        img: '2024-78.webp',
        likes: 25,
        views: 522
    },
    {
        title : 'Fluid Grid gallery v2',
        url: 'https://codepen.io/cbolson/full/abxQeeB',
        img: '2024-79.webp',
        likes: 25,
        views: 492
    }, {
        title : 'Thought bubble - Terrible dev joke 2',
        url: 'https://codepen.io/cbolson/full/QWPrYWO',
        img: '2024-80.webp',
        likes: 24,
        views: 995
    },
    {
        title : 'Speech bubble - Terrible dev joke',
        url: 'https://codepen.io/cbolson/full/gOyeEBN',
        img: '2024-81.webp',
        likes: 19,
        views: 1370
    },
    {
        title : 'Pricing Plans',
        url: 'https://codepen.io/cbolson/full/ZEZegQK',
        img: '2024-82.webp',
        likes: 23,
        views: 1013
    },
    {
        title : 'F1 Races 2025 countdown',
        url: 'https://codepen.io/cbolson/full/MWRKyPG',
        img: '2024-83.webp',
        likes: 30,
        views: 1553
    },

];

/*
  {
    title : '',
    url: '',
    img: '2024-50.webp',
    likes: 0,
    views: 0
  },
  */

// Sorting
function sortPens(pens, property) {
    return pens.sort((a, b) => b[property] - a[property]);
}
// selectors
const wrapper = document.getElementById("wrapper");

// Function to create an article
function createArticle({ title, url, img, description, likes, views }) {
    // each pen will be a link
    const article = document.createElement("a");
    article.href = url;
    article.className = "article";
    article.title = title;
    article.target = "_blank";
    article.description = description;
    article.dataset.likes = new Intl.NumberFormat().format(likes);
    article.dataset.views = new Intl.NumberFormat().format(views);
    //\01F441

    //const article = document.createElement('article');
    // inner div to allow for padding and to hide overflow
    const div = document.createElement("div");

    const imgElement = document.createElement("img");
    // imgElement.src = URL_IMG_BASE + img;
    imgElement.src = img;
    imgElement.alt = title;
    div.appendChild(imgElement);

    const titleEl = document.createElement("p");
    titleEl.innerHTML = `<span>${title}</span><span>open</span>`;
    div.appendChild(titleEl);

    //const data = document.createElement('p');
    //data.textContent = `likes ${likes} - Views: ${views}`;
    //article.append(data);

    article.append(div);
    return article;
}

let section;

// sort by likes or views
const sortedPens = sortPens([...PENS], "likes");
sortedPens.length= PENS_TO_DISPLAY;
let sectionCounter = 0;
sortedPens.forEach((pen, index) => {
    // create a new section for every 10 articles
    if (index % 10 === 0) {
        section = document.createElement("section");
        section.className = "gallery";
        section.style.setProperty("--i", sectionCounter);
        wrapper.appendChild(section);
        sectionCounter++;
    }

    // create and append the article to the current section
    const article = createArticle(pen);
    section.appendChild(article);
});
