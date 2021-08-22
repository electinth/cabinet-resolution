<template>
  <div class="year-chart-section">
    <div class="container">
      <div class="head">
        <h2>ในระยะเวลา เกือบ 2 ปี</h2>

        <h2>ค.ร.ม. ชุดนี้ได้เห็นชอบมติไปทั้งสิ้น <b>3,060</b> มติ</h2>

        <h4>(เฉลี่ย เดือนละ 133 มติ! 😱)</h4>
      </div>

      <div class="filter-wrap">
        <div class="bd1 label">กรองโดย</div>

        <el-select v-model="select_type" placeholder="ทุกหมวดหมู่">
          <el-option
            v-for="option in select_type_options"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          >
          </el-option>
        </el-select>

        <el-select v-model="select_position" placeholder="ทุกตำแหน่ง/กระทรวง">
          <el-option
            v-for="option in select_position_options"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          >
          </el-option>
        </el-select>

        <div class="bd1 label">เดือนที่ออกมติ</div>

        <el-select v-model="select_month" placeholder="เดือนที่ออกมติ">
          <el-option
            v-for="option in select_month_options"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          >
          </el-option>
        </el-select>

        <div class="bd1 label">มติเกี่ยวกับโควิด</div>

        <el-select v-model="select_covid_type" placeholder="มติเกี่ยวกับโควิด">
          <el-option
            v-for="option in select_covid_type_options"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          >
          </el-option>
        </el-select>
      </div>

      <div class="legend">
        <div v-for="(legend, index) in legends" :key="index" class="item bd2">
          <div
            :style="{
              background: legend.color,
              border: legend.color ? 'none' : '1px solid white'
            }"
            class="bar"
          ></div>

          = {{ legend.name }}
        </div>
      </div>

      <div :class="{ 'year-chart-wrap': true, overflow: !show_all_year }">
        <YearChart
          v-for="(year, index) in year_data"
          :key="index"
          :show_head_line="index !== 0"
          :year="year.text"
          :months="year.months"
          :style="{ zIndex: year_data.length - index }"
        />

        <div v-if="!show_all_year" class="bg-overflow"></div>
      </div>

      <div class="btn-wrap">
        <button class="btn-hide" @click="show_all_year = !show_all_year">
          <span class="material-icons">
            unfold_more
          </span>

          <h5>{{ show_all_year ? "ซ่อน" : "แสดง" }}</h5>
        </button>

        <nuxt-link to="/database">
          <button class="btn-see-all">
            <span class="material-icons">
              open_in_new
            </span>

            <h5>ดูฐานข้อมูล มติ ครม.</h5>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";

export default {
  data() {
    return {
      select_type: "",
      select_type_options: [
        {
          name: "ทุกหมวดหมู่",
          value: ""
        },
        {
          name: "เศรษฐกิจ-สังคม",
          value: "เศรษฐกิจ-สังคม"
        },
        {
          name: "กฎหมาย",
          value: "กฎหมาย"
        },
        {
          name: "แต่งตั้ง",
          value: "แต่งตั้ง"
        },
        {
          name: "ต่างประเทศ",
          value: "ต่างประเทศ"
        }
      ],
      select_covid_type: "",
      select_covid_type_options: [
        {
          name: "ทุกหมวดหมู่",
          value: ""
        },
        {
          name: "ผลการทำงาน ศบค.",
          value: "ผลการทำงาน ศบค."
        },
        // {
        //   name: "กฎหมาย",
        //   value: "กฎหมาย"
        // },
        {
          name: "มาตรการเยียวยา",
          value: "มาตรการเยียวยา"
        },
        {
          name: "การบริหารงานของรัฐ",
          value: "การบริหารงานของรัฐ"
        },
        {
          name: "การจัดซื้อวัคซีน",
          value: "การจัดซื้อวัคซีน"
        },
        {
          name: "การกู้เงิน",
          value: "การกู้เงิน"
        }
        // {
        //   name: "ต่างประเทศ",
        //   value: "ต่างประเทศ"
        // }
      ],
      select_position: "",
      select_position_options: [
        {
          name: "ทุกตำแหน่ง/กระทรวง",
          value: ""
        },
        {
          name: "รองนายกรัฐมนตรี",
          value: "รองนายกรัฐมนตรี"
        },
        {
          name: "การคลัง",
          value: "การคลัง"
        },
        {
          name: "มหาดไทย",
          value: "มหาดไทย"
        },
        {
          name: "เกษตรและสหกรณ์",
          value: "เกษตรและสหกรณ์"
        },
        {
          name: "คมนาคม",
          value: "คมนาคม"
        },
        {
          name: "ทรัพยากรธรรมชาติฯ",
          value: "ทรัพยากรธรรมชาติฯ"
        },
        {
          name: "การอุดมศึกษา วิทยาศาสตร์ฯ",
          value: "การอุดมศึกษา วิทยาศาสตร์ฯ"
        },
        {
          name: "อุตสาหกรรม",
          value: "อุตสาหกรรม"
        },
        {
          name: "ยุติธรรม",
          value: "ยุติธรรม"
        },
        {
          name: "แรงงาน",
          value: "แรงงาน"
        },
        {
          name: "นายกรัฐมนตรี",
          value: "นายกรัฐมนตรี"
        },
        {
          name: "ศึกษาธิการ",
          value: "ศึกษาธิการ"
        },
        {
          name: "การพัฒนาสังคมฯ",
          value: "การพัฒนาสังคมฯ"
        },
        {
          name: "ดิจิทัลเพื่อเศรษฐกิจและสังคม",
          value: "ดิจิทัลเพื่อเศรษฐกิจและสังคม"
        },
        {
          name: "พลังงาน",
          value: "พลังงาน"
        },
        {
          name: "การท่องเที่ยวและกีฬา",
          value: "การท่องเที่ยวและกีฬา"
        },
        {
          name: "วัฒนธรรม",
          value: "วัฒนธรรม"
        },
        {
          name: "สำนักนายกรัฐมนตรี",
          value: "สำนักนายกรัฐมนตรี"
        }
      ],
      select_month: "",
      select_month_options: [
        {
          name: "ทุกเดือนที่ออกมติ",
          value: ""
        },
        {
          name: "ม.ค.",
          value: "1"
        },
        {
          name: "ก.พ.",
          value: "2"
        },
        {
          name: "มี.ค.",
          value: "3"
        },
        {
          name: "เม.ย.",
          value: "4"
        },
        {
          name: "พ.ค.",
          value: "5"
        },
        {
          name: "มิ.ย.",
          value: "6"
        },
        {
          name: "ก.ค.",
          value: "7"
        },
        {
          name: "ส.ค.",
          value: "8"
        },
        {
          name: "ก.ย.",
          value: "9"
        },
        {
          name: "ต.ค.",
          value: "10"
        },
        {
          name: "พ.ย.",
          value: "11"
        },
        {
          name: "ธ.ค.",
          value: "12"
        }
      ],
      legends: [
        {
          name: "มติหมวดเศรษฐกิจสังคม",
          value: "เศรษฐกิจ-สังคม",
          color: "#EF364C"
        },
        {
          name: "มติหมวดกฏหมาย",
          value: "กฎหมาย",
          color: "#07B392"
        },
        {
          name: "มติหมวดแต่งตั้ง",
          value: "แต่งตั้ง",
          color: "#F6DF0E"
        },
        {
          name: "มติหมวดต่างประเทศ",
          value: "ต่างประเทศ",
          color: "#EEA690"
        },
        {
          name: "มติที่เกี่ยวกับโควิด-19",
          value: ""
        }
      ],
      years: ["2564", "2563", "2562"],
      show_all_year: false,
      year_data: []
    };
  },
  computed: {
    ...mapState(["two_years_data", "covid_data"])
  },
  watch: {
    select_type() {
      this.setYearData();
    },
    select_covid_type() {
      this.setYearData();
    },
    select_position() {
      this.setYearData();
    },
    select_month() {
      this.setYearData();
    },
    show_all_year() {
      this.setYearData();
    }
  },
  created() {
    this.setYearData();
  },
  methods: {
    setYearData() {
      const all_data = [...this.two_years_data, ...this.covid_data];
      let years = [...this.years];

      if (!this.show_all_year) {
        years = _.filter(years, (y, index) => index < 2);
      }

      this.year_data = _.map(years, y => {
        let data = _.filter(all_data, d => _.split(d.date, "/")[2] == y);

        if (this.select_type) {
          data = _.filter(data, d => this.select_type === d.category);
        }

        if (this.select_covid_type) {
          data = _.filter(data, d => this.select_covid_type === d.category);
        }

        if (this.select_position) {
          data = _.filter(data, d => this.select_position === d.position);
        }

        if (this.select_month) {
          data = _.filter(
            data,
            d => this.select_month === _.split(d.date, "/")[0]
          );
        }

        const group_month = _.groupBy(data, d => _.split(d.date, "/")[0]);
        const months = [];

        for (const key in group_month) {
          const month = _.find(this.select_month_options, o => o.value == key);
          const data = _.map(group_month[key], m => {
            const legend = _.find(this.legends, l => l.value === m.category);
            return { ...m, color: _.get(legend, "color") };
          });

          months.push({
            data: _.orderBy(data, "no", "desc"),
            month_text: _.get(month, "name"),
            id: _.get(month, "num")
          });
        }

        return { text: y, months };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.year-chart-section {
  color: white;
  text-align: center;
  padding: 90px 0 140px 0;
  @include media-breakpoint(tablet) {
    padding: 46px 0 24px 0;
  }
  .head {
    h2 {
      font-weight: normal;
      margin: 0;
      b {
        color: $color-pale-green;
      }
    }
    h4 {
      margin: 16px 0 0 0;
      font-weight: normal;
    }
  }
  .filter-wrap {
    margin-top: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-breakpoint(tablet) {
      flex-direction: column;
      margin-top: 30px;
    }
    .label {
      margin-right: 16px;
      flex: none;
      @include media-breakpoint(tablet) {
        display: none;
      }
    }
    .el-select {
      margin-right: 16px;
      @include media-breakpoint(tablet) {
        margin: 16px 0 0 0;
        width: 100%;
      }
    }
    ::v-deep {
      input {
        border-color: white;
        color: white;
      }
    }
  }
  .year-chart-wrap {
    margin-top: 50px;
    @include media-breakpoint(tablet) {
      margin-top: 30px;
    }
    .year-chart {
      margin-top: 35px;
    }
  }
  .year-chart-wrap.overflow {
    position: relative;
    overflow-y: hidden;
    height: 500px;
    .bg-overflow {
      background: linear-gradient(
        180deg,
        rgba(22, 45, 35, 0) 0%,
        #162d23 59.9%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      z-index: 5;
    }
  }
  .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    @include media-breakpoint(tablet) {
      flex-direction: column;
    }
    a {
      text-decoration: none;
      @include media-breakpoint(tablet) {
        width: 100%;
        margin-top: 16px;
      }
    }
    button {
      border: 1px solid white;
      display: flex;
      background: none;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      color: white;
      @include media-breakpoint(tablet) {
        width: 100%;
      }
      .material-icons {
        margin-right: 15px;
      }
      h5 {
        margin: 0;
        font-weight: normal;
      }
    }
    button:first-child {
      margin-right: 16px;
      @include media-breakpoint(tablet) {
        margin: 0;
      }
    }
  }
  .legend {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-wrap: wrap;
    @include media-breakpoint(tablet) {
      margin-top: 14px;
      justify-content: flex-start;
    }
    .item {
      display: flex;
      align-items: center;
      margin-right: 24px;
      line-height: normal;
      @include media-breakpoint(tablet) {
        width: 50%;
        margin: 16px 0 0 0;
        text-align: left;
        align-items: flex-start;
      }
      .bar {
        width: 4px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
}
</style>
