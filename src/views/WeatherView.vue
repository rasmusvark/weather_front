<template>
  <div class="container text-center">
    <div class="col">
      <div class="row justify-content-center mb-3">
        <button @click="openWeatherInformationView" type="button" class="btn btn-outline-success narrow-button">Weather Info</button>
      </div>
      <div class="row justify-content-center mb-3">
        <button @click="openAddCityModal" type="button" class="btn btn-outline-success narrow-button">Add City</button>
        <AddCityModal ref="addCityModal"/>
      </div>
      <div class="row justify-content-center mb-3">
        <button @click="openDeleteCityModal" type="button" class="btn btn-outline-danger narrow-button">Delete City</button>
        <DeleteCityModal ref="deleteCityModal" />
      </div>
    </div>
  </div>
</template>

<script>


import DeleteCityModal from "@/components/modal/DeleteCityModal.vue";
import AddCityModal from "@/components/modal/AddCityModal.vue";
import router from "@/router";

export default {
  components: {AddCityModal, DeleteCityModal},
  methods: {
    openDeleteCityModal() {
      this.$refs.deleteCityModal.getCities()
      this.$refs.deleteCityModal.openModal();
    },
    openAddCityModal() {
      this.$refs.addCityModal.openModal();
    },
    openWeatherInformationView() {
      router.push({name: 'weatherInformationRoute'})
    },

  },
}

</script>

<style scoped>
.row {
  margin-bottom: 10px;
}

.narrow-button {
  width: 150px; /* or any specific width */
  padding-left: 8px;
  padding-right: 8px;
}
</style>