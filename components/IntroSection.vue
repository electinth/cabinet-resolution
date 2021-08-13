<template>
  <div class="intro-section">
    <div class="left">
      <h1>
        เกือบจะ 2 ปีแล้ว คณะรัฐมนตรี ‘พลเอกประยุทธ์ - ตู่ไม่รู้ล้ม’
        ทำอะไรไปบ้าง?
      </h1>
    </div>

    <div class="right">
      <div
        v-for="(menu, index) in menu_list"
        :key="index"
        :style="{ background: menu.color }"
        class="menu"
        @click="goToSection(menu.id)"
      >
        <h4 v-html="menu.name"></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          id: "#year-chart-section",
          name: "ฐานข้อมูลมติ ครม.<br/>ใน 2 ปี",
          color: "#EEA690"
        },
        {
          id: "#covid-chart-section",
          name: "มติเกี่ยวกับ<br/>COVID-19",
          color: "#99E9DA"
        },
        {
          id: "#read-more-section",
          name: "อ่านเพิ่มเติม<br/>เกี่ยวกับ ครม.",
          color: "#F7F4BF"
        }
      ]
    };
  },
  methods: {
    goToSection(id) {
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.intro-section {
  min-height: 100vh;
  display: flex;
  text-align: center;
  .left {
    width: 55%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: white;
    }
  }
  .right {
    width: 45%;
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    .menu {
      flex: 1;
      border-radius: 10px;
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      h4 {
        font-weight: normal;
      }
    }
    .menu:last-child {
      margin-bottom: 16px;
    }
  }
}
</style>
