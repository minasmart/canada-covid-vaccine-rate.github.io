<template>
  <div id="app">
    <p>These calculations assume 2 doses per person and use backward facing data. There are many projections assuming administration will speed up (it probably will), but who knows by how much. These calculations are based on backward looking averages and projecting forward assuming we're on a steady state from the last two weeks.</p>
    <hr />
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
