<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          First Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          AppMenu
        </q-item-label>

        <AppMenu
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppMenu from 'components/AppMenu.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'home sweet home',
    icon: 'home',
    route: { name: 'home' }
  },
  {
    title: 'Public Apis',
    caption: 'list of public apis',
    icon: 'api',
    route: { name: 'publicApisList' }
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    AppMenu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      menuLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
