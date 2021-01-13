<template>
  <div id="app">
    <h1>Canada Covid-19 Vaccination Rates</h1>
    <p>
      A backwards looking simple projection based on the shared provincial
      vaccination rates published and shared by the <a href="https://github.com/ccodwg/Covid19Canada">
      COVID-19 Canada Open Data Working Group</a>.
    </p>
    <h2>How's it work?</h2>
    <p>
      Data is pulled from the <a href="https://github.com/ccodwg/Covid19Canada">
      CCODWG Github Page</a> and is manipulated by some simple javascript. These
      projections are kludgey. They are only based on the rolling average of
      vaccination rates over the past two weeks, the 2020 Canadian census
      population data, 2 doses per person, and the number of people currently
      vaccinated. <b>These numbers do not account for any uptick in vaccination
      rate, which will hopefully happen</b>. They are meant to show how we're
      doing, and to encourage people to reach out to their MP and MPP and talk
      about why we need to do this faster.
    </p>
    <h2>"Your math is wrong!" "I don't like this" "Oh the humanity!" and other criticisms</h2>
    <p>
      You're probably right! This page is hosted by github. You can <a href="https://github.com/minasmart/canada-covid-vaccine-rate.github.io">
      read my code and suggest changes here</a>.
    </p>
    <h2>Warranties</h2>
    <p>
      There are none. This is bad math. Don't trust it. Do your own research and
      calculations. The data here is presented with no warranties or guarantees
      in regard to accuracy or representation.
    </p>
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
