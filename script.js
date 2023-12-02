
    const poweronButton = document.getElementById('power-on-button');
    const poweroffButton = document.getElementById('power-off-button');
    const volumeInput = document.getElementById('volume');
    const drumButtonsContainer = document.getElementById('drum-buttons');
    let isPowerOn = false;


    function powerOn() {
        isPowerOn = true;
        console.log('Power On');
        poweronButton.setAttribute('disabled', 'disabled');
        poweroffButton.removeAttribute('disabled');
        volumeInput.removeAttribute('disabled');
        drumButtonsContainer.style.display = 'grid';
    }

    function powerOff() {
        isPowerOn = false;
        console.log('Power Off');
        poweronButton.removeAttribute('disabled');
        poweroffButton.setAttribute('disabled', 'disabled');
        volumeInput.setAttribute('disabled', 'disabled');
        drumButtonsContainer.style.display = 'none';
    }

    // function updateVolume() {
    //     const volumeDisplay = document.getElementById('volume-display');
    //     const volume = volumeInput.value;
    //     volumeDisplay.textContent = `${Math.round(volume * 100)}%`;
    // }

    function playSound(audioId) {
        if (isPowerOn) {
            const audio = document.getElementById(audioId);
            const volume = volumeInput.value;
            audio.volume = volume;
            audio.play();
        } else {
            console.log('Power is off. Cannot play sound.');
        }
    }

    const drumButtons = document.querySelectorAll('.drum');
    drumButtons.forEach((button) => {
        button.addEventListener('click', () => playSound(button.id.replace('drum-button', 'drum-sound')));
    });

    poweronButton.addEventListener('click', powerOn);
    poweroffButton.addEventListener('click', powerOff);
    volumeInput.addEventListener('input', updateVolume);


    

