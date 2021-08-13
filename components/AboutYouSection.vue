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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-you-section {
  background: $color-pale-green-2;
  text-align: center;
  padding: 200px 0 400px 0;
  h3 {
    margin: 0;
    font-weight: normal;
  }
  h2 {
    margin: 380px 0 0 0;
    font-weight: normal;
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
    }
    .btn-yes {
      background: $color-green;
      margin-right: 32px;
    }
    .btn-no {
      background: $color-pale-red;
    }
  }
}
</style>
