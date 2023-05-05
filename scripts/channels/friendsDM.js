$(document).one('click', '.createDM', function() {
    $('.collapseFriendsDM').show()
    
    const card =`
                    <div class="collapseHeader">
                        <span id="titleCollapse">Selecionar amigos</span>
                        <span id="subtitleCollapse">Você pode adicionar novos amigos a Mensagens Diretas</span>
                        <input id="inputFriendDM" type="text" placeholder="Digite o nome de usuário de um amigo">
                    </div>
                    
                    <div class="bodyCollapse">
                        <img src="images/noFriends.svg" alt="noFriends">
                        <span id="spanNoFriends">Você não tem amigos para adicionar!</span>
                    </div>
                    
                    <div class="footerCollapse " >
                        <button class="btnCollapse">Criar MD</button>
                    </div>
                `            
    $('.collapseFriendsDM').append(card)
})