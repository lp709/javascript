const cidadeLisboa = '150.10';    //'300000000';
const cidadeVilaReal = '150.01'; //'100000000';

const lisboa = Number.parseFloat(cidadeLisboa);
const vilaReal = Number.parseFloat(cidadeVilaReal);

if (lisboa > vilaReal) {
    console.log(`Lisboa e a cidade mais populosa de portugal, pois tem aproximadamente: ${lisboa}`);
} else if (vilaReal > lisboa) {
    console.log(`Vila Real e a cidade mais populosa de portugal, pois tem aproximadamente: ${vilaReal}`);
} //nao foi necessario meter o else aqui