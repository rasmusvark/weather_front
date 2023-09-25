<template>
  <Modal :closeButtonName="'Close'" ref="addCityModal">
    <template #header>
      Add City
    </template>
    <template #body>
      <input v-model="cityName" type="text" class="form-control" placeholder="City name" />
      <button @click="addCity" class="btn btn-success mt-2">Add City</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/modal/Modal.vue';
import router from "@/router";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      cityName: '',
      errorResponse: {
        message: '',
        errorCode: 0
      },
    };
  },
  methods: {
    openModal() {
      this.$refs.addCityModal.openModal();
    },
    closeModal() {
      this.$refs.addCityModal.closeModal();
    },
    addCity() {
      if (!this.cityName) {
        alert('Please enter a city name!');
        return;
      }
      this.$http.post(`/city`, null, { params: { cityName: this.cityName } })
          .then(() => {
            this.cityName = '';
            alert('City is successfully added!');
          })
          .catch(error => {
            this.errorResponse = error.response.data
            if (this.errorResponse.errorCode===333) {
              alert(this.errorResponse.message)
            } else if (this.errorResponse.errorCode === 222) {
              alert(this.errorResponse.message)
            } else {
              router.push({name:'errorRoute'})
            }
          });
    },
  },
};
</script>