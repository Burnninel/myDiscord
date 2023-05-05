$("#mic").click(function () {
    var micUnmutated = $('#micUnmutated')
    var micMuted = $('#micMuted')

    micMuted.toggle()
    micUnmutated.toggle()
});

$("#headphone").click(function () {
    var hpUnmutated = $('#hpUnmutated')
    var hpMuted = $('#hpMuted')

    hpUnmutated.toggle()
    hpMuted.toggle()
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})