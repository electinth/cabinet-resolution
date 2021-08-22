<template>
  <div class="compare-section">
    <div class="container">
      <h2>
        ไม่ใช่แค่ ครม. เท่านั้นที่ชง-ตบมติกันเองได้<br />
        แต่หน่วยงานอื่นก็สามารถเสนอมติ<br />ให้ คร.ม. พิจารณาได้ด้วย
      </h2>

      <div class="bar-wrap">
        <div class="text">
          <div class="left">
            <h4>มติจาก ครม.</h4>
          </div>

          <div class="right">
            <h4>มติจากหน่วยงานอื่น</h4>
          </div>
        </div>

        <div class="value">
          <div class="left" :style="{ width: `${minister_data_percent}%` }">
            <div class="bar">
              <div class="bd1">
                {{ minister_data_total }} ({{ minister_data_percent }}%)
              </div>
            </div>
          </div>

          <div class="right" :style="{ width: `${other_data_percent}%` }">
            <div class="bar">
              <div class="bd1">
                {{ other_data_total }} ({{ other_data_percent }}%)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="total">
        <h4>มติจากประชาชน</h4>

        <h1>0</h1>
      </div>

      <h4 class="end-text">
        ปัจจุบัน ยังไม่มีช่องทางให้ประชาชนเสนอมติได้<br />จะต้องเสนอผ่านรัฐสภาเท่านั้น
        😢
      </h4>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import numeral from "numeral";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["two_years_data"]),
    other_data() {
      return _.filter(this.two_years_data, d => d.other != "-");
    },
    other_data_total() {
      return numeral(this.other_data.length).format("0,0");
    },
    other_data_percent() {
      const percent =
        (this.other_data.length / this.two_years_data.length) * 100;
      return percent.toFixed(1);
    },
    minister_data() {
      return _.filter(this.two_years_data, d => d.other == "-");
    },
    minister_data_total() {
      return numeral(this.minister_data.length).format("0,0");
    },
    minister_data_percent() {
      const percent =
        (this.minister_data.length / this.two_years_data.length) * 100;
      return percent.toFixed(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.compare-section {
  color: white;
  text-align: center;
  padding: 270px 0 100px 0;
  @include media-breakpoint(tablet) {
    padding: 115px 0 90px 0;
  }
  h2 {
    font-weight: normal;
    margin: 0;
  }
  .bar-wrap {
    margin-top: 110px;
    @include media-breakpoint(tablet) {
      margin-top: 68px;
    }
    .text {
      display: flex;
      justify-content: space-between;
      h4 {
        font-weight: normal;
        margin: 0;
        @include media-breakpoint(tablet) {
          font-size: 16px;
        }
      }
    }
    .value {
      display: flex;
      .bar {
        height: 48px;
        padding: 8px;
        display: flex;
        align-items: center;
        font-weight: bold;
        margin-top: 16px;
      }
    }
    .left {
      text-align: left;
      .bar {
        background: $color-red;
      }
    }
    .right {
      text-align: right;
      .bar {
        background: $color-green;
        justify-content: flex-end;
      }
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 56px;
    @include media-breakpoint(tablet) {
      margin-top: 30px;
    }
    h4 {
      font-weight: normal;
      margin: 0 32px 0 0;
    }
    h1 {
      margin: 0;
      color: $color-red;
    }
  }
  .end-text {
    font-weight: normal;
    margin: 192px 0 0 0;
    @include media-breakpoint(tablet) {
      margin: 95px 0 0 0;
    }
  }
}
</style>
