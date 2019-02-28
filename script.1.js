$.getJSON('index.json', function (data) {
    let film = data.results;

    $.each(film, function (i, data) {
        $('#tabel').append('<tr><td>' + data.name + '</td><td>' + data.rotation_period + '</td><td>' + data.orbital_period + '</td><td>' + data.diameter + '</td><td>' + data.climate + '</td><td>' + data.gravity + '</td><td>' + data.terrain + '</td><td>' + data.surface_water + '</td><td>' + data.population + '</td></tr>');





    });
})


var kunci = document.getElementById('kolom');
var wadah = document.getElementById('container');


// buat pencarian
kunci.addEventListener('keyup', function () {

    // buat isinya
    var hidup = new XMLHttpRequest();

    hidup.onreadystatechange = function () {
        if (hidup.readyState == 4 && hidup.status == 200) {
            console.log(hidup.response);
        }
    }


    hidup.open('GET', 'index.text', true);
    hidup.send;
})