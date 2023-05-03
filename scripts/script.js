$('.button').on('click', function () {

    var email = $('.email').val();
    var password = $('.password').val();

    var usuarioInvalido = true;
    var account = {
        email: email,
        password: password
    }

    var emailLabel = $('#emailLabel');
    var pwLabel = $('#pwLabel');
    var invalid = $('.invalid');
    var asterisk = $('.asterisk');

    function funcAddError(element, nameClass, message) {
        element.addClass('invalid').append(`<span class="${nameClass}"> - ${message}</span>`);
    };

    if (!localStorage.allUsers) {
        funcAddError(emailLabel, 'error', 'Email ou senha incorretos.');
        funcAddError(pwLabel, 'error', 'Email ou senha incorretos.');
        asterisk.remove();
    };

    var allUsers = JSON.parse(localStorage.getItem('allUsers'));

    for (let user of allUsers) {
        if (user.email == account.email && user.password == account.password) {
            usuarioInvalido = false;
            console.log('izi');
            $('.error').remove();
            asterisk.remove();
            emailLabel.addClass('success');
            pwLabel.addClass('success');
            emailLabel.removeClass('invalid');
            pwLabel.removeClass('invalid');
            window.location.href = '../channels.html'
        };
    };

    if (usuarioInvalido && invalid.length == 0) {
        funcAddError(emailLabel, 'error', 'Email ou senha incorretos.');
        funcAddError(pwLabel, 'error', 'Email ou senha incorretos.');
        asterisk.remove();
    };

});

$('.new-account').click(() => {
    $('body').animate('slow', () => { window.location.href = '../newAccount.html' });
});



// Linha 22 e 23
// emailLabel.addClass('invalid').append(`<span class="error"> - Email ou senha incorretos.</span>`);
// pwLabel.addClass('invalid').append(`<span class="error"> - Email ou senha incorretos.</span>`);


//  Linha 46 e 47
// emailLabel.addClass('invalid').append(`<span class="error"> - Email ou senha incorretos.</span>`);
// pwLabel.addClass('invalid').append(`<span class="error"> - Email ou senha incorretos.</span>`);