import Formulario from "./componentes/Formulario";

function App() {
  const alunos = [

    {
      "id": 11,
      "nome": "Vitoria Abreu",
      "ponto": 8,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 3,
      "nome": "Ana Clara",
      "ponto": 51,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 5,
      "nome": "João Pedro",
      "ponto": 32.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 2,
      "nome": "Davi Cope",
      "ponto": 51.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 7,
      "nome": "Sara do Amaral",
      "ponto": 30,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 4,
      "nome": "Thiago de Souza",
      "ponto": 42,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 8,
      "nome": "Valentina Cardoso",
      "ponto": 25.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 6,
      "nome": "Rebecca Lagais",
      "ponto": 32,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 9,
      "nome": "Davi Matheus",
      "ponto": 13.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 10,
      "nome": "Laura Cristina",
      "ponto": 12,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 12,
      "nome": "Rafaela lopis",
      "ponto": 11.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },

    {
      "id": 15,
      "nome": "Henrique Franzilli",
      "ponto": 1,
      "createdAt": "2024-02-25T14:43:30.485Z",
      "updatedAt": "2024-02-25T14:43:30.485Z"
    },
    {
      "id": 18,
      "nome": "Caio Viana",
      "ponto": 0,
      "createdAt": "2024-02-25T14:50:22.925Z",
      "updatedAt": "2024-02-28T02:55:50.516Z"
    },
    {
      "id": 13,
      "nome": "Ana iwani",
      "ponto": 13,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-23T00:05:45.462Z"
    },
    {
      "id": 1,
      "nome": "Rau Vidal",
      "ponto": 65.5,
      "createdAt": "2024-02-23T00:05:45.462Z",
      "updatedAt": "2024-02-24T17:22:15.272Z"
    },
  ]

  /* FUNÇÃO DE ORDENAR QUE SERÁ FEITO PELA API */
  /* ----------------------------------------- */
  const comparePontos = (a, b) => {
    return b.ponto - a.ponto;
  }
  alunos.sort(comparePontos)
  /* ----------------------------------------- */

  /* FILTRAR DO TOP3  */
  /* ----------------------------------------- */

  const top3 = []
  for (let i = 0; i < 3; i++) {
    top3.push(alunos[i])
  }

  /* FILTRO DOS JOGADORES */
  /* ----------------------------------------- */
  const topRestante = []

  for (let i = 3; i < alunos.length; i++) {
    topRestante.push(alunos[i])
  }

  /* ----------------------------------------- */
  const deletarColaborador = () => {
    alert('ESCLUIU')
  }

  const editarColaborador = () => {
    alert('EDITAR')
  }
  return (
    <div>
      <Formulario top3={top3} topRestante={topRestante} aoDeletar={deletarColaborador} aoEditar={editarColaborador} />
    </div>
  );
}

export default App;