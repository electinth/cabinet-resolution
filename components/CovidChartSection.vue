<template>
  <div class="covid-chart-section">
    <div class="container">
      <h2>
        จากที่มีกระแสตอบรับต่างๆ เกิดขึ้น<br />แล้วเราลองมาดูมติเกี่ยวกับ<br />โควิด-19
        ที่ ครม. ตัดสินใจไปกัน
      </h2>

      <div class="chart-wrap">
        <div class="head">
          <h5>มติที่เกี่ยวข้องกับโควิด-19</h5>

          <h3>รวม {{ data.length }} มติ</h3>
        </div>

        <h5 class="title">แบ่งตามหมวดหมู่</h5>

        <div
          v-for="(bar, bar_index) in bar_data"
          :key="bar_index"
          class="bar-wrap"
        >
          <h6 class="name">
            {{ bar.name }}

            <el-tooltip
              class="item"
              effect="dark"
              :content="bar.info"
              placement="top"
            >
              <span class="material-icons">help_outline</span>
            </el-tooltip>
          </h6>

          <div class="bar">
            <div v-for="(data, data_index) in bar.data" :key="data_index"></div>
          </div>

          <div class="value">
            <div class="ct1">
              {{ bar.data.length }}
            </div>
          </div>
        </div>
      </div>

      <div class="end-text">
        <h3>
          นี่เป็นเพียงมติ ที่เราเลือกมาเฉพาะเรื่อง<br />
          เพื่อแสดงให้ทุกคนรับรู้เกี่ยวกับ<br /><b>‘การตัดสินใจของครม.’</b>
          ได้มากขึ้น<br /><br />
          เพราะ ‘กระบวนการตัดสินใจ’ ก่อนจะออกมาเป็นโครงการต่างๆ<br />เหล่านี้
          เราแทบจะไม่มีส่วนร่วมหรือรับรู้เลย….
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    bar_data() {
      const types = [
        {
          name: "การบริหารงานของรัฐ",
          info:
            "วิธีการจัดการ บริหาร ของครม. ให้หน่วยงานภายในและที่เกี่ยวข้อง ดำเนินงานในสถานการณ์โควิด -19 ได้"
        },
        {
          name: "ต่างประเทศ",
          info:
            "ความร่วมมือ การปรึกษาหารือกับภายนอกประเทศ ที่เกี่ยวกับสถานการณ์โควิด - 19"
        },
        {
          name: "มาตรการเยียวยา",
          info:
            "มาตรการที่ครม. ออกมาเพื่อช่วยเหลือ บรรเทาความเดือดร้อนที่เกิดจากโรคโควิด - 19"
        },
        {
          name: "กฎหมาย",
          info:
            "การออกกฎระเบียบและแบบแผนต่างๆ เพื่อใช้บังคับในสังคม ในสถานการณ์โควิด - 19"
        },
        {
          name: "ผลการทำงาน ศบค.",
          info:
            "ศบค. เป็นหน่วยงานที่ตั้งขึ้นเพื่อดูแล ควบคุม ประสานงานในการจัดการสถานการณ์โควิด - 19 ซึ่งต้องรายงานการดำเนินงานให้ครม.ทราบทุกเดือน"
        },
        {
          name: "การจัดซื้อวัคซีน",
          info: "การจัดหาวัคซีน เพื่อให้ประชาชนฉีดป้องกันโรคโควิด - 19"
        },
        {
          name: "การกู้เงิน",
          info: "เงินที่ได้กู้ยืม เพื่อนำมาแก้ปัญหาโควิด - 19"
        }
      ];

      return _.map(types, t => {
        return {
          ...t,
          data: _.filter(this.data, d => d.category === t.name)
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.covid-chart-section {
  background: $color-pale-green-2;
  padding: 250px 0 110px 0;
  color: $color-dark-green;
  h2 {
    font-weight: normal;
    margin: 0;
    text-align: center;
  }
  .chart-wrap {
    margin-top: 100px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      border-bottom: 1px solid $color-grey;
      h5 {
        font-weight: normal;
        margin: 0;
      }
      h3 {
        color: $color-green;
        margin: 0;
      }
    }
    .title {
      margin: 30px 0 0 0;
    }
    .bar-wrap {
      display: flex;
      align-items: center;
      margin-top: 24px;
      .name {
        width: 205px;
        text-align: right;
        margin: 0 42px 0 0;
        font-weight: normal;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .el-tooltip {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .bar {
        display: flex;
        flex-wrap: wrap;
        margin-right: 8px;
        > div {
          background: $color-red;
          border: 1px solid #ffffff;
          width: 4px;
          height: 16px;
          margin-right: 2px;
          box-sizing: content-box;
        }
      }
    }
  }
  .end-text {
    text-align: center;
    margin-top: 350px;
    h3 {
      font-weight: normal;
    }
  }
}
</style>
