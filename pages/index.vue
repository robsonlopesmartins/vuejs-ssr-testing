<template>
  <section class="container">
    <h1>Teste simples de listagem</h1>

    <div class="panel panel-default">
      <div class="row">
        <div class="col-xs-12 col-md-4" v-for="p in products">
          <figure>
            <img v-bind:src="p.picture">
          </figure>
          <h3>{{ p.title }}</h3>
          <span>{{ p.price }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData () {
      return axios.get('https://api.myjson.com/bins/ey0c1')
        .then((res) => {
          return { products: res.data.products }
        })
    }
  }
</script>

<style media="screen">
  body{
    background: #f1f1f1;
  }
</style>
