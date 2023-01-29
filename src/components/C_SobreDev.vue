<template>
<div>
<section class="section">
  <h1 class="title">Sobre a aplicação...</h1>
  <h2 class="subtitle">
    É um componente Vue.js que possui um formulário para buscar o endereço de um CEP específico e exibir os resultados em uma tabela. Ele utiliza o framework Buefy para estilização e componentes, e o axios para fazer chamadas à API de busca de CEP..
   </h2>

      <div class="media-content">
        <div class="content">
          <p>
           Na section <strong>template</strong> foi construído um formulário com um campo de busca de CEP, um botão de busca e uma tabela para exibir os resultados. A tabela utiliza o componente b-table do Buefy e possui uma lista de colunas com suas respectivas propriedades, como o nome, label e se é visível ou não. Também é possível filtrar as colunas da tabela através de um componente b-dropdown.
          </p>
        </div>
      </div>

      <br/>

      <div class="media-content">
        <div class="content">
          <p>
          Na section <strong>script</strong>, é definido o objeto de dados do componente, incluindo o valor do CEP, os dados da tabela, as colunas da tabela e algumas variáveis de controle. No método mounted() é carregado os dados salvos no localstorage.
          </p>
        </div>
      </div>

      <br/>

     <div class="media-content">
        <div class="content">
          <p>
      Há também um método chamado encontrarEndereco() que é chamado quando o botão de busca é clicado. Esse método utiliza o axios para fazer uma chamada GET à API de busca de CEP com o valor digitado no campo de busca de CEP. Se a chamada for bem-sucedida, os dados retornados são adicionados à tabela e salvos no localstorage. Se houver um erro na chamada ou se o CEP não for encontrado, uma notificação é exibida informando o erro.
</p>
        </div>
      </div>

      <br/>
<div class="media-content">
    <div class="content">
      <p>
        <strong>Julio Cesar Bueno</strong> <br/><small>juliocesar.ovidiobueno@outlook.com</small>
        </p>
        </div>
        </div>
</section>

</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
