<template>
  <Modal :closeButtonName="'Close'" ref="deleteCityModal">
    <template #header>
      Delete City
    </template>
    <template #body>
      <select v-model="selectedCityId" class="form-select">
        <option v-if="cities.length === 0" disabled>No Cities Available</option>
        <option v-for="city in cities" :key="city.cityId" :value="city.cityId">
          {{ city.cityName}}
        </option>
      </select>
      <button @click="deleteCity(selectedCityId)" class="btn btn-danger mt-2">Delete Selected City</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/modal/Modal.vue'
import router from "@/router";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      cities: [
        {
          cityId: 0,
          cityName: '',
        }
      ],
      selectedCityId: 0,
    };
  },
  mounted() {
    this.getCities();
  },
  methods: {
    openModal() {
      this.$refs.deleteCityModal.openModal();
    },
    closeModal() {
      this.$refs.deleteCityModal.closeModal();
    },

    getCities() {
      this.$http.get("/city")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    deleteCity(cityId) {
      this.$http.delete(`/city`, { params: { cityId: cityId } })
          .then(() => {
            alert('City successfully deleted')
            this.getCities();
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          });

  },
}
}
</script>