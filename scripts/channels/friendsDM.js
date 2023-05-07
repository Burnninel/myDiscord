function card() {
    const card =
                `
                    <div class="collapseHeader">
                        <span id="titleCollapse">Selecionar amigos</span>
                        <span id="subtitleCollapse">Você pode adicionar novos amigos a Mensagens Diretas</span>
                        <input id="inputFriendDM" type="text" placeholder="Digite o nome de usuário de um amigo">
                    </div>
                    
                    <div class="bodyCollapse">
                        <img src="images/noFriends.svg" alt="noFriends">
                        <span id="spanNoFriends">Você não tem amigos para adicionar!</span>
                    </div>
                    
                    <div class="footerCollapse" >
                        <button class="btnCollapse">Criar MD</button>
                    </div>
                `;            
   
    $('.collapseFriendsDM').append(card);
}

$(document).one('click', '.createDM', function() {
    card();
});

$(document).on('click', '.createDM', function() {
    $('.collapseFriendsDM').show();
});

function newCardFriend(name) {
    var content = 
                `
                    <div class="friendsDM">
                        <div class="cardFriendDM">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 1024 1024">
                                <circle cx="512" cy="512" r="512" style="fill:#5865f2" />
                                <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" style="fill:#fff" />
                            </svg>
                            <span class="userFriendDM">${name}</span>
                        </div>
                        <div class="svgFriendsDM">
                            <svg aria-hidden="true" role="img" class="closeIcon-1NwtbI" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                        </div>
                    </div>
                `;

    $('.listFriends').append(content);
};

$(document).on('click', '.btnCollapse', function() {
    var name = $('#inputFriendDM');

    if(!name.val()) {
        return false;
    };

    newCardFriend(name.val());

    name.val('');

    $('.collapseFriendsDM').hide();
});