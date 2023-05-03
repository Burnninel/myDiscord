// Gerar dias
$('#dia').on('click', function () {
    var dia = 31;

    for (i = 1; i <= dia; i++) {
        var option = $(`<option class="day selected-day" id="day"></option>`).text(i).val(i);
        $('#dia').append(option);
    };

    $(this).off('click');
});

// Select dia
$('.selected-day').on('change', function () {
    var selectedDay = $('#dia').val();
    selectedDay = $('.selected-day').val();
});

// Gerar mêses
$('#mes').on('click', function () {
    var mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    for (let i = 0; i < mes.length; i++) {
        var option = $(`<option class="day selected-mount" id="day"></option>`).text(mes[i]);
        $('#mes').append(option);
    };

    $(this).off('click');
});

// Select Mêses
$('.selected-mount').on('change', function () {
    var selectedMount = $('#mes').val();
    selectedMount = $('.selected-mount').val();
});

// Gerar anos
$('#ano').on('click', function () {
    var ano = 2023;

    for (i = 1900; i <= ano; i++) {
        var option = $(`<option value="${i}" class="day" id="day"></option>`).text(i);
        $('#ano').append(option);
    };

    $(this).off('click');
});

// Select anos
$('.selected-year').on('change', function () {
    var selectedYear = $('#ano').val();
    selectedYear = $('.selected-mount').val();
});

// Selecionar check box
$('.checkbox').on('click', function () {
    $(".checkbox").toggleClass("checkbox-after");

    if ($(".checkbox").text() == "") {
        $(".checkbox").text("✓").addClass("check");
    } else {
        $(".checkbox").text("");
    }
});

// Dia invalido
// $('.button').on('click', function () {
//     var day = $('#dia').val()
//     var invalid = $('.invalid')
//     if (day == 0) {
//         $("#date").addClass('invalid').append(`<span class="error"> - Data invalida</span>`)
//     } else {
//         $('#date').removeClass('invalid')
//         $('.error').remove()
//         $('#date').addClass('success')
//     }

//     // if (day.length >= 1) {
//     //     $("#date").addClass('invalid').append(`<span class="error"> - Data invalida</span>`)
//     // } else {
//     //     $('#date').removeClass('invalid')
//     //     $('.error').remove()
//     //     $('#date').addClass('success')
//     // }
// });

var allUsers = [];

$(document).ready(function () {

    $('.btn').click(function () {
        var email = $('.email').val();
        var password = $('.password').val();
        var username = $('.username').val();

        var emailLabel = $('#emailLabel');
        var pwLabel = $('#pwLabel');
        var userLabel = $('#username');
        
        var invalid = $('.invalid');

        function funcAddError(element, nameClass, message) {
            element.addClass('invalid').append(`<span class="${nameClass}"> - ${message}</span>`);
        };

        function funcAddSuccess(input, element, nameClass, secondClass) {
            if (input) {
                element.removeClass('invalid');
                element.addClass('success');
                $(`.${nameClass}`).remove();
                $(`.${secondClass}`).remove();
            };
        };

        var usuarioInvalido = false;

        var newAccount = {
            email: email,
            password: password
        };

        if (localStorage.allUsers) {
            allUsers = JSON.parse(localStorage.allUsers);
        };

        for (let item of allUsers) {
            if (item.email === email || !email || !username || !password) {
                usuarioInvalido = true;
            };
        };

        if (usuarioInvalido && invalid.length < 1) {
            $('.errorMail').remove();
            funcAddError(emailLabel, 'error', 'Email ja cadastrado.');
        };

        if (!usuarioInvalido) {
            $('.error').remove();
            emailLabel.removeClass('invalid');
            emailLabel.addClass('success');
        };

        if (!email && invalid.length < 1 && !usuarioInvalido) {
            funcAddError(emailLabel, 'errorMail', 'Preencha um email valido.');
        };

        funcAddSuccess(email, emailLabel, 'errorMail', 'error');

        if (!password && invalid.length < 1) {
            funcAddError(pwLabel, 'errorPw', 'Preencha uma senha valida.');
        };

        funcAddSuccess(password, pwLabel, 'errorPw');

        if (!username && invalid.length < 1) {
            funcAddError(userLabel, 'errorUser', 'Usuario invalido.');
        };

        funcAddSuccess(username, userLabel, 'errorUser');

        if (!usuarioInvalido) {
            allUsers.push(newAccount);
            localStorage.setItem('allUsers', JSON.stringify(allUsers));
            alert('sucesso');
            window.location.href = '../index.html';
        };
    })
    
});

$('.login').click(() => {
    $('body').animate('slow', () => { window.location.href = '../index.html' });
});








// Validação email inicial.

    // if (!email && invalid.length <= 1) {
        //     emailLabel.addClass('invalid').append(`<span class="errorMail"> - Preencha um email valido.</span>`)
        // } else if (usuarioInvalido && invalid.length <= 1) {
        //     $('.errorMail').remove()
        //     emailLabel.addClass('invalid').append(`<span class="error"> - Email ja cadastrado.</span>`)
        // } else if (!usuarioInvalido) {
        //     $('.errorMail').remove()
        //     $('.error').remove()
        //     emailLabel.removeClass('invalid')
        //     emailLabel.addClass('success')
        // }