<template>
  <div class="requirement-section">
    <div class="container">
      <h2>
        เรื่องเหล่านี้ก็ถือเป็น<br />
        สิ่งที่ ครม. ต้องกำหนดด้วย?
      </h2>

      <div class="content">
        <div class="row">
          <div class="card">
            <h4 class="font-anuphan">1. เพลงสำคัญของแผ่นดิน</h4>

            <h6 class="font-anuphan">
              คณะรัฐมนตรีมีมติ "เห็นชอบ" ให้เพลงสดุดีจอมราชา
              และเพลงสดุดีพระแม่ไทย "เป็นเพลงสำคัญของแผ่นดิน" (เพิ่มเติม)
            </h6>
          </div>

          <div class="card">
            <h4 class="font-anuphan">
              2. การกำหนดวันสำคัญของชาติ วันรู้รักสามัคคี
            </h4>

            <h6 class="font-anuphan">
              คณะรัฐมนตรีมีมติ "เห็นชอบ" กำหนดให้วันที่ 4 ธันวาคม ของทุกปี
              "เป็นวันรู้รักสามัคคี เป็นวันสำคัญของชาติ"
              โดยไม่ถือเป็นวันหยุดราชการ
            </h6>
          </div>
        </div>

        <div class="card">
          <h4 class="font-anuphan">
            3. โครงการ “จิตอาสาพระราชทาน ๙๐๔ วปร.”
          </h4>

          <h6 class="font-anuphan">
            <p>
              เป็นโครงการที่จะส่งเสริมการมีส่วนร่วมของประชาชนในการพัฒนาประเทศ
            </p>

            <p>
              โดยเชิญชวนประชาชนจิตอาสาตามพระราชดำริของสมเด็จพระเจ้าอยู่หัว
              และต่อมาก็มีการตั้งคณะกรรมการกลาง (ปลัดมหาดไทยเป็นประธาน)
              และศูนย์อำนวยการใหญ่ (หรือ ศอญ. ตั้งโดยคำสั่งส่วนราชการในพระองค์
              904)
            </p>

            ประเภทของกิจกรรมมี 3 ประเภท ได้แก่
            <ul>
              <li>จิตอาสาพัฒนา</li>

              <li>จิตอาสาภัยพิบัติ</li>

              <li>จิตอจิตอาสาเฉพาะกิจาสาพัฒนา</li>
            </ul>

            2 ภารกิจสำคัญคือ
            <ul>
              <li>การรับเสด็จ</li>

              <li>ภารกิจการพัฒนาตามความเหมาะสมของพื้นที่</li>
            </ul>

            <p>
              ทั้งนี้ มติ ค.ร.ม. วันที่ 23/1/2561 กำหนดว่า
              "จะต้องรายงานผลการดำเนินงานทุกเดือนอีกด้วย"
              และโครงการนี้ปรากฎเป็นมติรับทราบของ ครม.
            </p>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.requirement-section {
  padding: 140px 0 200px 0;
  @media (max-width: 767px) {
    padding: 115px 0 86px 0;
  }
  h2 {
    font-weight: normal;
    margin: 0;
    color: white;
    text-align: center;
  }
  .content {
    margin-top: 24px;
    .card {
      background: $color-green;
      color: $color-dark-green;
      padding: 24px;
      margin-top: 24px;
      h4 {
        margin: 0;
      }
      h6 {
        font-weight: normal;
        margin: 16px 0 0 0;
      }
      ul {
        margin-top: 0;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .row {
      display: flex;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      .card {
        flex: 1;
      }
      .card:first-child {
        margin-right: 24px;
        @media (max-width: 767px) {
          margin: 0;
        }
      }
    }
  }
}
</style>
