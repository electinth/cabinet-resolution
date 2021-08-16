<template>
  <div class="year-chart">
    <div class="year">
      <h4>{{ year }}</h4>

      <div v-if="show_head_line" class="line"></div>
    </div>

    <div
      v-for="(month, month_index) in months"
      :key="month_index"
      class="month"
    >
      <div class="bd2 font-anuphan month-text">
        {{ month.month_text }} {{ year.split("25")[1] }}
      </div>

      <div class="item-wrap">
        <div
          v-for="(data, data_index) in month.data"
          :key="data_index"
          :style="{
            background: data.color,
            border: data.color ? 'none' : '1px solid white'
          }"
          class="item"
          @mouseover="data.show_tooltip = true"
          @mouseleave="data.show_tooltip = false"
        >
          <div v-if="data.show_tooltip" class="tooltip">
            <div class="head">
              <div class="bd2 date">วันเสนอ {{ data.date }}</div>

              <el-tag v-if="data.category" class="bd2">{{
                data.category
              }}</el-tag>
            </div>

            <div class="bd2 label">ชื่อมติ</div>

            <div class="bd1 name">
              {{ data.main_topic }}
            </div>

            <nuxt-link :to="`/database/${data.no}`">
              <button class="btn-read-more">
                <span class="material-icons">
                  expand_more
                </span>

                <div class="bd1">
                  อ่านเพิ่ม
                </div>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="line-wrap">
      <div
        v-for="(line, index) in $mq === 'mobile' ? 5 : 11"
        :key="index"
        class="line"
      ></div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    show_head_line: {
      type: Boolean,
      default: false
    },
    year: {
      type: String,
      default: ""
    },
    months: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.year-chart {
  color: white;
  .year {
    margin-bottom: 16px;
    display: flex;
    h4 {
      font-weight: normal;
      margin: 0 30px 0 0;
      width: 80px;
      text-align: right;
      flex: none;
      @media (max-width: 767px) {
        margin: 0 24px 0 0;
        width: 60px;
      }
    }
    .line {
      height: 1px;
      flex: 1;
      background: white;
      position: relative;
      z-index: 1;
    }
  }
  .month {
    display: flex;
    .month-text {
      width: 80px;
      margin-right: 30px;
      text-align: right;
      flex: none;
      @media (max-width: 767px) {
        margin-right: 24px;
        width: 60px;
      }
    }
    .item-wrap {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 4px;
        height: 16px;
        margin-right: 4px;
        margin-bottom: 16px;
        cursor: pointer;
        position: relative;
        .tooltip {
          position: absolute;
          z-index: 1;
          left: 50%;
          top: 10px;
          transform: translateX(-50%);
          background: #ffffff;
          border-radius: 8px;
          padding: 16px;
          color: $color-black;
          width: 328px;
          text-align: left;
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
            margin-top: 8px;
            color: $color-green;
          }
          .name {
            color: $color-black;
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
            margin-top: 16px;
            width: 100%;
            .material-icons {
              margin-right: 10px;
            }
          }
        }
      }
      .item:hover {
        background: white !important;
      }
    }
  }
  .line-wrap {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 110px;
    height: 100%;
    pointer-events: none;
    @media (max-width: 767px) {
      left: 84px;
    }
    .line {
      border-left: 1px solid $color-grey;
      height: 100%;
    }
  }
}
</style>
