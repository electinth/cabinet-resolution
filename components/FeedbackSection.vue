<template>
  <div class="feedback-section">
    <div class="container">
      <h2 class="intro">
        จากการออกมติ ครม. ต่างๆ ที่ผ่านมา<br />มีเสียงตอบรับเกิดขึ้นมากมาย<br /><br />
        โดยเฉพาะที่เกิดขึ้นใกล้ตัว<br />และเราเห็นภาพกันมากที่สุด คือ<br /><br />

        <span>
          การแพร่ระบาดโควิด-19
        </span>
      </h2>

      <div class="card-wrap">
        <h2>มติเกี่ยวกับ โควิด-19<br />ได้รับเสียงตอบรับอย่างไรบ้าง</h2>

        <el-row :gutter="32">
          <el-col v-for="(item, index) in list" :key="index" :span="8">
            <a
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="card"
            >
              <img :src="item.image" :alt="item.image" />

              <div class="bd1">
                {{ item.topic }}
              </div>

              <span class="ct1 tag">{{ item.category }}</span>
            </a></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    feedback_data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    list() {
      return _.map(this.feedback_data, d => {
        return { ...d, image: require(`~/assets/images/feedback_${d.no}.jpg`) };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.feedback-section {
  background: $color-pale-green-2;
  padding: 230px 0 300px 0;
  text-align: center;
  color: $color-dark-green;
  h2 {
    font-weight: normal;
    margin: 0;
    span {
      font-weight: bold;
      color: $color-green;
    }
  }
  .card-wrap {
    margin-top: 200px;
    .card {
      text-decoration: none;
      margin-top: 48px;
      text-align: left;
      color: $color-dark-green;
      display: block;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .bd1 {
        margin-top: 10px;
      }
      .tag {
        background: $color-green;
        padding: 8px;
        border-radius: 5px;
        margin-top: 10px;
        display: inline-block;
      }
    }
  }
}
</style>
