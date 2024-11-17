addEventListener("DOMContentLoaded", ()=>{
    window.alert("dados eviados com sucesso");
    const telefone = localStorage.getItem("tellocal")
    document.getElementById("telefonenum").value = telefone
    const cpf = localStorage.getItem("cpflocal")
    document.getElementById("cpfnum").value = cpf
    nome = localStorage.getItem("nomelocal")
    document.getElementById("nometxt").value = nome
    senha = localStorage.getItem("senhalocal")
    document.getElementById("senhatxt").value = senha
    email = localStorage.getItem("emaillocal")
    document.getElementById("emailtxt").value = email
})