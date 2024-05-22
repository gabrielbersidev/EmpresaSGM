
setTimeout((e) => {
    setTemperature(80);
    setHumidity(22);
  }, 4000);
  
  lastTemp = 0;
  lastHum = 0;
  
  function setTemperature(val) {
    start = lastTemp;
    increment = val > start ? 1 : -1;
  
    document.getElementById('tempText').innerHTML = val + 'ºC';
  
    intervalTemp = setInterval(() => {
      document
        .getElementById('tempCircle')
        .setAttribute('stroke-dasharray', `${start} ${100 - start}`);
      start += increment;
  
      if (start == val) clearInterval(intervalTemp);
    }, 10);
  
    lastTemp = val;
  }
  
  function setHumidity(val) {
    start = lastHum;
    increment = val > start ? 1 : -1;
  
    document.getElementById('humText').innerHTML = val + '%';
  
    intervalHum = setInterval(() => {
      document
        .getElementById('humCircle')
        .setAttribute('stroke-dasharray', `${start} ${100 - start}`);
      start += increment;
  
      if (start == val) clearInterval(intervalHum);
    }, 10);
  
    lastHum = val;
  }



data = '02/05/24 - 19:40'

const editIcon = document.querySelector('.navigation i.material-icons');
const machineName = document.querySelector('#MACHINE');

editIcon.addEventListener('click', () => {
  machineName.contentEditable = true;
  machineName.style.color = 'blue';

  const keydownHandler = (event) => {
      if (event.keyCode === 13) {
          event.preventDefault();
          machineName.contentEditable = false;
          machineName.style.color = '';
          machineName.style.outline = '';
          machineName.removeEventListener('keydown', keydownHandler);
      }
  };

  machineName.addEventListener('keydown', keydownHandler);

  machineName.addEventListener('input', () => {
      if (machineName.textContent.length > 8) {
          machineName.textContent = machineName.textContent.slice(0, 8);
      }
  });
});
function adjustBrTag() {
  var brElement = document.querySelector('.br');
  if (window.innerWidth < 785) {

    brElement.innerHTML = '<br>';
  } else {

    brElement.innerHTML = '';
  }
}


adjustBrTag();

window.addEventListener('resize', adjustBrTag);

var map = L.map('map', { attributionControl: false }).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

let marker;
let circle;

function setMapPos(lat, long)
{
  if (marker) 
  {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }

  marker = L.marker([lat, long]).addTo(map);
  circle = L.circle([lat, long], {radius: 10}).addTo(map);
  map.fitBounds(circle.getBounds());
}

setMapPos(-23.516641, -47.496185)

var options = {
  series: [{
    name: "Temperatura",
    data: [0, 10, 15, 20, 20, 10, 30, 40, 50, 60, 70, 80]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#EC6200'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Variação de Temperatura',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      style: {
        fontSize: '10px'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Temperatura (ºC)'
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


var options1 = {
  series: [{
    name: "Umidade",
    data: [0, 10, 15, 20, 20, 10, 30, 40, 50, 60, 70, 80]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#1abc9c'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Variação de Umidade',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      style: {
        fontSize: '10px'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Umidade (%)'
    }
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


