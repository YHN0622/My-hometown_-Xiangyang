const USC = [34.0224, -118.2853];
const XIANGYANG = [32.0089, 112.1224];

const introMap = L.map("introMap").setView(XIANGYANG, 11);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(introMap);

L.marker(XIANGYANG)
    .addTo(introMap)
    .bindPopup("My Hometown: Xiangyang")
    .openPopup();

L.marker(USC)
    .addTo(introMap)
    .bindPopup("University of Southern California");

const xiangyangButton = document.getElementById("xiangyangBtn");
const uscButton = document.getElementById("uscBtn");
const mapMessage = document.getElementById("mapMessage");

xiangyangButton.addEventListener("click", function () {
    introMap.flyTo(XIANGYANG, 11);
    mapMessage.textContent = "Flying to my hometown: Xiangyang.";
});

uscButton.addEventListener("click", function () {
    introMap.flyTo(USC, 14);
    mapMessage.textContent = "Flying back to USC.";
});


const GULONGZHONG = [31.9910, 112.0308];
const TANG_CITY = [31.9908, 112.1765];
const ZHAOMING_TERRACE = [32.0204, 112.1453];

const attractionMap = L.map("map").setView(XIANGYANG, 12);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(attractionMap);

L.marker(GULONGZHONG)
    .addTo(attractionMap)
    .bindPopup("Gulongzhong Scenic Area");

L.marker(TANG_CITY)
    .addTo(attractionMap)
    .bindPopup("Xiangyang Tang City");

L.marker(ZHAOMING_TERRACE)
    .addTo(attractionMap)
    .bindPopup("Zhaoming Terrace");

const gulongzhongButton =
    document.getElementById("gulongzhongBtn");

const tangchengButton =
    document.getElementById("tangchengBtn");

const zhaomingtaiButton =
    document.getElementById("zhaomingtaiBtn");

const statusMessage =
    document.getElementById("status");

gulongzhongButton.addEventListener("click", function () {
    attractionMap.flyTo(GULONGZHONG, 15);
    statusMessage.textContent =
        "Flying to Gulongzhong Scenic Area.";
});

tangchengButton.addEventListener("click", function () {
    attractionMap.flyTo(TANG_CITY, 15);
    statusMessage.textContent =
        "Flying to Xiangyang Tang City.";
});

zhaomingtaiButton.addEventListener("click", function () {
    attractionMap.flyTo(ZHAOMING_TERRACE, 16);
    statusMessage.textContent =
        "Flying to Zhaoming Terrace.";
});