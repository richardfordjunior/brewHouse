<template>
  <div>
    <h2>Brewery List</h2>
    <img src="../assets/beer-mug.svg" class="image"/>
    <input class="search" v-model="search" placeholder="Search by Brewery Name" type="text">
    <img src="../assets/beer-mug.svg" class="image"/>
    <div ref="main">
    <b-table 
    class= "table"
      id="data-table"
      :per-page="perPage"
      :current-page="currentPage"
      responsive
      :items="filteredItems"
      :fields="fields"
      sort-icon-right
      small
    >
      <template v-slot:cell(website_url)="row">
        <div>
          <a v-if="row.value"
            class="action-icons"
            href="row"
            @click.prevent="navigateToUrl(row.value)">{{ row.value }}</a>
          <a v-else-if="!row.value">No website on record</a>
        </div>
      </template>
      <template v-slot:cell(more_info)="row"
          ><div>
            <a class="action-icons"
              href="row"
              @click.prevent="navigateToDetails(row.item.id)"
              >More Info</a>
          </div>
        </template>
    </b-table>
    </div>
    <b-pagination
      v-if="breweryData"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="data-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import BeerService from '../services/BeerService';
export default {
  data() {
    return {
      breweryData: [],
      currentPage: 1,
      perPage: 10,
      search:'',
      filteredData:[],
      fields: [
        { key: "name", sortable: true, label: "Name" },
        { key: "address_1", sortable: false, label: "Address" },
        { key: "city", sortable: false, label: "City" },
        { key: "brewery_type", sortable: false, label: "Type" },
        { key: "state", sortable: true, label: "State" },
        { key: "country", sortable: false, label: "Country" },
        { key: "postal_code", sortable: false, label: "Postal Code" },
        { key: "state_province", sortable: false, label: "Province" },
        { key: "website_url", sortable: false, label: "Site Url" },
        { key: "more_info", sortable: false, label: "Details" },
      ],
    };
  },
  methods: {
    async getBeerList() {
      const opts = { page: 1, per_page: this.perPage };
      try {
        this.breweryData = await BeerService.getBeers(opts);
      } catch (error) {
        throw new Error(error);
      }
    },
    navigateToUrl(url) {
      window.open(url, "_blank");
    },
    navigateToDetails(id) {
      if(!id) return;
       this.$router.push(`/brewery_details/${id}`)
    },
  },
  mounted() {
    this.getBeerList().then();
  },
  computed: {
    rows() {
      return this.breweryData.length;
    },
    filteredItems() {
      if (!this.search) return this.breweryData;
      return this.breweryData.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
};
</script>
<style scoped>
.search{
   width: 25%;
}
.table{
  padding-top: 10px;
}
</style>