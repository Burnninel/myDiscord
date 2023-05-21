$(document).ready(function () {

  $('.hoverChannel').on('contextmenu', function (event) {

    var dataId = $(this).attr('id');

    event.preventDefault();

    const menu =
              `
                <ul id="menu-de-contexto">
                    <li class="listButton">Marcar como lida</li>
                    <hr class="separeteLine">
                    <li class="listButton inviteBtn">Convidar pessoas</li>
                    <hr class="separeteLine">
                    <li class="listButton">Silenciar servidor</li>
                    <li class="listButton">Config. de notificação</li>
                    <li class="listButton">Ocultar canais silenciador</li>
                    <hr class="separeteLine">
                    <li class="listButton">Config. de privacidade</li>
                    <li class="listButton">Editar perfil do servidor</li>
                    <hr class="separeteLine">
                    <li class="listButton removeChannel">Sair do servidor</li>
                </ul>
              `;

    $('body').append(menu);

    $('#menu-de-contexto').css({
      top: event.pageY + 'px',
      left: event.pageX + 'px'
    });

    $(document).one('click', function () {
      $('#menu-de-contexto').remove();
    });

    $('#menu-de-contexto li').one('click', function () {
      $('#menu-de-contexto').remove();
    });

    $('.removeChannel').one('click', function () {
      
      $('.hoverChannel' + '#' + dataId).remove();
      
      var channels = $('.groupChanelsTwo').html();
      localStorage.setItem('channels', channels);
      
    });

  });

});