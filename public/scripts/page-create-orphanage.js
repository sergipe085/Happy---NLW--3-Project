//criar o mapa
const map = L.map('mapid').setView([-3.776416,-38.5335929], 13);

//criar e adicionar o tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
}).addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng; 

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker);

    marker = L.marker([lat, lng], { icon }).addTo(map);
})

//adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector("#images");

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload");

    //realizar o clone da ultima imagem adicionada
    const newFieldConatiner = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se o campo esta vazio se sim nao adicionar ao container de imagens
    const input = newFieldConatiner.children[0];
    if (input.value == "") {
        return;
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldConatiner);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-upload");

    if (fieldsContainer.length <= 1)
    {
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove("active");
    })

    const button = event.currentTarget;
    button.classList.add("active");

    const input = document.querySelector('[name = "open_on_weekends"]');
    input.value = Number(button.dataset.value);
    console.log(input.value)
}

function validate(event) {


    const inputLat = document.querySelector('.inputLat');
    const inputLng = document.querySelector('.inputLng');

    if (inputLat.value == "" || inputLng.value == "") {
        event.preventDefault();
        alert('Escolha o local do orfanato no mapa!')
    }
}

