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

// function modal(title, subtitle, content) {
//     const thead = `<div class="modal-content">
//                         <div class="titleModal">
//                             <h1 id="title">${title}</h1>
//                             <span id="subtitle">${subtitle}</span>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>

//                         ${content}

//                         <div id="back"><span id="cursorBack">Voltar</span></div>
//                     </div>`

//     $('.modalType').append(thead)  
// }

// $(document).on('click', '.menuCreate', function() {
//     $('.firstModal').hide();

//     const title = 'Nos conte mais sobre seu servidor'
//     const subtitle = 'Para podermos te ajudar com as configurações, seu novo servidor é para alguns amigos ou uma grande comunidade?'
//     const content = `<div class="menusTypeChannel">
//                         <div class="menus2">
//                             <div class="menuCreate mbType">
//                                 <div>
//                                     <img class="imgMenu" alt="menuCreate" src="images/typeCommunity.svg">
//                                     <span class="titleBtnModal">Para um clube ou comunidade</span>
//                                 </div>
//                                 <div><svg class="svgModal" xmlns="http://www.w3.org/2000/svg" fill="none" height="20" viewBox="0 0 20 20" width="20"><path clip-rule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="#4f5660" fill-rule="evenodd"/></svg></div>
//                             </div>
//                             <div class="menuCreate" id="explorer">
//                                 <div>
//                                     <img class="imgMenu" alt="menuCreate" src="images/typeFriend.svg">
//                                     <span class="titleBtnModal">Para meus amigos e eu</span>
//                                 </div>
//                                 <div><svg class="svgModal" xmlns="http://www.w3.org/2000/svg" fill="none" height="20" viewBox="0 0 20 20" width="20"><path clip-rule="evenodd" d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z" fill="#4f5660" fill-rule="evenodd"/></svg></div>
//                             </div>
//                             <div class="spanType">
//                                 <span>Não sabe? Você pode <a href="" id="skip">pular essa pergunta</a> por enquanto.</span>
//                             </div>
//                         </div>
//                     </div>`

//     modal(title, subtitle, content)
// });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})