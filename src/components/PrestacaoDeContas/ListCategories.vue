<template>
  <div>
    <div v-for="category in categories" v-bind:key="category.id" class="">
      <p>{{category.name}}</p>
      <br>
      <!-- <img v-bind:src="category.image" height="100" width="200"> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ListCategories',
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/default',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'categories/default',
    }),
  },
};
</script>
