<template>
  <div class="about-you-section">
    <div class="container">
      <h3>
        แต่! ความจริงแล้ว การตัดสินใจในเรื่องสำคัญ ๆ ของประเทศ
        ประชาชนควรมีส่วนร่วมและตรวจสอบได้…..<br /><br /><br />
        หากไม่มี feedback จากข่าว จากโซเซียลมีเดีย
        การรับรู้ว่าเรื่องเหล่านี้ดำเนินการอย่างไร
        ลำพังการอ่านและการทำความเข้าใจเองคงเป็นไปได้ยาก
        และเราเองก็อาจไม่รู้ถึงการทำงานของครม.เลย<br /><br /><br />
        เพราะโดยปกติการตัดสินใจเหล่านี้ ถ้าตัดสินใจไม่ดี เป็นกลไกของรัฐสภา
        ที่ตรวจสอบด้วย “การอภิปรายไม่ไว้วางใจ”<br /><br /><br />ถ้าหากกลไกนี้ไม่แข็งแรง
        การประชุมอภิปรายไม่ไว้วางใจ ก็เป็นเพียงแค่การประชุมนึงเท่านั้น<br /><br /><br />
        และเป็นที่น่าคิดว่า…..<br /><br /><br />เรื่องสำคัญขนาดนี้<br />
        ควรมีเครื่องมือควรประเมินผลการตัดสินใจหรือไม่?
      </h3>

      <h2>
        แล้วคุณล่ะ อยากให้มีเครื่องมือ<br />
        ตรวจสอบ-ประเมินผล การตัดสินใจเหล่านี้ไหม?
      </h2>

      <div v-if="vote_have !== 0 || vote_dont_have !== 0" class="bar-wrap">
        <div class="text">
          <div class="left">
            <h4>มี</h4>
          </div>

          <div class="right">
            <h4>ไม่มี</h4>
          </div>
        </div>

        <div class="value">
          <div class="left" :style="{ width: `${vote_have_percent}%` }">
            <div class="bar">
              <div class="bd1">
                {{ numFormat(vote_have) }} คน ({{ vote_have_percent }}%)
              </div>
            </div>
          </div>

          <div class="right" :style="{ width: `${vote_dont_have_percent}%` }">
            <div class="bar">
              <div class="bd1">
                {{ numFormat(vote_dont_have) }} คน ({{
                  vote_dont_have_percent
                }}%)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!voted" class="btn-wrap">
        <button class="btn-yes" @click="updateVotePoint('have')">มี</button>

        <button class="btn-no" @click="updateVotePoint('dont_have')">
          ไม่มี
        </button>
      </div>

      <div class="btn-wrap">
        <nuxt-link to="/database">
          <button class="btn-go-to-top">
            ดูฐานข้อมูล มติ ครม. อีกครั้ง
          </button>
        </nuxt-link>
      </div>

      <div class="sharer">
        <elect-sharer :url="url" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import numeral from "numeral";

export default {
  data() {
    return {
      url: process.env.web_url,
      vote_have: 0,
      vote_dont_have: 0,
      is_vote: false
    };
  },
  created() {
    this.getVotePoint();
  },
  computed: {
    voted() {
      return this.$cookies.get("voted") || this.is_vote;
    },
    total_vote() {
      return this.vote_have + this.vote_dont_have;
    },
    vote_have_percent() {
      const percent = (this.vote_have / this.total_vote) * 100;
      return percent.toFixed(1);
    },
    vote_dont_have_percent() {
      const percent = (this.vote_dont_have / this.total_vote) * 100;
      return percent.toFixed(1);
    }
  },
  methods: {
    numFormat(value = 0) {
      return numeral(value).format("0,0");
    },
    async updateVotePoint(id) {
      const ref = this.$fire.database.ref("vote");

      try {
        await ref.child(id).set(firebase.database.ServerValue.increment(1));
        this.$cookies.set("voted", true);
        this.is_vote = true;
        this.getVotePoint();
        this.$message({
          message: "โหวตคำตอบเรียบร้อยแล้ว",
          type: "success"
        });
      } catch (e) {
        alert(e);
      }
    },
    async getVotePoint() {
      const ref = this.$fire.database.ref("vote");

      try {
        const snapshot = await ref.once("value");
        this.vote_have = _.get(snapshot.val(), "have");
        this.vote_dont_have = _.get(snapshot.val(), "dont_have");
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.about-you-section {
  background: $color-pale-green-2;
  text-align: center;
  padding: 200px 0;
  @include media-breakpoint(tablet) {
    padding: 66px 0 120px 0;
  }
  h3 {
    margin: 0;
    font-weight: normal;
  }
  h2 {
    margin: 380px 0 0 0;
    font-weight: normal;
    @include media-breakpoint(tablet) {
      margin: 300px 0 0 0;
    }
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    button {
      font-size: 48px;
      min-width: 192px;
      padding: 8px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      @include media-breakpoint(tablet) {
        font-size: 31px;
        min-width: 136px;
      }
    }
    .btn-yes {
      background: $color-green;
      margin-right: 32px;
      @include media-breakpoint(tablet) {
        margin-right: 16px;
      }
    }
    .btn-no {
      background: $color-pale-red;
    }
    .btn-go-to-top {
      padding: 16px 28px;
      background: $color-green;
      font-size: 25px;
      margin-top: 300px;
      @include media-breakpoint(tablet) {
        font-size: 20px;
      }
    }
  }
  .bar-wrap {
    margin-top: 50px;
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
        background: $color-green;
      }
    }
    .right {
      text-align: right;
      .bar {
        background: $color-pale-red;
        justify-content: flex-end;
      }
    }
  }
  .sharer {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
