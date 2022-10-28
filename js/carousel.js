const slider = document.querySelectorAll(".frame");
const buttons = document.querySelectorAll('#button');





buttons.forEach((item) => {
    item.onclick = (button) => {
        changeButton(button.explicitOriginalTarget)
        changeFrame(button.explicitOriginalTarget.value)
    }
})


function changeFrame(value) {

    const frameId = '#frame' + value
    const frame = document.querySelector(frameId);
    if (!frame) return
    let activeFrame = document.querySelector('.active');
    activeFrame.classList.remove('active')
    console.log(value)


    frame.classList.add('active')


}

function changeButton(button) {
    console.log(button)
    const activeButton = document.querySelector('.btn-carousel-active');
    activeButton.classList.remove('btn-carousel-active');
    button.classList.add('btn-carousel-active');
}
