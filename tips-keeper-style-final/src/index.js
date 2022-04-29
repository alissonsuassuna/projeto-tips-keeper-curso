import React from "react";
import ReactDom from "react-dom";

import App from "./components/App"

ReactDom.render(
  <App />,
  document.getElementById('root')
)

//DESAFIO:
//1. Implemente a funcionalidade de adicionar nota.
//- Cria uma constante que acompanha o título e o conteúdo.
//- Passa a nova nota de volta para o App.
//- Adiciona uma nova nota a um array.
//- Pega o array e renderiza os componentes Note separados para cada item.

//2. Implemente a funcionalidade de exclusão de nota.
//- Retorno de chamada do componente Note para acionar uma função de exclusão.
//- Use a função de filtro para filtrar o item que precisa ser excluído.
//- Passa um id para o componente Note, passa-o de volta para o App ao deletar.