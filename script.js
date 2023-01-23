
/*colocar na variavel o formulario */
const form = document.querySelector("#form-habits")

/* iniciar a biblioteca - criou um novo obj para  NLWSetup - o "erro" no NLW é po estar puxando de fora, não está dentro do programa */
const nlwSetup = new NLWSetup(form)

/* cria a função */
const button = document.querySelector("header button")


/*adiciona o evento click na função add*/
button.addEventListener("click", add)

/*change(mudança)  - função save*/
form.addEventListener("change", save)

/*função agrupa codigos para serem utilizados a qualquer momento
 */
function add() {

  /*cria a variavel today, pegar a data de hoje com o formato dia-mês*/
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso🔴")
    return
  }

  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today)
}

function save() {
  /*NLWSetup@habits nome da chave(localStorage pede chave e valor) - nlwSetup.data dado que vai ser transformado em string quando salvar
  JSON.stringify transforma os dados em string */
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/*JSON.parse tranforma a string em objeto

*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

/*nlwSetup obj. pega as inf da const data*/
nlwSetup.setData(data)

/*se tudo ok, roda! */
nlwSetup.load()
