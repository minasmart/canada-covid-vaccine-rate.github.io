import staticData from './static';

export default function load() {
  return fetch("https://raw.githubusercontent.com/ccodwg/Covid19Canada/master/timeseries_prov/vaccine_administration_timeseries_prov.csv")
    .then(response => response.text())
    .then(data => {
      return data
        .split("\n")
        .slice(1, -1)
        .map(row => row.split(","))
        .map(row => {
          return row.map(element => {
            return JSON.parse(element);
          })
        })
        .reduce((provinceAccumulator, row) => {
          const provinceName = row[0];
          const population = staticData
            .find(province => province.name === provinceName)
            .population;
          const ddmmYYYYDate = row[1];
          const YYYYmmddDate = ddmmYYYYDate
            .split("-")
            .reverse()
            .join("-");
          const parsedDate = Date.parse(YYYYmmddDate);
          const provinceData = {
            name: provinceName,
            population,
            dateRaw: ddmmYYYYDate,
            dateParsed: parsedDate,
            vaccinatedOnDay: row[2],
            cumulativeVaccination: row[3]
          };

        return [...provinceAccumulator, provinceData];
      }, []);
    });
}
