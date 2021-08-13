<template>
  <div class="vocab-section">
    <div class="intro">
      <h5>
        คณะรัฐมนตรีพลเอกประยุทธ์ จันทร์โอชา ‘ประยุทธ์-ตู่ไม่รู้ล้ม’
        ได้รับการแต่งตั้งเป็นคณะรัฐมนตรี วันที่ 10 กรกฏาคม 2562 จนถึงปัจจุบัน
        เป็นระยะเวลาเกือบ 2 ปี
      </h5>

      <h5>
        จึงชวนทุกคนมาดูการตัดสินใจ การบริหารงาน ผ่านมติคณะรัฐมนตรี ตั้งแต่
        <span>10 กรกฏาคม 2562 - 5 พฤษภาคม 2564</span>
      </h5>

      <h5>
        คณะรัฐมนตรีนี้ ตัดสินใจกันยังไง ใครเสนอ? มติอะไรบ้าง?
        รายละเอียดเกี่ยวกับมตินั้นคืออะไร? เป็นประเภทไหน?
      </h5>
    </div>

    <div class="vocab">
      <h5>ก่อนจะเริ่ม ขอพามารู้จักคำศัพท์เฉพาะ เพื่อให้เข้าใจได้ง่ายก่อน</h5>

      <ul>
        <li v-for="(vocab, index) in vocabs" :key="index">
          <h3>{{ vocab.title }}</h3>

          <div class="bd1">{{ vocab.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vocabs: [
        {
          title: "มติ",
          text: "คือ ความคิดเห็น"
        },
        {
          title: "รับทราบ",
          text: "คือ รับรู้ว่ารู้แล้ว"
        },
        {
          title: "เห็นชอบ",
          text:
            "คือ เห็นดีด้วย แต่ยังไม่มีรายละเอียดการดำเนินงานใดๆ หลังจาก “เห็นชอบ” แล้ว หน่วยงานที่เกี่ยวข้องต้องจัดทำรายละเอียดการดำเนินการต่อไป"
        },
        {
          title: "อนุมัติหลักการ",
          text:
            "คือ ให้อำนาจกระทำตามระเบียบที่กำหนด รายละเอียดจะกว้างๆหลังจาก “อนุมัติหลักการ” หน่วยงานที่เกี่ยวข้องต้องจัดทำเรื่อง ขออนุมัติต่อไป"
        },
        {
          title: "อนุมัติดำเนินการ",
          text:
            "คือ รายละเอียดการดำเนินการครบถ้วน ได้รับอนุมัติหลักการแล้ว หลังจาก “อนุมัติดำเนินการ” หน่วยงานที่เกี่ยวข้องสามารถนำไปปฏิบัติได้เลย"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.vocab-section {
  padding: 240px 0 190px 0;
  text-align: center;
  color: white;
  .intro {
    width: 844px;
    margin: 0 auto;
    h5 {
      font-weight: normal;
      margin: 0 0 24px 0;
      span {
        color: $color-pale-red;
      }
    }
  }
  .vocab {
    width: 844px;
    margin: 260px auto 0 auto;
    h5 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      margin-top: 60px;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        h3 {
          width: 260px;
          text-align: right;
          margin: 0 30px 0 0;
          font-weight: normal;
          flex: none;
        }
        .bd1 {
          text-align: left;
        }
      }
    }
  }
}
</style>
