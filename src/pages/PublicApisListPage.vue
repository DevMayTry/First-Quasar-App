<template>
  <q-page padding>
    <q-table
      class="header-colored"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:top>
        <span class="title">PUBLIC APIS</span>
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter" placeholder="Type to search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import entriesService from 'src/services/entriesService'

export default defineComponent({
  name: 'PublicApisListPage',
  setup () {
    const loading = ref(false)
    const filter = ref('')
    const { list } = entriesService()
    const columns = [
      { name: 'API', field: 'API', label: 'API', sortable: true, align: 'center' },
      { name: 'Description', field: 'Description', label: 'Description', align: 'center' },
      { name: 'Auth', field: 'Auth', label: 'Auth', sortable: true, align: 'center' },
      { name: 'HTTPS', field: 'HTTPS', label: 'HTTPS', sortable: true, align: 'center' },
      { name: 'Cors', field: 'Cors', label: 'Cors', sortable: true, align: 'center' },
      { name: 'Link', field: 'Link', label: 'Link', align: 'center' },
      { name: 'Category', field: 'Category', label: 'Category', sortable: true, align: 'center' }
    ]
    const rows = ref<any[]>([])

    onMounted(() => {
      getEntries()
    })

    const getEntries = async () => {
      loading.value = true
      try {
        const entries = await list()
        if (entries) {
          rows.value = entries
        }
        loading.value = false
      } catch (error) {
        console.log(error)
        loading.value = false
      }
    }

    return { columns, rows, loading, filter }
  }
})
</script>

<style lang="sass">
  .title
    font-size: 21px

  .header-colored
    /* height or max-height is important */
    max-height: 80vh

    tr th
      position: sticky
      /* higher than z-index for td below */
      z-index: 2
      /* bg color is important; just specify one */
      background: #00b4ff

    /* this will be the loading indicator */
    thead tr:last-child th
      /* height of all previous header rows */
      top: 48px
      /* highest z-index */
      z-index: 3
    thead tr:first-child th
      top: 0
      z-index: 1
    tr:first-child th:first-child
      /* highest z-index */
      z-index: 3

    td:first-child
      z-index: 1

    /* prevent scrolling behind sticky top row on focus */
    tbody
      /* height of all previous header rows */
      scroll-margin-top: 48px
</style>
