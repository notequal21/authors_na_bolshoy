import noUiSlider from 'nouislider';

export const filterSliders = () => {
  if (document.querySelector('.filters-item__slider')) {
    let sliderBedrooms = document.getElementById('filter-slider-bedrooms');
    let sliderComfort = document.getElementById('filter-slider-comfort');
    let sliderFloor = document.getElementById('filter-slider-floor');
    // var inputNumberComfort = document.getElementById('inputNumberComfort');
    var inputNumberComfortFrom = document.getElementById(
      'spanNumberSquareFrom'
    );
    var inputNumberComfortTo = document.getElementById('spanNumberSquareTo');
    var inputNumberCost = document.getElementById('inputNumberCost');
    var sliderCost = document.getElementById('filter-slider-cost');
    const floorFromNum = document.querySelector('#spanNumberFloorFrom');
    const floorToNum = document.querySelector('#spanNumberFloorTo');
    let input = document.querySelectorAll('.input-content-width'),
      buffer = [];

    var valuesForSlider = ['Все', 'A1', 'A2', 'A3'];

    var format = {
      to: function (value) {
        return valuesForSlider[Math.round(value)];
      },
      from: function (value) {
        return valuesForSlider.indexOf(Number(value));
      },
    };

    noUiSlider.create(sliderBedrooms, {
      start: 1,
      range: {
        min: 0,
        max: valuesForSlider.length - 1,
      },
      connect: 'lower',
      step: 1,
      tooltips: false,
      pips: { mode: 'steps', format: format },
    });
    noUiSlider.create(sliderComfort, {
      start: [35, 50],
      range: {
        min: 35,
        max: 115,
      },
      connect: true,
      step: 1,
      tooltips: false,
    });
    noUiSlider.create(sliderFloor, {
      start: [5, 10],
      range: {
        min: 1,
        max: 20,
      },
      connect: true,
      step: 1,
      tooltips: false,
    });
    noUiSlider.create(sliderCost, {
      start: 7500000,
      range: {
        min: 5000000,
        max: 50000000,
      },
      connect: 'lower',
      step: 10000,
      tooltips: false,
    });

    const sliderBedroomsPips = sliderBedrooms.querySelectorAll('.noUi-value');
    sliderBedroomsPips.forEach((item) => {
      item.addEventListener('click', () => {
        sliderBedrooms.noUiSlider.set(item.dataset.value);
      });
    });

    sliderComfort.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];

      if (handle) {
        inputNumberComfortTo.value = Math.floor(value);
      } else {
        inputNumberComfortFrom.value = Math.floor(value);
      }
    });
    sliderCost.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      inputNumberCost.value = Number(value).toLocaleString();

      for (var i = 0; input.length > i; i++) {
        buffer[i] = document.createElement('div');
        buffer[i].className = 'buffer';
        input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

        input[i].nextElementSibling.innerHTML = input[i].value;
        input[i].style.width = input[i].nextElementSibling.clientWidth + 'px';
      }
    });

    sliderFloor.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      if (handle) {
        floorToNum.value = Math.floor(value);
      } else {
        floorFromNum.value = Math.floor(value);
      }
    });

    inputNumberComfortFrom.addEventListener('change', function () {
      sliderComfort.noUiSlider.set([this.value]);
    });
    inputNumberComfortTo.addEventListener('change', function () {
      sliderComfort.noUiSlider.set([
        sliderComfort.noUiSlider.get()[0],
        this.value,
      ]);
    });
    floorFromNum.addEventListener('change', function () {
      sliderFloor.noUiSlider.set([this.value]);
    });
    floorToNum.addEventListener('change', function () {
      sliderFloor.noUiSlider.set([sliderFloor.noUiSlider.get()[0], this.value]);
    });
    inputNumberCost.addEventListener('change', function () {
      sliderCost.noUiSlider.set([
        this.value.trim().replace(/\s+/g, ' ').split(' ').join(''),
      ]);
    });

    for (var i = 0; input.length > i; i++) {
      buffer[i] = document.createElement('div');
      buffer[i].className = 'buffer';
      input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

      input[i].oninput = function () {
        this.nextElementSibling.innerHTML = this.value;
        this.style.width = this.nextElementSibling.clientWidth + 'px';
      };
    }
  }
};
