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
        
        if (!email) {
            usuarioInvalido = true;
            if (!emailLabel.hasClass('invalid')) {
                funcAddError(emailLabel, 'error', 'Digite um email válido.');
            }
        };

        for (let item of allUsers) {
            console.log(item.email)
            if (item.email == email) {
                usuarioInvalido = true;
                $('.error').remove();
                funcAddError(emailLabel, 'error', 'Email ja cadastrado.')
            }
        };

        if(!usuarioInvalido) {
            funcAddSuccess(email, emailLabel, 'errorMail', 'error');
        };

        if (!username) {
            usuarioInvalido = true;
            if (!userLabel.hasClass('invalid')) {
                funcAddError(userLabel, 'errorUser', 'Usuario invalido.');
            }
        };

        funcAddSuccess(username, userLabel, 'errorUser');
        
        if (!password) {
            usuarioInvalido = true;
            if (!pwLabel.hasClass('invalid')) {
                funcAddError(pwLabel, 'errorPw', 'Preencha uma senha valida.');
            }
        };
        
        funcAddSuccess(password, pwLabel, 'errorPw');
        
        if (!usuarioInvalido) {
            allUsers.push(newAccount);
            localStorage.setItem('allUsers', JSON.stringify(allUsers));
            alert('sucesso');
            window.location.href = '../index.html';
        };
    });
    
});

$('.login').click(() => {
    $('body').animate('slow', () => { window.location.href = '../index.html' });
});