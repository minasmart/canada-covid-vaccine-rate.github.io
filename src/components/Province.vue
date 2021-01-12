<template>
  <div class="province">
    <h2>{{ provinceName(provinceData) }}</h2>
    <p>doses administered: <b>{{ dosesAdministered(provinceData) }}</b></p>
    <p>average administration rate over last two weeks: <b>{{ averageAdministrationRate(provinceData, 14) }} doses per day</b></p>
    <h3>based on the two doses per person</h3>
    <p>doses remaining for 100% vaccination: <b>{{ dosesRemaining(provinceData, 100) }}</b></p>
    <p>doses remaining for 80% vaccination: <b>{{ dosesRemaining(provinceData, 80) }}</b></p>
    <h3>based on the two week rolling average</h3>
    <p>time left to vaccinate the whole province: <b>{{ timeLeft(provinceData, 100) }}</b></p>
    <p>time left to vaccinate 80% (herd immunity?): <b>{{ timeLeft(provinceData, 80) }}</b></p>
    <hr/>
  </div>
</template>

<script>
function getPopulation(provinceData) {
  return provinceData[0].population;
}
function getDosesAdministerd(provinceData) {
  return provinceData.slice().sort(line => line.dateParsed).pop().cumulativeVaccination;
}
function getDosesRemaining(provinceData, percentage) {
  return getPopulation(provinceData) * 2 * percentage / 100 - getDosesAdministerd(provinceData);
}
function getAverageAdministrationRate(provinceData, daysBack) {
  const totalOverSpan = provinceData
    .slice()
    .sort(line => line.dateParsed)
    .slice(-daysBack)
    .reduce((total, line) => {
      return total + line.vaccinatedOnDay;
    }, 0);

  return totalOverSpan / daysBack;
}
function stringifyInt(number) {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 0
  });
}
export default {
  name: "Province",
  props: ['provinceData'],
  methods: {
    provinceName: (provinceData) => {
      return provinceData[0].name;
    },
    dosesAdministered: (provinceData) => {
      return stringifyInt(getDosesAdministerd(provinceData));
    },
    dosesRemaining: (provinceData, percentage) => {
      return stringifyInt(getDosesRemaining(provinceData, percentage));
    },
    averageAdministrationRate: (provinceData, daysBack) => {
      return stringifyInt(getAverageAdministrationRate(provinceData, daysBack));
    },
    timeLeft: (provinceData, percentage) => {
      const remainingDoses = getDosesRemaining(provinceData, percentage);
      const averageAdministrationRate = getAverageAdministrationRate(provinceData, 14);
      const totalDays = remainingDoses / averageAdministrationRate;
      const years = totalDays / 365 - 0.5;
      const months = totalDays % 365 / 30 - 0.5;
      const weeks = totalDays % 365 % 30 / 7 - 0.5;
      const days = totalDays % 365 % 30 % 7 - 0.5;

      const timeUnitsLeft = [];

      if (years >= 1) timeUnitsLeft.push(`${stringifyInt(years)} years`);
      if (months >= 1) timeUnitsLeft.push(`${stringifyInt(months)} months`);
      if (weeks >= 1) timeUnitsLeft.push(`${stringifyInt(weeks)} weeks`);
      if (days >= 1) timeUnitsLeft.push(`${stringifyInt(days)} days`);

      return timeUnitsLeft.join(", ");
    }
  }
}
</script>
