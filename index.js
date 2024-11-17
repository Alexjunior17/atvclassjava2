function mascara_cpf()
{
     //limitador
 var cpf = document.getElementById("cpfnum").value
 console.log(cpf)
cpf=cpf.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
 console.log(cpf)
document.getElementById("cpfnum").value=cpf
cpf=document.getElementById("cpfnum").value.slice(0,10)
 console.log(cpf)

 //máscara
 var cpf_formatado = document.getElementById("cpfnum").value
 if (cpf_formatado[3]!=".")
 {
     if(cpf_formatado[3]!=undefined)
     {
         document.getElementById("cpfnum").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
     }
 }

 if (cpf_formatado[7]!=".")
 {
     if(cpf_formatado[7]!=undefined)
     {
         document.getElementById("cpfnum").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
     }
 }

 if (cpf_formatado[11]!="-")
 {
     if(cpf_formatado[11]!=undefined)
     {
         document.getElementById("cpfnum").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
     }
 }
 localStorage.setItem("cpflocal", cpf_formatado)
}




function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefonenum").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefonenum").value=tel
     tel=document.getElementById("telefonenum").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefonenum").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefonenum").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefonenum").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefonenum").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            localStorage.setItem("tellocal", tel_formatado)
        }


        function salvarnome()
        {
           var nome = document.getElementById("nometxt").value
           localStorage.setItem("nomelocal", nome)
        }

        function salvarsenha()
        {
           var senha = document.getElementById("senhatxt").value
           localStorage.setItem("senhalocal", senha)
        }
        function salvaremail()
        {
            var email = document.getElementById("emailtxt").value
            localStorage.setItem("emaillocal", email)
        }
       
        
