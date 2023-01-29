<template>
<div id="app">

  <b-breadcrumb
            align="is-centered"
        >
            <b-breadcrumb-item tag='router-link' to="/">ConsultaCEP</b-breadcrumb-item>
            <b-breadcrumb-item tag='router-link' to="/sobre">SOBRE</b-breadcrumb-item>
        </b-breadcrumb>

<section>
    <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>