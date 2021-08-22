<template>
  <div class="table-list">
    <div v-if="['mobile', 'tablet'].includes($mq)" class="mobile-table">
      <nuxt-link
        :to="`/database/${d.no}`"
        v-for="(d, index) in data"
        :key="index"
        class="item"
      >
        <div class="row">
          <div class="bd2 label">วันที่</div>

          <div class="bd2 value">{{ d.date }}</div>
        </div>

        <div class="row">
          <div class="bd2 label">ชื่อมติ</div>

          <div class="bd2 value">{{ d.main_topic }}</div>
        </div>

        <div class="row">
          <div class="bd2 label">หมวดหมู่</div>

          <div class="bd2 value">{{ d.category }}</div>
        </div>

        <div class="row">
          <div class="bd2 label">ออกมติโดย</div>

          <div class="bd2 value">{{ d.minister_name }}</div>
        </div>

        <div class="row">
          <div class="bd2 label">ตำแหน่ง/กระทรวง</div>

          <div class="bd2 value">{{ d.position }}</div>
        </div>
      </nuxt-link>
    </div>

    <el-table v-else :data="data" style="width: 100%" @cell-click="cellClick">
      <el-table-column prop="date" label="วันที่" width="140">
      </el-table-column>

      <el-table-column prop="main_topic" label="ชื่อมติ" width="330">
      </el-table-column>

      <el-table-column prop="category" label="หมวดหมู่" width="150">
      </el-table-column>

      <el-table-column prop="minister_name" label="ออกมติโดย" width="220">
      </el-table-column>

      <el-table-column prop="position" label="ตำแหน่ง/กระทรวง" width="200">
      </el-table-column>

      <el-table-column label="เอกสาร" width="120">
        <template slot-scope="scope">
          <a
            v-if="scope.row.comfirmation_doc_link != '-'"
            :href="scope.row.comfirmation_doc_link"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span class="material-icons">
              get_app
            </span>
          </a>

          <a
            v-if="scope.row.propasal_doc_link != '-'"
            :href="scope.row.propasal_doc_link"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span class="material-icons">
              get_app
            </span>
          </a>
        </template>
      </el-table-column>
    </el-table>
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
    }
  },
  methods: {
    cellClick(row, column, cell, event) {
      if (column.label === "ชื่อมติ") {
        this.$router.push(`/database/${row.no}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  background: none;
  ::v-deep {
    .cell {
      overflow: unset;
      padding: 0 16px;
      word-break: break-word;
    }
    th {
      background: none;
      border-color: $color-grey-4;
      font-size: 20px;
      color: $color-grey-3;
    }
    tr {
      background: none;
      td {
        border-color: $color-grey-4;
        padding: 24px 0;
        .cell {
          color: black;
          font-size: 16px;
          font-family: "Anuphan", "Serif";
          a {
            color: black;
            margin: 0 4px;
          }
        }
      }
      td:nth-child(2) {
        cursor: pointer;
      }
    }
    tr:hover {
      td {
        background: $color-pale-green-2;
      }
    }
  }
}
.mobile-table {
  .item {
    padding: 24px 0;
    border-bottom: 1px solid $color-grey-4;
    text-decoration: none;
    color: black;
    display: block;
    .row {
      display: flex;
      margin-top: 16px;
      .label {
        width: 60px;
        margin-right: 24px;
        flex: none;
      }
    }
  }
}
</style>
