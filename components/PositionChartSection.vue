<template>
  <div class="position-chart-section">
    <div class="container">
      <h2>จำนวนมติตามแยกตามตำแหน่งหรือกระทรวง</h2>

      <BarChart
        :data="position_data"
        :domain_ranges="['0', '250', '500']"
        :bar_scale="4"
        :bar_height="16"
        :label_width="230"
      />
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
  computed: {
    position_data() {
      const getTotal = position => {
        const total = _.filter(
          this.two_years_data,
          d => d.position === position
        ).length;

        return numeral(total).format("0,0");
      };

      const getPercent = position => {
        const total = _.filter(
          this.two_years_data,
          d => d.position === position
        ).length;
        const all_total = this.two_years_data.length;
        const percent = (total / all_total) * 100;

        return percent.toFixed(1);
      };

      const data = [
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
      ];

      return _.map(data, d => {
        return {
          ...d,
          color: "#EF364C",
          total: getTotal(d.name),
          percent: getPercent(d.name)
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.position-chart-section {
  color: white;
  padding: 70px 0;
  h2 {
    font-weight: normal;
    margin: 0;
  }
  .bar-chart {
    margin-top: 40px;
  }
}
</style>
