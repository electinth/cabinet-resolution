<template>
  <div class="layout">
    <elect-navbar title-text=" ">
      <div v-if="$mq === 'mobile'">
        <button class="btn-hamburger" @click="drawer = true">
          <span class="material-icons">menu</span>
        </button>

        <el-drawer :visible.sync="drawer" size="100%" direction="rtl">
          <div class="menu-wrap mobile">
            <nuxt-link
              :to="menu.value"
              v-for="(menu, index) in menu_list"
              :key="index"
              @click.native="drawer = false"
            >
              {{ menu.name }}
            </nuxt-link>
          </div>
        </el-drawer>
      </div>

      <div v-else class="menu-wrap">
        <nuxt-link
          :to="menu.value"
          v-for="(menu, index) in menu_list"
          :key="index"
        >
          {{ menu.name }}
        </nuxt-link>
      </div>
    </elect-navbar>

    <Nuxt />

    <elect-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          name: "สรุปข้อมูลมติ ครม.",
          value: "/#year-chart-section"
        },
        {
          name: "ฐานข้อมูลมติ ครม.",
          value: "/database"
        },
        {
          name: "มติเกี่ยวกับ COVID-19",
          value: "/#covid-chart-section"
        },
        {
          name: "เกี่ยวกับโครงการ",
          value: "/about"
        }
      ],
      drawer: false
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-wrap {
  display: flex;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    margin-left: 32px;
    @media (max-width: 767px) {
      margin: 32px 0 0 0;
    }
  }
}
.menu-wrap.mobile {
  flex-direction: column;
}
.btn-hamburger {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 100%;
}
</style>
