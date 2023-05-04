# myDiscord



# Tecnologias: 
    -> HTML, CSS, Bootstrap, JavaScript, JQuery.
-------------------------------------------------

# Funcionalidade:
    -> Criar conta (localStorage).
    -> Acessar conta (validação com as credencias do localStorage)
    -> Mutar e desmutar.
    -> Criar novo canal.
    -> Ambas as 3 telas ja se encontram responsivas.
-------------------------------------------------------------------

# Correções:
    
## Tela createAccount: 
    -> Ao criar um conta, se você colocar um usurario ja existente, visualmente da como valido, mas não armazena no localSotage.

## Tela Friends:
    -> Quando você muta o audio o microfone não muta o do mic junto.
    -> O username ainda não está sendo armazendo no localStorage, então o usuario que aparece é um valor fixo.

## Tela channels:

* _Modals_
    (Corrigido) -> Terceiro modal da criação do novo canal (onde você define o nome do canal), o botão "voltar" não esta funcionando.
    (Corrigido) -> Por estar sendo usado o metodo .one(), ao voltar pro modal anterior, ele para de executar o codigo e não deixa você avançar para o próximo.

* _threeGroupChannels_  (Botão "+" do componente channels)
    -> Bug no margin-bottom.

## Responsividade
    -> Erro de responsividade no zoom 400% o input some e o svg de lupa não.
---------------------------------------------------------------------------------------------------------------------------------------------------

# A ser desenvolvido:
    -> Lista de amigos ativos: Irá aparecer amigos que você poderá "adicionar", será apenas visual, será possivel definir o nome e status.
    -> Tela configurações.
    -> Tela de conversa.
    -> Criar grupo.