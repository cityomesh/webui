// //script.js

// const ads = {
//     ad1: ["images/ads/ad1_1.jpg", "images/ads/ad4_1.jpg", "images/ads/ad5_1.jpg"],
//     ad2: ["images/ads/ad2_1.jpg", "images/ads/ad6_1.jpg", "images/ads/ad7_1.jpg"],
//     ad3: ["images/ads/ad3_1.jpg", "images/ads/ad8_1.jpg", "images/ads/ad9_1.jpg"]
// };

// const centerIconsData = [
//     { title: "Radio", img: "images/webpimg/Radio-Channels.webp", url: "" },
//     { title: "LiveTV", img: "images/webpimg/Video-on-demand.webp", url: "http://103.189.178.123:4000/" },
//     { title: "Settings", img: "images/webpimg/my-favourite-Apps.webp", url: "" },
//     { title: "Account", img: "images/webpimg/my_Account_information.webp", url: "" },
//     { title: "Favorite", img: "images/webpimg/Setup-Settings.webp", url: "" },
//     { title: "Network", img: "images/webpimg/partners-local-channels.webp", url: "http://103.189.178.123/" },
//     { title: "Payments", img: "images/webpimg/News-Clips.webp", url: "" },
//     { title: "Favorite", img: "images/webpimg/kids-corner.webp", url: "" },
//     { title: "Network", img: "images/webpimg/ShoppingCard.webp", url: "" },
//     { title: "Payments", img: "images/webpimg/Network_Testing_diagnostice.webp", url: "http://103.189.178.123/" }
// ];

// let favoriteChannels = [
//     { title: "YouTube", img: "images/appstore/ottapps/youtube.png", url: "https://www.youtube.com/tv", description: "Watch unlimited videos." },
//     { title: "jiohotstar", img: "images/appstore/ottapps/jiohotstar.png", url: "https://www.hotstar.com/in/home", description: "Best entertainment videos." },
//     { title: "aha", img: "images/appstore/ottapps/aha.png", url: "https://www.aha.video/webepisode/chef-mantra-s05-ep6/", description: "Check Network Status." },
//     { title: "netflix", img: "images/appstore/ottapps/netflix.png", url: "https://www.netflix.com/in/login", description: "Entertainment and sports." },
//     { title: "prime_video", img: "images/appstore/ottapps/prime_video.png", url: "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root/", description: "European cultural channel." },
//     { title: "EtvWin", img: "images/appstore/ottapps/ETV_WIN.png", url: "https://www.etvwin.com/home", description: "Watch live shows and movies." },
//     { title: "YouTubeKids", img: "images/appstore/ottapps/youtubekids.png", url: "https://www.youtubekids.com/watch?v=Gnn2Jd5WLso&list=PLBEJr1MBP_7npTFFnGJ-df7Hv8Hme9hSx", description: "Watch unlimited videos." },
//     { title: "sonyTv", img: "images/appstore/ottapps/sony_liv.png", url: "https://www.sonyliv.com/", description: "Best entertainment videos." },
//     { title: "me", img: "images/appstore/ottapps/me.png", url: "https://www.mebank.com.au/home/banking-on-the-go/me-bank-app/", description: "Check Network Status." },
//     { title: "hungama", img: "images/appstore/ottapps/hungama.png", url: "https://www.hungama.com/", description: "Entertainment and sports." },
//     { title: "hoichoi", img: "images/appstore/ottapps/hoichoi.png", url: "https://www.hoichoi.tv/", description: "European cultural channel." },
//     { title: "sunnxt", img: "images/appstore/ottapps/sunnxt.png", url: "https://www.sunnxt.com/", description: "Watch live shows and movies." },
//     { title: "AAO_NXT", img: "images/appstore/ottapps/AAO_NXT.png", url: "https://aaonxt.com/", description: "Watch unlimited videos." },
//     { title: "STAGE", img: "images/appstore/ottapps/STAGE.png", url: "https://www.stage.in/", description: "Best entertainment videos." },
//     { title: "epicon", img: "images/appstore/ottapps/EPIC_ON.png", url: "https://epicon.in/", description: "Check Network Status." },
//     { title: "DOCUBAY", img: "images/appstore/ottapps/DOCUBAY.png", url: "https://www.docubay.com/", description: "Entertainment and sports." },
//     { title: "EROS_NOW", img: "images/appstore/ottapps/EROS_NOW.png", url: "https://erosnow.com/", description: "European cultural channel." },
//     { title: "Fancode", img: "images/appstore/ottapps/Fancode.png", url: "https://www.fancode.com/", description: "Watch live shows and movies." },
//     { title: "Zee5", img: "images/appstore/ottapps/ZEE5.png", url: "https://www.zee5.com/", description: "European cultural channel." },
//     { title: "discovery_plus", img: "images/appstore/ottapps/discovery_plus.png", url: "https://discoveryplus.in/", description: "Watch live shows and movies." }
// ];

// let currentIndex = 0;
// let focusableItems = [];
// let isKeyboardVisible = false;
// let isAppOpen = false;

// // --- TIME + DATE + YEAR ---
// function updateDateTime() {
//     const e = document.getElementById("time");
//     const now = new Date();
//     const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
//     e.textContent = now.toLocaleDateString('en-US', options) + " | " + now.toLocaleTimeString('en-US', { hour12:false });
// }
// setInterval(updateDateTime, 1000);

// // --- UI Rendering ---
// function renderUI() {
//     const grid = document.getElementById('mainIconGrid');
//     grid.innerHTML = "";
//     centerIconsData.forEach(item => {
//         const div = document.createElement('div');
//         div.className = 'icon-item';
//         div.tabIndex = 0; 
//         div.setAttribute('data-url', item.url);
//         div.setAttribute('data-title', item.title);
//         div.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
//         grid.appendChild(div);
//     });

//     const favGrid = document.getElementById('favAppGrid');
//     favGrid.innerHTML = "";
//     favoriteChannels.forEach(app => {
//         const div = document.createElement('div');
//         div.className = 'app-icon';
//         div.tabIndex = 0;
//         div.setAttribute('data-url', app.url);
//         div.setAttribute('data-title', app.title);
//         div.innerHTML = `<img src="${app.img}" alt="${app.title}">`;
//         favGrid.appendChild(div);
//     });
// }

// // --- Focus & Navigation ---
// function setupFocus() {
//     focusableItems = Array.from(document.querySelectorAll('.logo-box, .icon-item, .app-icon'));
//     updateFocus();
// }
// function updateFocus() {
//     if (isKeyboardVisible) return;
//     focusableItems.forEach(item => item.classList.remove('focused'));
//     const activeItem = focusableItems[currentIndex];
//     if (activeItem) {
//         activeItem.classList.add('focused');
//         activeItem.focus();
//         const title = activeItem.getAttribute('data-title');
//         const data = favoriteChannels.find(f => f.title === title) || centerIconsData.find(c => c.title === title);
//         document.getElementById('infoTitle').innerText = title || "ULKA TV";
//         document.getElementById('infoDesc').innerText = data ? data.description : "Select to open content.";
//         activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
// }

// document.addEventListener('keydown', (event) => {
//     const keyCode = event.keyCode || event.which;
//     if (isAppOpen && (keyCode === 8 || keyCode === 461)) { event.preventDefault(); closeApp(); return; }
//     if (isAppOpen) return;

//     let rowLength = 5;
//     const activeItem = focusableItems[currentIndex];
//     if (activeItem && activeItem.classList.contains('app-icon')) rowLength = 10;

//     switch (keyCode) {
//         case 39: if (currentIndex < focusableItems.length - 1) currentIndex++; break;
//         case 37: if (currentIndex > 0) currentIndex--; break;
//         case 40: if (currentIndex + rowLength < focusableItems.length) currentIndex += rowLength; break;
//         case 38: if (currentIndex - rowLength >= 0) currentIndex -= rowLength; break;
//         case 13: handleItemClick(); break;
//     }
//     updateFocus();
// });

// function handleItemClick() {
//     const activeItem = focusableItems[currentIndex];
//     if (!activeItem) return;

//     const title = activeItem.getAttribute('data-title');
//     const url = activeItem.getAttribute('data-url');

//     // Check if Settings is clicked
//     if (title === "Settings") {
//         showSettingsMenu();
//     } else if (url) {
//         window.location.href = url;
//     }
// }

// // --- Settings Menu Logic ---
// function showSettingsMenu() {
//     const settingsOverlay = document.getElementById('settingsOverlay');
//     const settingsList = document.getElementById('settingsList');
    
//     settingsList.innerHTML = ""; // Clear old list
//     settingsMenuOptions.forEach(opt => {
//         const div = document.createElement('div');
//         div.className = 'setting-option-item';
//         div.innerHTML = `<span>${opt.icon}</span> ${opt.title}`;
//         settingsList.appendChild(div);
//     });

//     settingsOverlay.style.display = "flex";
//     isAppOpen = true; // To prevent background navigation
// }

// function closeApp() {
//     const layer = document.getElementById('appLayer');
//     const settingsOverlay = document.getElementById('settingsOverlay');
    
//     if (layer) layer.style.display = "none";
//     if (settingsOverlay) settingsOverlay.style.display = "none";
    
//     isAppOpen = false;
//     setTimeout(() => { setupFocus(); updateFocus(); }, 200);
// }

// // --- Ads Rotation ---
// let adIndices = { ad1:0, ad2:0, ad3:0 };
// setInterval(() => {
//     ['ad1','ad2','ad3'].forEach((key,i)=>{
//         adIndices[key]=(adIndices[key]+1)%ads[key].length;
//         const img=document.getElementById(`ad-img-${i+1}`);
//         if(img){img.style.opacity=0; setTimeout(()=>{img.src=ads[key][adIndices[key]]; img.style.opacity=1;},500);}
//     });
// },4000);

// // --- Scale & Center TV UI ---
// function scaleTVUI() {
//     const baseW = 1800, baseH = 1000;  // updated
//     const screenW = window.innerWidth, screenH = window.innerHeight;
//     const scale = Math.min(screenW/baseW, screenH/baseH);
//     const offsetX = (screenW - baseW*scale)/2;
//     const offsetY = (screenH - baseH*scale)/2;
//     const tvRoot = document.getElementById("tv-root");
//     tvRoot.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
// }


// window.addEventListener("resize", scaleTVUI);
// window.addEventListener("load", () => {
//     renderUI();
//     updateDateTime();
//     setTimeout(setupFocus,500);
//     scaleTVUI();
// });


// Settings Menu Data
const settingsMenuOptions = [
    { title: "Network", icon: "🌐" },
    { title: "Display", icon: "🖥️" },
    { title: "Account", icon: "👤" },
    { title: "About", icon: "ℹ️" },
    { title: "Updates", icon: "🔄" }
];

const ads = {
    ad1: ["images/ads/ad1_1.jpg", "images/ads/ad5_1.jpg", "images/ads/week.jpg"],
    ad2: ["images/ads/ad2_1.jpg", "images/ads/ad6_1.jpg", "images/ads/ad7_1.jpg", "images/ads/bagavatam.webp"],
    ad3: ["images/ads/mas.webp", "images/ads/ad3_1.jpg", "images/ads/ad8_1.jpg", "images/ads/ad9_1.jpg"]
};

const centerIconsData = [
    { title: "Radio", img: "images/webpimg/Radio-Channels.webp", url: "" },
    { title: "LiveTV", img: "images/webpimg/Video-on-demand.webp", url: "http://103.189.178.123:4000/" },
    { title: "Settings", img: "images/webpimg/my-favourite-Apps.webp", url: "" },
    { title: "Account", img: "images/webpimg/my_Account_information.webp", url: "" },
    { title: "Favorite", img: "images/webpimg/Setup-Settings.webp", url: "" },
    { title: "Network", img: "images/webpimg/partners-local-channels.webp", url: "http://103.189.178.123/" },
    { title: "Payments", img: "images/webpimg/News-Clips.webp", url: "" },
    { title: "Favorite", img: "images/webpimg/kids-corner.webp", url: "" },
    { title: "Network", img: "images/webpimg/ShoppingCard.webp", url: "" },
    { title: "Payments", img: "images/webpimg/Network_Testing_diagnostice.webp", url: "http://103.189.178.123/" }
];

let favoriteChannels = [
    { title: "YouTube", img: "images/appstore/ottapps/youtube.png", url: "https://www.youtube.com/tv", description: "Watch unlimited videos." },
    { title: "jiohotstar", img: "images/appstore/ottapps/jiohotstar.png", url: "https://www.hotstar.com/in/home", description: "Best entertainment videos." },
    { title: "aha", img: "images/appstore/ottapps/aha.png", url: "https://www.aha.video/webepisode/chef-mantra-s05-ep6/", description: "Check Network Status." },
    { title: "netflix", img: "images/appstore/ottapps/netflix.png", url: "https://www.netflix.com/in/login", description: "Entertainment and sports." },
    { title: "prime_video", img: "images/appstore/ottapps/prime_video.png", url: "https://www.primevideo.com/offers/nonprimehomepage/", description: "European cultural channel." },
    { title: "EtvWin", img: "images/appstore/ottapps/ETV_WIN.png", url: "https://www.etvwin.com/home", description: "Watch live shows and movies." },
    { title: "YouTubeKids", img: "images/appstore/ottapps/youtubekids.png", url: "https://www.youtubekids.com/", description: "Watch unlimited videos." },
    { title: "sonyTv", img: "images/appstore/ottapps/sony_liv.png", url: "https://www.sonyliv.com/", description: "Best entertainment videos." },
    { title: "me", img: "images/appstore/ottapps/me.png", url: "https://www.mebank.com.au/", description: "Check Network Status." },
    { title: "hungama", img: "images/appstore/ottapps/hungama.png", url: "https://www.hungama.com/", description: "Entertainment and sports." },
    { title: "hoichoi", img: "images/appstore/ottapps/hoichoi.png", url: "https://www.hoichoi.tv/", description: "European cultural channel." },
    { title: "sunnxt", img: "images/appstore/ottapps/sunnxt.png", url: "https://www.sunnxt.com/", description: "Watch live shows and movies." },
    { title: "AAO_NXT", img: "images/appstore/ottapps/AAO_NXT.png", url: "https://aaonxt.com/", description: "Watch unlimited videos." },
    { title: "STAGE", img: "images/appstore/ottapps/STAGE.png", url: "https://www.stage.in/", description: "Best entertainment videos." },
    { title: "epicon", img: "images/appstore/ottapps/EPIC_ON.png", url: "https://epicon.in/", description: "Check Network Status." },
    { title: "DOCUBAY", img: "images/appstore/ottapps/DOCUBAY.png", url: "https://www.docubay.com/", description: "Entertainment and sports." },
    { title: "EROS_NOW", img: "images/appstore/ottapps/EROS_NOW.png", url: "https://erosnow.com/", description: "European cultural channel." },
    { title: "Fancode", img: "images/appstore/ottapps/Fancode.png", url: "https://www.fancode.com/", description: "Watch live shows and movies." },
    { title: "Zee5", img: "images/appstore/ottapps/ZEE5.png", url: "https://www.zee5.com/", description: "European cultural channel." },
    { title: "discovery_plus", img: "images/appstore/ottapps/discovery_plus.png", url: "https://discoveryplus.in/", description: "Watch live shows and movies." }
];

let currentIndex = 0;
let focusableItems = [];
let isAppOpen = false;

// Time Update
function updateDateTime() {
    const e = document.getElementById("time");
    if (!e) return;
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    e.textContent = now.toLocaleDateString('en-US', options) + " | " + now.toLocaleTimeString('en-US', { hour12:false });
}
setInterval(updateDateTime, 1000);

// UI Rendering
function renderUI() {
    const grid = document.getElementById('mainIconGrid');
    grid.innerHTML = "";
    centerIconsData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'icon-item';
        div.tabIndex = 0; 
        div.setAttribute('data-url', item.url);
        div.setAttribute('data-title', item.title);
        div.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
        grid.appendChild(div);
    });

    const favGrid = document.getElementById('favAppGrid');
    favGrid.innerHTML = "";
    favoriteChannels.forEach(app => {
        const div = document.createElement('div');
        div.className = 'app-icon';
        div.tabIndex = 0;
        div.setAttribute('data-url', app.url);
        div.setAttribute('data-title', app.title);
        div.innerHTML = `<img src="${app.img}" alt="${app.title}">`;
        favGrid.appendChild(div);
    });
}

function setupFocus() {
    focusableItems = Array.from(document.querySelectorAll('.logo-box, .icon-item, .app-icon'));
    updateFocus();
}

function updateFocus() {
    if (isAppOpen) return;
    
    focusableItems.forEach(item => item.classList.remove('focused'));
    
    const activeItem = focusableItems[currentIndex];
    if (activeItem) {
        activeItem.classList.add('focused');
        activeItem.focus();
        
        const title = activeItem.getAttribute('data-title');
        const infoTitleElem = document.getElementById('infoTitle');
        if (infoTitleElem) infoTitleElem.innerText = title || "ULKA TV";
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Remote Control Logic
document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;
    if (isAppOpen && (keyCode === 8 || keyCode === 461)) { 
        event.preventDefault(); closeApp(); return; 
    }
    if (isAppOpen) return;

    switch (keyCode) {
        case 39: // Right
            if (currentIndex < focusableItems.length - 1) currentIndex++; break;
        case 37: // Left
            if (currentIndex > 0) currentIndex--; break;
        case 40: // Down
            if (currentIndex === 0) {
                currentIndex = 11; // Logo to YouTube
            } else if (currentIndex >= 1 && currentIndex <= 5) {
                currentIndex += 5; // Row 1 icons to Row 2
            } else if (currentIndex >= 6 && currentIndex <= 10) {
                currentIndex = 11 + (currentIndex - 6) * 2; 
            } else if (currentIndex >= 11 && currentIndex <= 20) {
                currentIndex += 10; // Fav Apps Row 1 to Row 2
            }
            break;
        case 38: // Up
            if (currentIndex >= 11 && currentIndex <= 20) {
                // YouTube row nundi neruga ULKA TV Logo ki
                currentIndex = 0; 
            } else if (currentIndex >= 21) {
                currentIndex -= 10; // Fav Row 2 to Row 1
            } else if (currentIndex >= 6 && currentIndex <= 10) {
                currentIndex -= 5; // Dashboard Row 2 to Row 1
            } else if (currentIndex >= 1 && currentIndex <= 5) {
                currentIndex = 0; // Dashboard Row 1 to Logo
            }
            break;
        case 13: // Enter
            handleItemClick(); break;
    }
    updateFocus();
});

function handleItemClick() {
    const activeItem = focusableItems[currentIndex];
    if (!activeItem) return;
    const title = activeItem.getAttribute('data-title');
    const url = activeItem.getAttribute('data-url');
    if (title === "Settings") {
        showSettingsMenu();
    } else if (url) {
        window.location.href = url;
    }
}

function showSettingsMenu() {
    const settingsOverlay = document.getElementById('settingsOverlay');
    const settingsList = document.getElementById('settingsList');
    if (!settingsOverlay) return;
    settingsList.innerHTML = ""; 
    settingsMenuOptions.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'setting-option-item';
        div.innerHTML = `<span>${opt.icon}</span> ${opt.title}`;
        settingsList.appendChild(div);
    });
    settingsOverlay.style.display = "flex";
    isAppOpen = true; 
}

function closeApp() {
    document.getElementById('settingsOverlay').style.display = "none";
    isAppOpen = false;
    setTimeout(updateFocus, 200);
}

// Ads Rotation
let adIndices = { ad1:0, ad2:0, ad3:0 };
setInterval(() => {
    ['ad1','ad2','ad3'].forEach((key,i)=>{
        adIndices[key]=(adIndices[key]+1)%ads[key].length;
        const img=document.getElementById(`ad-img-${i+1}`);
        if(img){img.style.opacity=0; setTimeout(()=>{img.src=ads[key][adIndices[key]]; img.style.opacity=1;},500);}
    });
},4000);

// script.js update
function scaleTVUI() {
    const baseW = 1920; 
    const baseH = 1080;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    
    const scale = Math.min(screenW / baseW, screenH / baseH);
    const tvRoot = document.getElementById("tv-root");
    
    if (tvRoot) {
        tvRoot.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
}

window.addEventListener("resize", scaleTVUI);
window.addEventListener("load", () => {
    renderUI();
    updateDateTime();
    setTimeout(setupFocus, 500);
    scaleTVUI();
});

