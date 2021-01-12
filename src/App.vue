<template>
  <div id="app">
    <div id="province-list">
      <div
        class="province-wrapper"
        v-for="name in getProvinceNames(provinceData)"
        v-bind:key="name" >
        <Province :provinceData="getProvince(name, provinceData)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Province from './components/Province.vue';

export default {
  name: 'App',
  components: {
    Province
  },
  props: ['provinceData'],
  methods: {
    getProvinceNames: (data) => {
      return Array.from(
        new Set(
          data.map(line => line.name)
        )
      );
    },
    getProvince: (name, provinceData) => {
      return provinceData.filter(line => line.name === name);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
