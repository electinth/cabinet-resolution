<template>
  <div class="example-section">
    <div class="container">
      <h2>ตัวอย่างมติที่น่าสนใจ</h2>

      <div class="radio-wrap">
        <el-radio-group v-model="tab">
          <el-radio-button
            v-for="(tab, index) in tabs"
            :key="index"
            :label="tab.name"
          ></el-radio-button>
        </el-radio-group>
      </div>

      <div v-if="card" class="card">
        <div class="head">
          <div class="bd2 date">วันเสนอ {{ card.date }}</div>

          <el-tag class="bd2">{{ card.category }}</el-tag>
        </div>

        <div class="bd1 label">ชื่อมติ</div>

        <h6 class="name">
          {{ card.main_topic }}
        </h6>

        <div class="wrap">
          <div class="item">
            <div class="bd1 label">เสนอโดย</div>

            <h6 class="name">
              {{ card.position || "-" }}
            </h6>
          </div>

          <div class="item">
            <div class="bd1 label">ผู้เสนอ</div>

            <h6 class="name">
              {{ card.minister_name || "-" }}
            </h6>
          </div>
        </div>

        <nuxt-link :to="`/database/${card.no}`">
          <button class="btn-read-more">
            <span class="material-icons">
              expand_more
            </span>

            <div class="bd1">
              แสดงทั้งหมด
            </div>
          </button>
        </nuxt-link>
      </div>

      <button class="btn-random" @click="getCard">
        สุ่มมติอื่นในหมวดนี้
      </button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";

export default {
  data() {
    return {
      tabs: [
        {
          name: "เศรษฐกิจ-สังคม"
        },
        {
          name: "กฎหมาย"
        },
        {
          name: "แต่งตั้ง"
        },
        {
          name: "ต่างประเทศ"
        }
      ],
      tab: "เศรษฐกิจ-สังคม",
      card: null
    };
  },
  computed: {
    ...mapState(["two_years_data"])
  },
  watch: {
    tab() {
      this.getCard();
    }
  },
  created() {
    this.getCard();
  },
  methods: {
    getCard() {
      const data = _.filter(this.two_years_data, d => d.category === this.tab);
      this.card = _.shuffle(data)[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.example-section {
  color: white;
  padding: 120px 0;
  @include media-breakpoint(tablet) {
    padding: 46px 0 42px 0;
  }
  h2 {
    font-weight: normal;
    margin: 0 0 16px 0;
  }
  .radio-wrap {
    @include media-breakpoint(tablet) {
      overflow-x: auto;
      margin-right: -16px;
    }
  }
  .el-radio-group {
    display: flex;
    ::v-deep {
      .el-radio-button {
        .el-radio-button__inner {
          color: white;
          background: none;
          border-color: white;
          box-shadow: none;
          border-radius: 0;
          font-size: 25px;
          line-height: 120%;
          @include media-breakpoint(tablet) {
            font-size: 16px;
          }
        }
      }
      .el-radio-button.is-active {
        .el-radio-button__inner {
          background: $color-pale-green-2;
          color: $color-dark-green;
        }
      }
    }
  }
  .card {
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;
    color: $color-black;
    width: 670px;
    text-align: left;
    margin: 74px auto 0 auto;
    @include media-breakpoint(tablet) {
      width: 100%;
      margin-top: 30px;
    }
    .head {
      display: flex;
      justify-content: space-between;
      .el-tag {
        background: none;
        color: $color-black;
        border-color: $color-green;
      }
    }
    .label {
      margin-top: 10px;
      color: $color-green;
    }
    .name {
      color: $color-black;
      font-weight: normal;
      margin: 8px 0 0 0;
    }
    .wrap {
      display: flex;
      margin-top: 24px;
      .item {
        flex: 1;
      }
      .item:first-child {
        margin-right: 16px;
      }
    }
    a {
      text-decoration: none;
    }
    .btn-read-more {
      background: none;
      border: 1px solid $color-light-grey;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      margin-top: 30px;
      width: 100%;
      .material-icons {
        margin-right: 10px;
      }
    }
  }
  .btn-random {
    padding: 16px 28px;
    background: $color-green;
    border-radius: 10px;
    border: none;
    font-size: 25px;
    margin: 60px auto 0 auto;
    display: block;
  }
}
</style>
