<template>
  <div>
    <h2>Brewery Details for {{ breweryDetails.name }}</h2>
    <img src="../assets/beer-mug.svg" class="image"/>
    <div>
      <p>Latitude: {{ breweryDetails.latitude }}</p>
      <p>Longitude: {{ breweryDetails.longitude }}</p>
      <p>Address: {{ breweryDetails.address }}</p>
      <p>Address1: {{ breweryDetails.address_1 }}</p>
      <p>Address2: {{ breweryDetails.address_2 }}</p>
      <p>Type: {{ breweryDetails.brewery_type }}</p>
      <p>State Province: {{ breweryDetails.state_province }}</p>
    </div>
    <button type="submit" @click="back()">Back</button>
  </div>
</template>

<script>
import BeerService from "../services/BeerService";
export default {
  data() {
    return {
      breweryDetails: {},
    };
  },
  mounted() {
    this.getBreweryById().then();
  },
  methods: {
    async getBreweryById() {
      try {
        this.breweryDetails = await BeerService.getBreweryById(
          this.$route.params.id
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    back() {
      this.$router.push(`/list`);
    },
  },
};
</script>

<style></style>