const artistsData = {
  santagrifa: {
    name: "La Santa Grifa",
    genre: "Género: Reggae Rap",
    color: "#808BF6",
    img: "lsg1.jpg",
    videos: [{title: "Regresen el Tiempo", url: "video_ret.mp4"}],
    audios: [{title: "De Nube en Nube", artist: "La Santa Grifa", src: "music/dnen.MPEG"}]
  },
  
  ivancornejo: {
    name: "Iván Cornejo",
    genre: "Género: Sierreño",
    color: "#FFB800",
    img: "ivan1.jpg",
    videos: [{title: "Está Dañada", url: "video_dañado.mp4"}],
    audios: [{title: "Está Dañada", artist: "Iván Cornejo", src: "music/dañado.MPEG"}]
  },

  kevinkaarl: {
    name: "Kevin Kaarl",
    genre: "Género: Indie",
    color: "#00CFFF",
    img: "kevin1.jpg",
    videos: [{title: "Y esta bien", url: "video_yeb.mp4"}],
    audios: [{title: "Me va a costar", artist: "Kevin Kaarl", src: "music/mvac.MPEG"}]
  },

  sobresdylan: {
    name: "Sobresdylan",
    genre: "Género: Rock",
    color: "#FF3D3D",
    img: "sobres1.jpg",
    videos: [{title: "Insomaniaco", url: "video_insomaniaco.mp4"}],
    audios: [{title: "Insomaniaco", artist: "Sobresdylan", src: "music/insomaniaco.MPEG"}]
  },

  monlaferte: {
    name: "Mon Laferte",
    genre: "Género: Bolero/Pop",
    color: "#FF00A8",
    img: "mon1.jpg",
    videos: [{title: "Mi one", url: "video_myone.mp4"}],
    audios: [{title: "Flako", artist: "Mon Laferte", src: "music/flako.MPEG"}]
  },

  charlesans: {
    name: "Charles Ans",
    genre: "Género: Rap",
    color: "#00FF88",
    img: "charles1.jpg",
    videos: [{title: "Loquera", url: "video_loquera.mp4"}],
    audios: [{title: "Mis ojos no podian ver", artist: "Charles Ans", src: "music/misojos.MPEG"}]
  }
};

let currentAudio = null; 

function showArtist(artistKey) { 
    const artist = artistsData[artistKey]; 
    document.getElementById('artist-title').textContent = artist.name; 
    document.getElementById('artist-genre').textContent = artist.genre; 
    document.getElementById('artist-img').src = artist.img; 
    
    let html = `<h3 style="color:${artist.color}">Canciones</h3>`; 
    artist.audios.forEach(a => { 
        html += `<div class="song-card" onclick="playAudio('${a.src}', '${a.title}', '${a.artist}', '${artist.img}')">
                    <img src="${artist.img}" class="song-cover">
                    <div>
                        <h3>${a.title}</h3>
                        <p>${a.artist}</p>
                    </div>
                    <button>▶️</button>
                 </div>`;
    });
    html += `<h3 style="color:${artist.color}; margin-top:30px">Videos</h3>`;
    artist.videos.forEach(v => { 
        html += `<div class="video-card"><video src="${v.url}" controls width="100%"></video><p>${v.title}</p></div>`; 
    }); 
    document.getElementById('artist-content').innerHTML = html; 
}

function playAudio(src, title, artist, img) { 
    const player = document.getElementById('audioPlayer'); 
    player.src = src; 
    player.play(); 
    
    // ESTO ES LO QUE FALTABA - ACTUALIZAR TU BARRA DE ABAJO
    document.getElementById('player-song').textContent = title; 
    document.getElementById('player-artist').textContent = artist; 
    document.getElementById('player-img').src = img; 
    document.getElementById('playPauseBtn').textContent = '⏸️';
    
    currentAudio = player; 
}

function togglePlay() { 
    const player = document.getElementById('audioPlayer');
    const btn = document.getElementById('playPauseBtn');
    
    if(player.paused){ 
        player.play(); 
        btn.textContent = '⏸️'; 
    } else { 
        player.pause(); 
        btn.textContent = '▶️'; 
    } 
}
// ========== PARTE 2: FORMULARIO ==========
const form = document.getElementById('miFormulario');
const btnValidar = document.getElementById('btnValidar');
const mensajeFinal = document.getElementById('mensajeFinal');

// Regex - Ahora acepta todo en mayúsculas
const regexNombre = /^[A-ZÁÉÍÓÚÑ\s]+$/;
const regexEdad = /^\d{1,3}$/;
const regexTelefono = /^\d{10}$/;
const regexCuenta = /^\d{16}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para convertir a mayúsculas mientras escribe
function aMayusculas(e) {
    e.target.value = e.target.value.toUpperCase();
}

// Función general para validar
function validar(input, regex, nombreError) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    const valor = input.value.trim();
    let esValido = true;
    let causa = "";

    if (valor === "") {
        causa = "El campo no puede estar vacío.";
        esValido = false;
    } else if (!regex.test(valor)) {
        if(input.id === "nombre" || input.id.includes("apellido")) causa = "Solo letras y espacios.";
        if(input.id === "edad") causa = "Solo números, máximo 3 dígitos.";
        if(input.id === "telefono") causa = "Deben ser exactamente 10 dígitos numéricos.";
        if(input.id === "cuenta") causa = "Deben ser exactamente 16 dígitos numéricos.";
        if(input.id === "email") causa = "Debe tener formato: usuario@dominio.com";
        esValido = false;
        // VALIDAR FECHA
const dia = document.getElementById('diaNac');
const mes = document.getElementById('mesNac');
const anio = document.getElementById('anioNac');
let v7 = true;

// Creamos un regex para solo números
const regexFecha = /^[0-9]+$/;

const v7_dia = validar(dia, regexFecha, "Día");
const v7_mes = validar(mes, regexFecha, "Mes"); 
const v7_anio = validar(anio, regexFecha, "Año");

if(v7_dia && v7_mes && v7_anio){
    // Si no están vacíos, validamos que sea una fecha real
    if(dia.value < 1 || dia.value > 31 || mes.value < 1 || mes.value > 12 || anio.value < 1900 || anio.value > 2008){
        document.getElementById('error-fechaNac').textContent = "Fecha incorrecta";
        document.getElementById('error-fechaNac').classList.add('show');
        dia.classList.add('error-input');
        mes.classList.add('error-input');
        anio.classList.add('error-input');
        v7 = false;
    } else {
        document.getElementById('error-fechaNac').textContent = "";
        document.getElementById('error-fechaNac').classList.remove('show');
        v7 = true;
    }
} else {
    v7 = false;
}
    }

    if (!esValido) {
        input.classList.add('error-input');
        errorSpan.textContent = `${nombreError}: ${causa}`;
        errorSpan.classList.add('show');
    } else {
        input.classList.remove('error-input');
        errorSpan.classList.remove('show');
    }
    return esValido;
}

// EVENTOS: Convertir a mayúsculas + Validar
document.getElementById('nombre').addEventListener('input', (e) => { 
    aMayusculas(e); 
    e.target.value = e.target.value.replace(/[^A-ZÁÉÍÓÚÑ\s]/g, ''); 
});
document.getElementById('nombre').addEventListener('blur', (e) => validar(e.target, regexNombre, "Nombre incorrecto"));

document.getElementById('apellidoP').addEventListener('input', (e) => { 
    aMayusculas(e); 
    e.target.value = e.target.value.replace(/[^A-ZÁÉÍÓÚÑ\s]/g, ''); 
});
document.getElementById('apellidoP').addEventListener('blur', (e) => validar(e.target, regexNombre, "Apellido incorrecto"));

document.getElementById('apellidoM').addEventListener('input', (e) => { 
    aMayusculas(e); 
    e.target.value = e.target.value.replace(/[^A-ZÁÉÍÓÚÑ\s]/g, ''); 
});
document.getElementById('apellidoM').addEventListener('blur', (e) => validar(e.target, regexNombre, "Apellido incorrecto"));

document.getElementById('edad').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, ''); });
document.getElementById('edad').addEventListener('blur', (e) => validar(e.target, regexEdad, "Edad incorrecta"));

document.addEventListener('DOMContentLoaded', function() {
    const dia = document.getElementById('diaNac');
    const mes = document.getElementById('mesNac');
    const anio = document.getElementById('anioNac');

    function ajustarDias() {
        let maxDias = 31;
        const mesVal = parseInt(mesNac.value);
        if(mesVal === 2){ // Febrero
            maxDias = 28;
        } else if([4,6,9,11].includes(mesVal)){ // Abril, Junio, Sep, Nov
            maxDias = 30;
        }
        
        dia.max = maxDias;
        if(parseInt(dia.value) > maxDias){
            dia.value = maxDias; // Si tenías 31 y cambias a febrero, se hace 28
        }
    }

    mes.addEventListener('change', ajustarDias);
    anio.addEventListener('change', ajustarDias); // Por si luego metemos años bisiestos
});

document.getElementById('telefono').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, ''); });
document.getElementById('telefono').addEventListener('blur', (e) => validar(e.target, regexTelefono, "Número incorrecto"));

document.getElementById('cuenta').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, ''); });
document.getElementById('cuenta').addEventListener('blur', (e) => validar(e.target, regexCuenta, "Número de cuenta incorrecto"));


document.getElementById('email').addEventListener('blur', (e) => validar(e.target, regexEmail, "Email incorrecto"));

// Validar al dar click al botón
btnValidar.addEventListener('click', () => {
    const v1 = validar(document.getElementById('nombre'), regexNombre, "Nombre incorrecto");
    const v2 = validar(document.getElementById('apellidoP'), regexNombre, "Apellido incorrecto");
    const v3 = validar(document.getElementById('apellidoM'), regexNombre, "Apellido incorrecto");
    const v4 = validar(document.getElementById('edad'), regexEdad, "Edad incorrecta");
    const v5 = validar(document.getElementById('telefono'), regexTelefono, "Número incorrecto");
    const v6 = validar(document.getElementById('cuenta'), regexCuenta, "Número de cuenta incorrecto");
    const v7 = validar(document.getElementById('email'), regexEmail, "Email incorrecto");
    


    if (v1 && v2 && v3 && v4 && v5 && v6 && v7) {
        mensajeFinal.textContent = "Activaciòn aprobada";
        mensajeFinal.style.color = "#00FF00";
    } else {
        mensajeFinal.textContent = "Corrige los errores antes de continuar";
        mensajeFinal.style.color = "#FF0000";
    }
});