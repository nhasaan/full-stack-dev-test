<template>
  <div class="container-fluid">
    <div class="text-center">
      <h3 class="title">
        Product datatable using vuetify
      </h3>
      <hr>
      <div v-if="products.length === 0">
        <h2>No product found at the moment</h2>
      </div>
    </div>
    <!-- @update:pagination="onChangePagination" -->
    <div id="app">
      <v-app>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="products"
          :options.sync="options"
          :server-items-length="totalProducts"
          :loading="loading"
          :dense="dense"
          :page="page"
          :items-per-page="itemsPerPage"
          :single-select="singleSelect"
          sort-by="create_at"
          item-key="_id"
          show-select
          class="elevation-1"
        >
          <template v-slot:item.thumb_url="{ item }">
            <div class="p-2">
              <v-img :src="item.thumb_url" :alt="item.title" width="100px" />
            </div>
          </template>
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Product CRUD</v-toolbar-title>
              <v-divider class="mx-4" inset vertical />
              <v-spacer />
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" color="primary" dark class="mb-2">
                    Create Product
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="editedItem.title" label="Product title" />
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="editedItem.price" type="number" label="Price" />
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.quantity"
                            type="number"
                            label="Quantity"
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-img
                            :src="editedItem.thumb_url"
                            :lazy-src="editedItem.thumb_url"
                            class="grey lighten-2"
                            style="max-width: 100px; margin: auto;"
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-textarea v-model="editedItem.description" label="Description" />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn @click="close" color="blue darken-1" text>
                      Cancel
                    </v-btn>
                    <v-btn @click="save" color="blue darken-1" text>
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon @click="editItem(item)" small class="mr-2">
              edit
            </v-icon>
            <v-icon @click="deleteItem(item)" small>
              delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn @click="fetchProducts" color="primary">
              Reset
            </v-btn>
          </template>
          <!-- <v-pagination :length="pagination.total / 5" v-model="pagination.page" :total-visible="pagination.visible"></v-pagination> -->
        </v-data-table>
      </v-app>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import { server } from '../helper'
export default {
  layout: 'admin-layout',
  data: () => ({
    totalProducts: 0,
    page: 1,
    itemsPerPage: 5,
    loading: true,
    dense: true,
    options: {},
    dialog: false,
    singleSelect: true,
    selected: [],
    headers: [
      {
        text: 'Title',
        align: 'left',
        sortable: false,
        value: 'title'
      },
      { text: 'Price', sortable: true, value: 'price' },
      { text: 'Quantity', sortable: true, value: 'quantity' },
      { text: 'Thumb', sortable: false, value: 'thumb_url' },
      // { text: 'Description', sortable: false, value: 'description' },
      { text: 'Created', value: 'created_at' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      price: 20,
      quantity: 30,
      thumb_url: '/img/macbook-pro-16-inch.jpg',
      description: ''
    },
    defaultItem: {
      title: '',
      price: 20,
      quantity: 30,
      thumb_url: '/img/macbook-pro-16-inch.jpg',
      description: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Create Product' : 'Edit Product'
    },
    url () {
      return `${process.env.API_BASE_URL}/products?page=${this.page}&limit=${this.itemsPerPage}`
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    options: {
      handler () {
        this.loading = true
        setTimeout(() => {
          this.fetchProducts()
        }, 500)
      },
      deep: true
    }
  },
  // created () {
  //   this.fetchProducts()
  // },
  methods: {
    fetchProducts () {
      const { page, itemsPerPage } = this.options
      this.page = page
      this.itemsPerPage = itemsPerPage
      axios.get(this.url).then((response) => {
        this.products = response.data.docs
        this.totalProducts = response.data.totalDocs
        this.loading = false
      })
    },
    // onChangePagination (pagination) {
    //   console.log('update:pagination', pagination)
    // },
    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.products.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        axios
          .delete(`${process.env.API_BASE_URL}/products/${item._id}`)
          .then((data) => {
            this.products.splice(index, 1)
            this.$toast.show(
              "Success! '" + item.title + "' product deleted...",
              {
                position: 'bottom-center',
                duration: 3000
              }
            )
          })
      }
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem)
        const payload = this.editedItem
        axios
          .put(`${process.env.API_BASE_URL}/products/${payload._id}`, payload)
          .then((data) => {
            // console.log(data);
            this.$toast.show(
              "Success! Product '" + payload.title + "' updated...",
              {
                position: 'bottom-center',
                duration: 3000
              }
            )
          })
      } else {
        const payload = this.editedItem
        axios
          .post(`${process.env.API_BASE_URL}/products`, payload)
          .then((data) => {
            // console.log(data);
            this.products.push(this.editedItem)
            this.$toast.show(
              "Success! New product '" + payload.title + "' created.",
              {
                position: 'bottom-center',
                duration: 3000
              }
            )
          })
      }
      this.close()
    }
  }
}
</script>

<style scoped>
.v-dialog .container {
  min-height: inherit;
}
</style>
