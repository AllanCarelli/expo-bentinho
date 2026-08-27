let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

const botao = document.getElementById("startQuestion");
const ini = document.getElementById("startScreen");
const quiz = document.getElementById("quizScreen");
const pergunta = document.getElementById("pergunta");
const res1 = document.getElementById("resp1txt");
const res2 = document.getElementById("resp2txt");
const res3 = document.getElementById("resp3txt");
const res4 = document.getElementById("resp4txt");
const res1x = document.getElementById("resp1");
const res2x = document.getElementById("resp2");
const res3x = document.getElementById("resp3");
const res4x = document.getElementById("resp4");
const proxima = document.getElementById("next");
const end = document.getElementById("endScreen");

let totalQuestions = 3;

let radio = document.getElementsByName("resp");

function atualizarRespostas(currentQ){
  answered = false;
  pergunta.innerHTML = `Questão ${currentQ + 1} / ${totalQuestions} - ${questao[currentQ]["q"]}`;
  res1.innerHTML = questao[currentQ]["opts"][0];
  res2.innerHTML = questao[currentQ]["opts"][1];
  res3.innerHTML = questao[currentQ]["opts"][2];
  res4.innerHTML = questao[currentQ]["opts"][3];
  res1x.setAttribute("value", questao[currentQ]["opts"][0]);
  res2x.setAttribute("value", questao[currentQ]["opts"][1]);
  res3x.setAttribute("value", questao[currentQ]["opts"][2]);
  res4x.setAttribute("value", questao[currentQ]["opts"][3]);
  res1x.checked = false;
  res2x.checked = false;
  res3x.checked = false;
  res4x.checked = false;
  proxima.setAttribute("style","display:none;");
}

res1x.addEventListener("click",function(){
  answered = true;
  proxima.removeAttribute("style");
})
res2x.addEventListener("click",function(){
  answered = true;
  proxima.removeAttribute("style");
})

res3x.addEventListener("click",function(){
  answered = true;
  proxima.removeAttribute("style");
})

res4x.addEventListener("click",function(){
  answered = true;
  proxima.removeAttribute("style");
})



const allQuestions = [{
  "q": "Qual tratado encerrou oficialmente a Primeira Guerra Mundial entre a Alemanha e as potências aliadas?",
  "opts": [
    "Tratado de Tordesilhas",
    "Tratado de Versalhes",
    "Tratado de Utrecht",
    "Tratado de Viena"
  ],
  "ans": 1
},
{
  "q": "Qual é o único país que possui território tanto na Europa quanto na Ásia e tem Ancara como capital?",
  "opts": [
    "Geórgia",
    "Armênia",
    "Turquia",
    "Azerbaijão"
  ],
  "ans": 2
},
{
  "q": "Qual filósofo escreveu “Crítica da Razão Pura”?",
  "opts": [
    "Friedrich Nietzsche",
    "Immanuel Kant",
    "René Descartes",
    "John Locke"
  ],
  "ans": 1
},
{
  "q": "Qual elemento químico possui o número atômico 79?",
  "opts": [
    "Prata",
    "Platina",
    "Ouro",
    "Mercúrio"
  ],
  "ans": 2
},
{
  "q": "Qual império foi governado por Mansa Musa, conhecido por sua enorme riqueza?",
  "opts": [
    "Império Songhai",
    "Império do Mali",
    "Império Axumita",
    "Império Bizantino"
  ],
  "ans": 1
},
{
  "q": "Qual é o ponto mais profundo conhecido dos oceanos?",
  "opts": [
    "Fossa de Porto Rico",
    "Fossa de Java",
    "Challenger Deep",
    "Fossa das Aleutas"
  ],
  "ans": 2
},
{
  "q": "Qual civilização criou o sistema de escrita conhecido como cuneiforme?",
  "opts": [
    "Sumérios",
    "Romanos",
    "Fenícios",
    "Celtas"
  ],
  "ans": 0
},
{
  "q": "Quem formulou o princípio da incerteza na mecânica quântica?",
  "opts": [
    "Max Planck",
    "Werner Heisenberg",
    "Erwin Schrödinger",
    "Niels Bohr"
  ],
  "ans": 1
},
{
  "q": "Qual país possui a maior quantidade de fusos horários quando considerados seus territórios ultramarinos?",
  "opts": [
    "Rússia",
    "Estados Unidos",
    "França",
    "China"
  ],
  "ans": 2
},
{
  "q": "Qual foi a principal cidade do Império Asteca?",
  "opts": [
    "Chichén Itzá",
    "Cusco",
    "Tenochtitlán",
    "Teotihuacán"
  ],
  "ans": 2
},
{
  "q": "Qual é o nome da partícula responsável por transmitir a força eletromagnética?",
  "opts": [
    "Glúon",
    "Fóton",
    "Bóson W",
    "Neutrino"
  ],
  "ans": 1
},
{
  "q": "Quem escreveu “A Divina Comédia”?",
  "opts": [
    "Dante Alighieri",
    "Giovanni Boccaccio",
    "Francesco Petrarca",
    "Nicolau Maquiavel"
  ],
  "ans": 0
}
];

function shuffle(arr) {
  // Percorre do último até o primeiro elemento (i >= 0)
  for (let i = arr.length - 1; i > 0; i--) {
    // Sorteia um índice aleatório válido entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Troca os elementos de posição (Destructuring)
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let questao = shuffle([...allQuestions]);

function respCorreta(resp,currentQ,pos){
  
  if (resp == questao[currentQ]["opts"][pos]){
    return true
  }
  
  return false
}

botao.addEventListener("click", function() {
  score = 0;
  currentQ = 0;
  if (ini.style.display == "block"){
    ini.style.display = "none";
    quiz.style.display = "block";
  }
  atualizarRespostas(currentQ)
});


proxima.addEventListener("click", function(){
  let selected = document.querySelector('input[name="resp"]:checked')?.value || null;
  if(respCorreta(selected,currentQ,questao[currentQ]["ans"])){
    score += 1;
    alert("Você acertou ✔")
  } else {
    alert("Você errou 🤣")
  }
  currentQ += 1;
  answered = false;
  atualizarRespostas(currentQ)
  
  if (currentQ >= totalQuestions){
    quiz.style.display = "none";
    end.style.display = "block";
    document.getElementById("resultado").innerHTML = `Resultado: ${score} <br>`;
}
})



