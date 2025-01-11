const hamburgerBtn = document.getElementById('hamburgerBtn');
const smallDeviceMenuItems = document.getElementById('smallDeviceMenuItems');

hamburgerBtn.addEventListener('click', ()=>{
    smallDeviceMenuItems.classList.toggle('hidden');
})