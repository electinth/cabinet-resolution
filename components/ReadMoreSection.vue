<template>
  <div class="read-more-section">
    <div class="container">
      <h2>อ่านเพิ่มเติมเกี่ยวกับ ครม.</h2>

      <el-collapse v-model="active_collapse" accordion>
        <el-collapse-item
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          :name="index + 1"
        >
          <div v-html="item.text"></div>
        </el-collapse-item>
      </el-collapse>

      <h4>ติดตามเกี่ยวกับเรื่อง โควิด-19 เพิ่มเติม</h4>

      <div class="row">
        <a
          href="https://covid19.actai.co/"
          target="_blank"
          rel="noopener noreferrer"
          class="card"
        >
          <img :src="covid_act_image" :alt="covid_act_image" />

          <div class="bd1">
            จับโกงงบ COVID ด้วย ACT Ai ร่วมติดตามและตรวจสอบการใช้งบประมาณ
            400,000 ล้านบาท
          </div>
        </a>

        <a
          href="https://covid-19.researcherth.co/vaccination?fbclid=IwAR3ivupuO_Iph0vAWos--IKwlnQRl8SKXzLIZKnQUkV3PvetKcZoxWjWijs"
          target="_blank"
          rel="noopener noreferrer"
          class="card"
        >
          <img :src="researcher_image" :alt="researcher_image" />

          <div class="bd1">
            รายงานการฉีดวัคซีนในประเทศไทย The researcher
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_collapse: [],
      covid_act_image: require("~/assets/images/covid_act.jpg"),
      researcher_image: require("~/assets/images/researcher.jpg"),
      list: [
        {
          title: "คณะรัฐมนตรีคือใคร ?",
          text:
            "เป็นกลุ่มบุคคลหลักในการขับเคลื่อนและบริหารราชการแผ่นดินในส่วนราชการต่างๆของรัฐบาลไทย"
        },
        {
          title: "จะเป็นครม. ได้อย่างไร?",
          text:
            "ประกอบไปด้วย นายกรัฐมนตรีเป็นหัวหน้าคณะ รองนายกรัฐมนตรี และรัฐมนตรีประจำกระทรวงต่างๆ ซึ่งสมาชิกในคณะรัฐมนตรีจะถูกเสนอชื่อโดยนายกรัฐมนตรี และได้รับการแต่งตั้งอย่างเป็นทางการจากพระมหากษัตริย์ไทย"
        },
        {
          title: "ครม. ทำอะไรบ้าง ?",
          text:
            "มีอำนาจ ดังนี้<br/>1. ใช้กฎหมาย : เมื่อกฎหมายถูกตราโดยรัฐสภาแล้ว จะเป็นผู้บังคับใช้กฎหมายเหล่านั้น<br/>2. กำหนดโนบายบริหารราชการแผ่นดิน : สามารถบริหารตามแนวคิดของคณะรัฐมนตรีนั้นๆหรือควบคุมบังคับบัญชาข้าราชการและเจ้าหน้าที่ของรัฐทั่วประเทศได้<br/>3. อำนาจภายนอกประเทศ : เป็นตัวแทนฐานะรัฐไทย ใช้อำนาจในการติดต่อกับต่างประเทศ หรือกระทำการต่างๆที่ผูกพันกับประเทศ <br/><br/>มีหน้าที่ ดังนี้<br/>1. บริหารราชการแผ่นดิน : กำหนดนโนบายตามที่แถลงขอต่อรัฐสภา ควบคุมข้าราชการประจำให้นำนโนบายไปปฏิบัติให้เกิดผล ประสานงานกับกระทรวง ทบวง กรมต่างๆ ที่มีความเกี่ยวข้องให้ร่วมมือกัน<br/>2. กำหนดระเบียบหรือข้อบังคับ : กำหนดในเรื่องต่างๆที่ไม่ขัดต่อกฎหมาย เพื่อให้กระทรวง ทบวง กรม ยึดถือเป็นแนวปฏิบัติ<br/>3. พิจารณาและมีมติในเรื่องต่างๆ ที่เสนอมาให้วินิจฉัยชี้ขาด : ไม่ว่าจะเป็นทั้งกฎหมาย ระเบียบ กำหนดให้ หรือนโยบาย ต้องได้รับการอนุมัติจากคณะรัฐมนตรีก่อน"
        },
        {
          title: "ครม. ทำหน้าที่ / ตัดสินใจเรื่องสำคัญอย่างไร?",
          text:
            "1. เมื่อหน่วยงานของรัฐประสงค์เสนอเรื่องต่อคณะรัฐมนตรี ส่งเรื่องมายังสำนักเลขาธิการคณะรัฐมนตรี<br/>2. สำนักเลขาธิการคณะรัฐมนตรีจะศึกษาวิเคราะห์เรื่องนั้นๆ ว่าจำเป็นต้องขอความเห็นจากหน่วยงานของรัฐอื่นๆ ที่เกี่ยวข้องเพื่อนำมาเป็นข้อมูลประกอบการตัดสินใจหรือไม่ หากจำเป็นก็จะส่งไปขอความเห็น<br/>3. จัดทำบันทึกสรุปเรื่องเสนอนายกรัฐมนตรีหรือรองนายกรัฐมนตรีที่ได้รับมอบหมาย สั่งการว่าจะสมควรดำเนินการต่อเรื่องนั้นอย่างไร<br/>4. เรื่องที่สมควรได้รับการพิจารณาอย่างรอบคอบเป็นพิเศษ อาจได้รับการสั่งการให้นำเสนอคณะกรรมการกลั่นกรองเรื่องเสนอคณะรัฐมนตรีพิจารณา ก่อนที่จะนำเสนอคณะรัฐมนตรี<br/>5. และจะมีเรื่องอีกส่วนที่จะได้รับการสั่งการและให้นำเสนอคณะรัฐมนตรีได้โดยตรง<br/>6. เรื่องทั้งหมดเข้าสู่วาระการประชุมคณะรัฐมนตรี 'ผลการตัดสินใจเรียกว่า มติ' จะแจ้งมติคณะรัฐมนตรีไปยังหน่วยงานของรัฐเป็นเจ้าของเรื่องที่เสนอความเห็นมา เพื่อประกอบการพิจารณาของคณะรัฐมนตรีและหน่วยงานอื่นๆ"
        },
        {
          title: "การประชุมของค.ร.ม. เกิดขึ้นที่ไหนและเมื่อไหร่บ้าง?",
          text:
            "การประชุมทุกวันอังคาร สถานที่อาจเป็นสถานที่ที่กำหนด หรือวิธีอื่นใดที่ผู้ร่วมประชุมสามารถปรึกษาหารือได้แม้มิได้อยู่ที่เดียวกัน ตามที่นายกรัฐมนตรีกำหนด เช่น Video Conference โดยต้องมีรัฐมนตรีเข้าร่วมประชุมไม่น้อยกว่า 1 ใน 3 ของจำนวนคณะรัฐมนตรีทั้งหมดที่มีอยู่"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.read-more-section {
  background: $color-dark-green;
  padding: 100px 0 130px 0;
  color: white;
  @media (max-width: 767px) {
    padding: 50px 0 116px 0;
  }
  h2 {
    font-weight: normal;
    margin: 0;
    text-align: center;
  }
  .el-collapse {
    width: 608px;
    margin: 46px auto 0 auto;
    border: none;
    @media (max-width: 767px) {
      width: 100%;
    }
    .el-collapse-item {
      margin-top: 10px;
      ::v-deep {
        .el-collapse-item__header {
          background: $color-pale-red;
          border: none;
          font-size: 25px;
          padding: 24px;
          height: auto;
          @media (max-width: 767px) {
            font-size: 16px;
            line-height: 130%;
          }
        }
        .el-collapse-item__content {
          background: $color-pale-red;
          padding: 0 24px 24px 24px;
          font-size: 18px;
        }
        .el-collapse-item__wrap {
          border: none;
        }
      }
    }
  }
  h4 {
    font-weight: normal;
    margin: 180px 0 0 0;
    text-align: center;
    @media (max-width: 767px) {
      margin: 88px 0 0 0;
    }
  }
  .row {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      display: block;
    }
    .card {
      display: block;
      text-decoration: none;
      width: 282px;
      color: white;
      @media (max-width: 767px) {
        margin-top: 42px;
        width: 100%;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
      .bd1 {
        margin-top: 20px;
      }
    }
    .card:first-child {
      margin-right: 42px;
    }
  }
}
</style>
