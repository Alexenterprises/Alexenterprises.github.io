let rnd = (min, max) => {
  min = Math.ceil(0);
  max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let changeColor = () => {
  let tmp1, tmp2, tmp3;
  tmp1 = rnd();
  tmp2 = rnd();
  tmp3 = rnd();
  let tmp = 'rgb(' + tmp1 + ',' + ' ' + tmp2 + ',' + ' ' + tmp3 + ')';
  let ltmp = 'rgb(' + (1.2 * tmp1) + ',' + ' ' + tmp2 + ',' + ' ' + tmp3 + ')';
  return [tmp, ltmp];
}

function mouseOver() {
  let change = changeColor();
  document.getElementById('header').style.backgroundColor = change[0];
  document.getElementById('hover').style.backgroundColor = change[1];
}
