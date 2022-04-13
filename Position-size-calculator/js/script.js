const button = document.getElementById('button');

const as = document.getElementById('accountSize');
const rk = document.getElementById('risk');
const stoploss = document.getElementById('stopLoss');


/* numbers converted */

/* -------------- */


/* areas to print */
const areaRisk = document.getElementById('areaRisk');
const areaUnits = document.getElementById('areaUnits');
const areaLots = document.getElementById('areaLots');
/* -------------- */


/* function that calculates */

const calc = () => {
    const riskN = parseInt(rk.value);
    const accSize = parseInt(as.value);
    const slPips = parseInt(stoploss.value);

    const riskP = riskN / 100;
    let riskDll = accSize * riskP;

/* lots */
    let lots = riskDll / (slPips * 10);
    if (lots < 0.01) areaLots.textContent = 0;
    else areaLots.textContent = lots.toPrecision(1);
/* ---- */

/* units */
    let units = riskDll / 0.0001;
    areaUnits.textContent = units;
/* ---- */
    
/* risk */
    areaRisk.textContent = `$ ${riskDll}`;

}

const check = () => {
    if (as.value === "" || rk.value === "" || stoploss.value === "") {
        alert('¡Rellena todos los campos!');
    } else calc();
}

button.addEventListener('click', check);