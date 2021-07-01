<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="handleDrawerToggle" />
    <v-spacer />

    <v-toolbar v-if="extended" slot="extension" tag="div" dense color="white" light>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="pa-3" />
      <v-spacer></v-spacer>
      <v-btn icon small color="black">
        <v-icon @click="handleGoBack" v-text="'mdi-arrow-left'" />
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>
<script>
import Util from '@/util'
import { mapGetters } from 'vuex'
export default {
  name: 'AppToolbar',
  components: {},
  props: {
    extended: Boolean,
  },
  data() {
    return {
      profileMenus: [
        {
          icon: 'mdi-account',
          href: '#',
          title: 'Profile',
          click: this.handleProfile,
        },
        {
          icon: 'mdi-cog',
          href: '#',
          title: 'Settings',
          click: this.handleSetting,
        },
        {
          icon: 'mdi-power',
          href: '#',
          title: 'Logout',
          click: this.handleLogut,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getAvatar', 'getUsername', 'getNotification']),
    breadcrumbs() {
      const { matched } = this.$route
      return matched.map((route, index) => {
        const to = index === matched.length - 1 ? this.$route.path : route.path || route.redirect
        const text = this.$t(route.meta.title)
        return {
          text: text,
          to: to,
          exact: true,
          disabled: false,
        }
      })
    },
  },
  created() {},
  methods: {
    handleDrawerToggle() {
      this.$emit('side-icon-click')
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    handleLogut() {
      if (window.confirm('Are you sure to logout?')) {
        this.$store.dispatch('logout')
        window._VMA.$emit('SHOW_SNACKBAR', {
          text: 'Logout successfull',
          color: 'success',
        })
        this.$router.push('/auth/login')
      }
    },

    handleSetting() {},
    handleProfile() {},
    handleGoBack() {
      this.$router.go(-1)
    },
  },
}
</script>
