<template>
  <div class="type-chart-section">
    <div class="container">
      <h2>จำนวนมติแยกตามประเภท</h2>

      <div class="content">
        <BarChart
          :data="type_data"
          :domain_ranges="['0', '500', '1,000']"
          :bar_scale="1.8"
          :bar_height="32"
          :label_width="130"
          show_percent_text
        />

        <div class="meaning">
          <h5 class="title">ความหมายของประเภท</h5>

          <div v-for="(type, index) in meaning_types" :key="index">
            <h6 class="name">{{ type.name }}</h6>

            <div class="bd2 text">{{ type.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import numeral from "numeral";

export default {
  props: {
    two_years_data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      meaning_types: [
        {
          name: "เศรษฐกิจ-สังคม",
          text: "เรื่องที่จัดการและส่งผลภายในประเทศ ไม่ว่าจะเป็นคน ระบบเศรษฐกิจ"
        },
        {
          name: "กฎหมาย",
          text: "การออกกฎระเบียบและแบบแผนต่างๆ เพื่อใช้บังคับในสังคม"
        },
        {
          name: "แต่งตั้ง",
          text: "การแต่งตั้งคน เพื่อทำหน้าที่ในหน่วยงานต่างๆ ที่ได้รับแต่งตั้ง"
        },
        {
          name: "ต่างประเทศ",
          text:
            "เรื่องที่มีจัดการและส่งผลภายนอกประเทศ ไม่ว่าจะเป็นความร่วมมือ และอาเซียน"
        }
      ]
    };
  },
  computed: {
    type_data() {
      const getTotal = category => {
        const total = _.filter(
          this.two_years_data,
          d => d.category === category
        ).length;

        return numeral(total).format("0,0");
      };

      const getPercent = category => {
        const total = _.filter(
          this.two_years_data,
          d => d.category === category
        ).length;
        const all_total = this.two_years_data.length;
        const percent = (total / all_total) * 100;

        return percent.toFixed(1);
      };

      const data = [
        {
          name: "เศรษฐกิจ-สังคม",
          color: "#EF364C"
        },
        {
          name: "กฎหมาย",
          color: "#07B392"
        },
        {
          name: "แต่งตั้ง",
          color: "#F6DF0E"
        },
        {
          name: "ต่างประเทศ",
          color: "#EEA690"
        }
      ];

      return _.map(data, d => {
        return {
          ...d,
          total: getTotal(d.name),
          percent: getPercent(d.name)
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.type-chart-section {
  color: white;
  padding: 120px 0;
  h2 {
    font-weight: normal;
    margin: 0;
  }
  .content {
    display: flex;
    margin-top: 48px;
    align-items: flex-start;
    .bar-chart {
      flex: 1;
      margin-right: 90px;
    }
    .meaning {
      flex: none;
      width: 290px;
      .title {
        font-weight: normal;
        margin: 0;
      }
      .name {
        font-weight: normal;
        margin: 24px 0 0 0;
      }
      .text {
        margin-top: 8px;
      }
    }
  }
}
</style>
