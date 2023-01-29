<template>
    <div>
        <!-- O componente "nav" é utilizado para criar uma barra de navegação -->
        <nav class="panel">
            <div class="field is-grouped is-grouped-centered">
                <!-- O componente "b-field" é utilizado para criar um campo de formulário -->
                <b-field align="is-centered" message="Somente números!">
                    <!-- O componente "b-input" é utilizado para criar um campo de entrada de texto -->
                    <b-input v-model="cep" placeholder="CEP aqui..." type="search" icon="magnify"></b-input>
                    <p class="control">
                        <!-- O componente "b-button" é utilizado para criar um botão -->
                        <b-button type="is-primary" :loading="isEspera" label="Buscar" @click="encontrarEndereco"></b-button>
                        <!-- O componente "b-loading" é utilizado para exibir uma animação de carregamento -->
                        <b-loading :is-full-page="true" :active.sync="isEspera"></b-loading>
                    </p>
                </b-field>
            </div>
            <div class="panel">
                <b-field>
                    <!-- O componente "b-dropdown" é utilizado para criar um menu suspenso -->
                    <b-dropdown position="is-bottom-right" :disabled="colunas.length <= 1">
                        <template v-slot:trigger>
                            <b-button>Filtros</b-button>
                        </template>
                        <b-dropdown-item v-for="(coluna, index) in colunas" :key="index">
                            <b-checkbox v-model="coluna.visible">{{ coluna.label }}</b-checkbox>
                        </b-dropdown-item>
                    </b-dropdown>
                </b-field>
                <!-- O componente "b-table" é utilizado para criar uma tabela -->
                <b-table :data="isEmpty ? [] : dados" :columns="colunas">
                    <template #empty>
                        <div class="has-text-centered">No momento não há dados para exibir aqui...</div>
                    </template>
                    <template v-for="coluna in colunas">
                        <b-table-column :key="coluna.cep" v-bind="coluna">
                            <template v-slot="props">
                                {{ props.row[coluna.field] }}
                            </template>
                        </b-table-column>
                    </template>
                </b-table>
            </div>
        </nav>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            cep: '', // Armazena o valor digitado no campo de busca de CEP
            dados: [],
      colunas: [
        { field: 'cep', label: 'CEP', visible: true },
        { field: 'logradouro', label: 'Logradouro', visible: true },
        { field: 'complemento', label: 'Complemento', visible: false },
        { field: 'bairro', label: 'Bairro', visible: true },
        { field: 'localidade', label: 'Localidade', visible: true },
        { field: 'uf', label: 'UF', visible: true },
        { field: 'ibge', label: 'IBGE', visible: true },
        { field: 'gia', label: 'GIA', visible: false },
        { field: 'ddd', label: 'DDD', visible: false },
        { field: 'siafi', label: 'SIAFI', visible: false },
     ],
     isEmpty: false,
     isEspera: false
    }
  },
  mounted() {
    let dadosSalvos = localStorage.getItem('dados')
    if (dadosSalvos) {
        this.dados = JSON.parse(dadosSalvos)
    }
  },
  methods: {
    /**
    Este método é chamado quando o usuário clica no botão "Encontrar Endereço" na aplicação.
    Ele faz uma chamada à API de busca de CEP usando o axios com o valor digitado no campo de busca de CEP (this.cep).
    Antes da chamada à API, a variável isEspera é definida como true, indicando que a aplicação está esperando uma resposta.
    **/
    async encontrarEndereco() {
     //A variável isEspera é definida como true, indicando que está esperando uma resposta da aplicação.
     this.isEspera = true;
     /**
     Dentro do bloco try, é feita a chamada à API usando o axios e o valor digitado no campo de busca de CEP.
     Se a resposta retornada pelo serviço de busca de CEP contém um erro, uma notificação é exibida ao usuário informando que o CEP não foi encontrado.
     Caso contrário, os dados retornados são adicionados ao array "dados" e armazenados no localStorage do navegador.
     Em seguida, o campo de busca de CEP é limpo.
     **/
      try {
        // Chamada à API de busca de CEP
        // usando o axios usando o valor digitado no campo de busca de CEP (this.cep)
        const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
        if (response.data.erro) {
          this.$buefy.notification.open({
            message: 'CEP não encontrado',
            type: 'is-danger'
          })
        } else {
            this.dados.push({
                ...response.data
            })
            localStorage.setItem('dados', JSON.stringify(this.dados));
            this.cep = ''
        }
        //A variável isEspera é definida como false, indicando que a aplicação não está mais esperando uma resposta.
        this.isEspera = false


      //Se ocorrer algum erro durante a chamada à API, é exibida uma notificação ao usuário informando que houve um erro ao buscar o CEP.
      } catch (err) {
        //A variável isEspera é definida como false, indicando que a aplicação não está mais esperando uma resposta.
        this.isEspera = false
        this.$buefy.notification.open({
          message: 'Erro ao buscar CEP',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>