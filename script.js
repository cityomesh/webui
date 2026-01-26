//script.js
const settingsMenuOptions = [
    { title: "Network", icon: "🌐" },
    { title: "Display", icon: "🖥️" },
    { title: "Account", icon: "👤" },
    { title: "About", icon: "ℹ️" },
    { title: "Updates", icon: "🔄" }
];
const ads = {
    ad1: ["images/ads/ad1_1.jpg", "images/ads/ad4_1.jpg", "images/ads/ad5_1.jpg"],
    ad2: ["images/ads/ad2_1.jpg", "images/ads/ad6_1.jpg", "images/ads/ad7_1.jpg"],
    ad3: ["images/ads/ad3_1.jpg", "images/ads/ad8_1.jpg", "images/ads/ad9_1.jpg"]
};

const centerIconsData = [
    { title: "Radio", img: "images/webpimg/Radio-Channels.webp", url: "" },
    { title: "LiveTV", img: "images/webpimg/Video-on-demand.webp", url: "http://103.189.178.123:4000/" },
    { title: "Settings", img: "images/webpimg/my-favourite-Apps.webp", url: "" },
    { title: "Account", img: "images/webpimg/my_Account_information.webp", url: "" },
    { title: "Favorite", img: "images/webpimg/Setup-Settings.webp", url: "" },
    { title: "Network", img: "images/webpimg/partners-local-channels.webp", url: "" },
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
    { title: "prime_video", img: "images/appstore/ottapps/prime_video.png", url: "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root/", description: "European cultural channel." },
    { title: "EtvWin", img: "images/appstore/ottapps/ETV_WIN.png", url: "https://www.etvwin.com/home", description: "Watch live shows and movies." },
    { title: "YouTubeKids", img: "images/appstore/ottapps/youtubekids.png", url: "https://www.youtubekids.com/watch?v=Gnn2Jd5WLso&list=PLBEJr1MBP_7npTFFnGJ-df7Hv8Hme9hSx", description: "Watch unlimited videos." },
    { title: "sonyTv", img: "images/appstore/ottapps/sony_liv.png", url: "https://www.sonyliv.com/", description: "Best entertainment videos." },
    { title: "me", img: "images/appstore/ottapps/me.png", url: "https://www.mebank.com.au/home/banking-on-the-go/me-bank-app/", description: "Check Network Status." },
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
let isSettingsOpen = false;
let settingsIndex = 0;

// --- TIME UPDATER ---
function updateDateTime() {
    const e = document.getElementById("time");
    if(!e) return;
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    e.textContent = now.toLocaleDateString('en-US', options) + " | " + now.toLocaleTimeString('en-US', { hour12:false });
}
setInterval(updateDateTime, 1000);

// --- RENDER UI ---
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

// --- FOCUS LOGIC ---
function setupFocus() {
    // Collect all navigatable elements
    focusableItems = Array.from(document.querySelectorAll('.logo-box, .icon-item, .app-icon'));
    updateFocus();
}

function updateFocus() {
    if (isAppOpen || isSettingsOpen) return;

    focusableItems.forEach(item => item.classList.remove('focused'));
    const activeItem = focusableItems[currentIndex];
    if (activeItem) {
        activeItem.classList.add('focused');
        activeItem.focus();
        
        const title = activeItem.getAttribute('data-title');
        const data = favoriteChannels.find(f => f.title === title) || centerIconsData.find(c => c.title === title);
        
        document.getElementById('infoTitle').innerText = title || "ULKA TV";
        document.getElementById('infoDesc').innerText = data?.description || "Press OK to Open";
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// --- REMOTE KEYBOARD CONTROLLER ---
document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which;

    // 1. BACK BUTTON (Exits Apps or Settings)
    if (keyCode === 8 || keyCode === 461 || keyCode === 27) { 
        event.preventDefault(); 
        closeEverything();
        return; 
    }

    // 2. IF SETTINGS MENU IS OPEN
    if (isSettingsOpen) {
        handleSettingsNavigation(keyCode);
        return;
    }

    // 3. IF APP (IFRAME) IS OPEN
    if (isAppOpen) return; 

    // 4. MAIN DASHBOARD NAVIGATION
    let rowLength = 5;
    const activeItem = focusableItems[currentIndex];
    if (activeItem && activeItem.classList.contains('app-icon')) rowLength = 10;

    switch (keyCode) {
        case 37: // Left
            if (currentIndex > 0) currentIndex--; 
            break;
        case 39: // Right
            if (currentIndex < focusableItems.length - 1) currentIndex++; 
            break;
        case 38: // Up
            if (currentIndex - rowLength >= 0) currentIndex -= rowLength; 
            break;
        case 40: // Down
            if (currentIndex + rowLength < focusableItems.length) currentIndex += rowLength; 
            break;
        case 13: // OK / Enter
            handleItemSelection();
            break;
    }
    updateFocus();
});

// --- SELECTION LOGIC ---
function handleItemSelection() {
    const activeItem = focusableItems[currentIndex];
    if (!activeItem) return;

    const title = activeItem.getAttribute('data-title');
    const url = activeItem.getAttribute('data-url');

    if (title === "Settings") {
        openSettings();
    } else if (url && url !== "") {
        openApp(url);
    }
}

// --- SETTINGS LOGIC ---
function openSettings() {
    const overlay = document.getElementById('settingsOverlay');
    const list = document.getElementById('settingsList');
    
    list.innerHTML = "";
    settingsMenuOptions.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'setting-option-item';
        div.innerHTML = `<span>${opt.icon}</span> ${opt.title}`;
        list.appendChild(div);
    });

    overlay.style.display = "flex";
    isSettingsOpen = true;
    settingsIndex = 0;
    updateSettingsFocus();
}

function handleSettingsNavigation(keyCode) {
    const items = document.querySelectorAll('.setting-option-item');
    if (keyCode === 40 && settingsIndex < items.length - 1) settingsIndex++; // Down
    if (keyCode === 38 && settingsIndex > 0) settingsIndex--; // Up
    if (keyCode === 13) {
        console.log("Selected Setting: " + settingsMenuOptions[settingsIndex].title);
        // Add specific setting action here
    }
    updateSettingsFocus();
}

function updateSettingsFocus() {
    const items = document.querySelectorAll('.setting-option-item');
    items.forEach(i => i.style.background = "#333");
    if (items[settingsIndex]) {
        items[settingsIndex].style.background = "red"; // Highlighting selected setting
        items[settingsIndex].focus();
    }
}

// --- APP (IFRAME) LOGIC ---
function openApp(url) {
    const layer = document.getElementById('appLayer');
    const iframe = document.getElementById('appIframe');
    iframe.src = url;
    layer.style.display = "block";
    isAppOpen = true;
}

function closeEverything() {
    document.getElementById('appLayer').style.display = "none";
    document.getElementById('settingsOverlay').style.display = "none";
    document.getElementById('appIframe').src = "";
    isAppOpen = false;
    isSettingsOpen = false;
    
    // Resume Dashboard Focus
    setTimeout(() => { setupFocus(); updateFocus(); }, 200);
}

// --- SCALE UI & INITIALIZE ---
function scaleTVUI() {
    const baseW = 1800, baseH = 1000;
    const scale = Math.min(window.innerWidth/baseW, window.innerHeight/baseH);
    const tvRoot = document.getElementById("tv-root");
    tvRoot.style.transform = `translate(${(window.innerWidth - baseW*scale)/2}px, ${(window.innerHeight - baseH*scale)/2}px) scale(${scale})`;
}

window.addEventListener("resize", scaleTVUI);
window.addEventListener("load", () => {
    renderUI();
    updateDateTime();
    scaleTVUI();
    setTimeout(setupFocus, 500);
});
