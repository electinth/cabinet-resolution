<template>
  <div class="about-you-section">
    <div class="container">
      <h3>
        แต่! ความจริงแล้ว การตัดสินใจในเรื่องสำคัญ ๆ ของประเทศ
        ประชาชนควรมีส่วนร่วมและตรวจสอบได้…..<br /><br /><br />
        หากไม่มี feedback จากข่าว จากโซเซียลมีเดีย
        การรับรู้ว่าเรื่องเหล่านี้ดำเนินการอย่างไร
        ลำพังการอ่านและการทำความเข้าใจเองคงเป็นไปได้ยาก
        และเราเองก็อาจไม่รู้ถึงการทำงานของครม.เลย<br /><br /><br />
        เพราะโดยปกติการตัดสินใจเหล่านี้ ถ้าตัดสินใจไม่ดี เป็นกลไกของรัฐสภา
        ที่ตรวจสอบด้วย “การอภิปรายไม่ไว้วางใจ”<br /><br /><br />ถ้าหากกลไกนี้ไม่แข็งแรง
        การประชุมอภิปรายไม่ไว้วางใจ ก็เป็นเพียงแค่การประชุมนึงเท่านั้น<br /><br /><br />
        และเป็นที่น่าคิดว่า…..<br /><br /><br />เรื่องสำคัญขนาดนี้<br />
        ควรมีเครื่องมือควรประเมินผลการตัดสินใจหรือไม่?
      </h3>

      <h2>
        แล้วคุณล่ะ อยากให้มีเครื่องมือ<br />
        ตรวจสอบ-ประเมินผล การตัดสินใจเหล่านี้ไหม?
      </h2>

      <div class="btn-wrap">
        <button class="btn-yes">มี</button>

        <button class="btn-no">ไม่มี</button>
      </div>

      <div class="btn-wrap">
        <button class="btn-go-to-top" @click="goToTop">
          <span class="material-icons">
            refresh
          </span>

          ดูฐานข้อมูล มติ ครม. อีกครั้ง
        </button>
      </div>

      <div class="sharer">
        <elect-sharer :url="url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.web_url
    };
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.about-you-section {
  background: $color-pale-green-2;
  text-align: center;
  padding: 200px 0;
  @include media-breakpoint(tablet) {
    padding: 66px 0 120px 0;
  }
  h3 {
    margin: 0;
    font-weight: normal;
  }
  h2 {
    margin: 380px 0 0 0;
    font-weight: normal;
    @include media-breakpoint(tablet) {
      margin: 300px 0 0 0;
    }
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    button {
      font-size: 48px;
      min-width: 192px;
      padding: 8px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      @include media-breakpoint(tablet) {
        font-size: 31px;
        min-width: 136px;
      }
    }
    .btn-yes {
      background: $color-green;
      margin-right: 32px;
      @include media-breakpoint(tablet) {
        margin-right: 16px;
      }
    }
    .btn-no {
      background: $color-pale-red;
    }
    .btn-go-to-top {
      padding: 16px 28px;
      background: $color-green;
      font-size: 25px;
      margin-top: 300px;
      display: flex;
      align-items: center;
      text-align: left;
      @include media-breakpoint(tablet) {
        font-size: 20px;
      }
      .material-icons {
        margin-right: 16px;
        font-size: 30px;
      }
    }
  }
  .sharer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
