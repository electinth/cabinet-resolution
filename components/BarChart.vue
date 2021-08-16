<template>
  <div class="bar-chart">
    <div v-for="(bar, index) in data" :key="index" class="bar-wrap">
      <h6
        :style="{
          width: `${label_width}px`
        }"
      >
        {{ bar.name }}
      </h6>

      <div
        :style="{
          background: bar.color,
          width: `${+bar.percent * bar_scale}%`,
          height: `${bar_height}px`
        }"
        class="bar"
      ></div>

      <div class="value">
        <div class="ct1">
          <b>{{ bar.total }}</b>
        </div>

        <div v-if="show_percent_text" class="ct1">({{ bar.percent }}%)</div>
      </div>
    </div>

    <div
      class="domain-wrap"
      :style="{
        left: `${label_width + ($mq === 'mobile' ? 8 : 24)}px`
      }"
    >
      <div v-for="(range, index) in domain_ranges" :key="index" class="domain">
        <div class="ct1">{{ range }}</div>

        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    domain_ranges: {
      type: Array,
      default: () => {
        return [];
      }
    },
    bar_scale: {
      type: Number,
      default: 1
    },
    bar_height: {
      type: Number,
      default: 16
    },
    label_width: {
      type: Number,
      default: 130
    },
    show_percent_text: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.bar-chart {
  position: relative;
  padding-top: 20px;
  .bar-wrap {
    display: flex;
    align-items: center;
    margin-top: 16px;
    position: relative;
    z-index: 1;
    @media (max-width: 767px) {
      margin-top: 10px;
    }
    h6 {
      text-align: right;
      font-weight: normal;
      margin: 0 24px 0 0;
      @media (max-width: 767px) {
        margin: 0 8px 0 0;
      }
    }
    .bar {
      margin-right: 8px;
    }
  }
  .domain-wrap {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 20%;
    height: 100%;
    pointer-events: none;
    @media (max-width: 767px) {
      right: 8%;
    }
    .domain {
      width: 30px;
      display: flex;
      flex-direction: column;
      .line {
        border-left: 1px solid $color-grey;
        flex: 1;
        margin-top: 8px;
      }
    }
  }
}
</style>
