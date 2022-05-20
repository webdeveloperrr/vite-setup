<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Welcome banner -->
          <WelcomeBanner />

          <div class="bg-orange-300 w-full h-[10rem]"></div>

        </div>
      </main>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../common/components/Sidebar.vue'
import WelcomeBanner from '../common/components/WelcomeBanner.vue'


export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    WelcomeBanner,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }

  }
}
</script>