<template>
  <div>
    <select v-model="selectedCityId" class="centered-dropdown">
      <option v-if="cities.length === 0" disabled>No Cities Available</option>
      <option v-for="city in cities" :key="city.cityId" :value="city.cityId">
        {{ city.cityName }}
      </option>
    </select>
    <button @click="getCityWeather" class="btn btn-primary mt-2">OK</button>
    <div v-if="weatherData" v-for="weather in weatherData">
      <h3>{{weather.name}}</h3>
      <p>Temperature: {{ weather.main.temp }}°C</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
      <p>Date: {{ new Date(weather.dt).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      cities: [
        {
          cityId: 0,
          cityName:''
        }
      ],
      selectedCityId: 0,
      weatherData: [
        {
          main: {
            humidity: 0,
            temp: 0
          },
          wind: {
            speed: 0
          },
          dt: '2023-09-25T10:56:51.873Z',
          name: ''
        }
      ]
    };
  },
  mounted() {
    this.getCities();

  },
  methods: {
    getCities() {
      this.$http.get("/city")
          .then(response => {
            this.cities = response.data;
          })
          .catch(error => {
            router.push({name: 'errorRoute'});
          });
    },
    getCityWeather() {
      if (this.selectedCityId) {
        this.$http.get(`/city/weather`, { params: { cityId: this.selectedCityId } })
            .then(response => {
              this.weatherData = response.data;
            })
            .catch(error => {
              router.push({name: 'errorRoute'});
            });
      }
    }
  }
}
</script>

<style scoped>
.centered-dropdown {
  width: 25%; /* Adjust as necessary */
  margin: 0 auto; /* Centering */
  display: block; /* Needed for margin: auto to work */
}
</style>