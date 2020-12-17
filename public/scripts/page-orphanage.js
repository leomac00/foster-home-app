const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
//get values from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//create map
const mymap = L.map("mapid", options).setView([lat, lng], 13);

//add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//add marker
L.marker([lat, lng], { icon })
  .addTo(mymap)

// image gallery

function selectImage (event) {
    const button = event.currentTarget;
    
    //remover todas as classes .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    //selecionar img clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    
    //atualizar  container de img
    imageContainer.src = image.src
    

    //adicionar a classe .active para este botao
    button.classList.add('active')

}