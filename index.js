const audio = new Audio('sound.m4a');

function enter() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    audio.play()
}

function goBack(){
    document.getElementById('menu-screen').style.display = 'flex';
    document.getElementById('main').style.display = 'none';
    audio.pause()
    audio.currentTime = 0;
}


