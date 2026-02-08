function loadGame(url) { document.getElementById('gameFrame').src = url; }

function toggleFullscreen() { let elem = document.getElementById("gameFrame"); if (elem.requestFullscreen) { elem.requestFullscreen(); } else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); } }
