<template>
  <ul>
    <h1>Teste simples de listagem</h1>

    <div class="list" v-for="d in data">
      <ul>
        <li>
          Name: {{ d.name }}
        </li>
        <li>
          E-mail: {{ d.email }}
        </li>
        <li>
          Company: {{ d.name }}
        </li>
      </ul>
      <hr>
    </div>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData () {
      return axios.get('http://104.236.225.42/teste.json')
        .then((res) => {
          return { data: res.data.data }
        })
    }
  }
</script>
