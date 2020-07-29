$('#btEntrar').click(
    function(){
        document.getElementById("mensagem").innerHTML = '';

        if ((document.getElementById("inputEmail").value != '') && (document.getElementById("inputSenha").value != '')) {

            login = {
                'email':document.getElementById("inputEmail").value,
                'semha':document.getElementById("inputSemha").value
            };

            if ((login.email == 'anderson@gmail.com') && (login.senha == '12345')) {
                alert('ola anderson!');
            } else {
                document.getElementById("mensagem").innerHTML = '<b style="color:red">usuario ou senha Invalidos!</b>'
            }
 
        } else {
            document.getElementById("mensagem").innerHTML = '<b style="color:red">Favor preencher todos os dados!</b>'
        }
    }
)