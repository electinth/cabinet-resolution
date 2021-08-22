<template>
  <div class="database-page">
    <div class="header">
      <div class="container">
        <div class="title">
          <h1>ฐานข้อมูลมติ ครม.</h1>

          <h1>{{ total_data }} มติ</h1>
        </div>

        <h6 class="text">
          รวมมติครม. ภายใต้นายกรัฐมนตรี ประยุทธ์ จันทร์โอชา ตั้งแต่ 10 กรกฏาคม
          2562 - 5 พฤษภาคม 2564
        </h6>

        <div class="search-wrap">
          <div class="bd1 label">กรองโดย</div>

          <el-input
            v-model="input_search"
            placeholder="ใส่คำคีย์เวิร์ดชื่อมติ, ชื่อผู้ออกมติ"
          ></el-input>
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

          <el-select
            v-model="select_covid_type"
            placeholder="มติเกี่ยวกับโควิด"
          >
            <el-option
              v-for="option in select_covid_type_options"
              :key="option.value"
              :label="option.name"
              :value="option.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="table-wrap">
      <div class="container">
        <template v-if="display_data.length > 0">
          <TableList :data="display_data" />

          <div class="pagination">
            {{ numFormat((current_page - 1) * 20 + 1) }}-{{
              current_page * 20 > filter_data.length
                ? numFormat(filter_data.length)
                : numFormat(current_page * 20)
            }}
            จากผลลัพธ์ทั้งหมด {{ numFormat(filter_data.length) }} รายการ

            <el-pagination
              layout="prev, pager, next"
              :current-page.sync="current_page"
              :page-size="20"
              :total="filter_data.length"
            >
            </el-pagination>
          </div>
        </template>

        <div v-else class="no-data-text bd1">
          ไม่พบผลลัพธ์ที่คุณค้นหา
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from "numeral";
import _ from "lodash";
import { mapState } from "vuex";

export default {
  data() {
    return {
      input_search: "",
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
      table_data: [
        {
          date: "2016-05-03",
          main_topic: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      current_page: 1
    };
  },
  computed: {
    ...mapState(["two_years_data", "covid_data"]),
    all_data() {
      return [...this.two_years_data, ...this.covid_data];
    },
    total_data() {
      return numeral(this.all_data.length).format("0,0");
    },
    filter_data() {
      let data = [...this.all_data];

      if (this.input_search) {
        data = _.filter(
          data,
          d =>
            d.main_topic.includes(this.input_search) ||
            d.minister_name.includes(this.input_search)
        );
      }

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

      return data;
    },
    display_data() {
      const data = _.filter(
        this.filter_data,
        (d, index) =>
          index >= (this.current_page - 1) * 20 &&
          index < this.current_page * 20
      );

      return data;
    }
  },
  methods: {
    numFormat(value) {
      return numeral(value).format("0,0");
    }
  }
};
</script>

<style lang="scss" scoped>
.database-page {
  .header {
    background: $color-pale-green-2;
    padding: 64px 0;
    @include media-breakpoint(tablet) {
      padding: 32px 0;
    }
    .title {
      color: $color-green;
      display: flex;
      justify-content: space-between;
      @include media-breakpoint(tablet) {
        display: block;
      }
      h1 {
        margin: 0;
      }
    }
    .text {
      font-weight: normal;
      margin-top: 8px;
      color: $color-black;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      .label {
        margin-right: 16px;
        flex: none;
        @include media-breakpoint(tablet) {
          display: none;
        }
      }
    }
    .filter-wrap {
      margin-top: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      @include media-breakpoint(tablet) {
        display: block;
        margin-top: 0;
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
          width: 100%;
          margin-top: 16px;
        }
      }
      ::v-deep {
        input {
          border-color: $color-black;
          color: $color-black;
        }
        .el-icon-arrow-up {
          color: $color-black;
        }
      }
    }
  }
  .table-wrap {
    background: $color-light-grey-2;
    padding: 72px 0 80px 0;
    @include media-breakpoint(tablet) {
      padding: 8px 0 32px 0;
    }
    .pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 40px;
      font-size: 16px;
      font-family: "Anuphan", "Serif";
      @include media-breakpoint(tablet) {
        display: block;
        text-align: center;
      }
      .el-pagination {
        margin-left: 60px;
        @include media-breakpoint(tablet) {
          margin: 16px 0 0 0;
        }
        ::v-deep {
          button {
            background: none;
          }
          li {
            background: none;
            font-size: 16px;
            @media (max-width: 375px) {
              min-width: 24px;
            }
          }
          li.active {
            color: $color-green;
          }
        }
      }
    }
    .no-data-text {
      height: 300px;
      text-align: center;
      padding-top: 100px;
    }
  }
}
</style>
