//create map
const mymap = L.map("mapid").setView([-23.0462184, -45.5833113, 13.39], 13);

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
});

let marker;

// create and add marker
mymap.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remove icon from map
    marker && mymap.removeLayer(marker); //se marker = True (existir) então faça mymap.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(mymap);

    // gets marker lat and lng value to HTML doc
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
});


// add photo field
function addPhotoField() {
    //pegar o container de gotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da ultima imagem adicionadas
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1]
        .cloneNode(true);

    //verificar se o campo está vazio, se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    // console.log(input);


    if (input.value == '') {
        return
    };

    //limpeza do campo
    input.value = '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

//remove photo field
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = '';
        return 
    }

    //deletar o campo
    span.parentNode.remove()
}

//Troca do sim e nao
function toggleSelect(event) {
    //retirar a calsse .active dos dois botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active')); // pode ser retirado os colchetes desta arrow function pois ela so tem uma linha e uma funcionalidade

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value
}

