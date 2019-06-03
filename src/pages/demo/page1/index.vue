<template>
  <d2-container>
    <template slot="header">
      <el-button type="primary" @click="dialogVisible = true">新增</el-button>
    </template>
    <d2-crud
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      @custom-emit-1="handleCustomEvent">
    </d2-crud>

    <el-dialog
      title="新增员工"
      :visible.sync="dialogVisible"
      width="65%">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-date-picker
            title="日期"
            value-format="yyyy-MM-dd"
            v-model="postData.empDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input placeholder="员工姓名" v-model="postData.empName"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input placeholder="员工地址" v-model="postData.empAddress"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
    </el-dialog>
  </d2-container>

</template>

<script>
  import {postRequest} from "../../../utils/api";

  export default {

    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$axios.get("/emp").then(result => {
            if (result.status === 200) {
              this.data = Array.from(result.data);
              console.log(this.list)
            } else {
              alert("获取数据失败")
            }
          }
        )
      },
      add() {
        postRequest("/emp",this.postData).then(
         res=>{
           if (res.status === 204) {
            this.getData();
             alert("添加成功")
           }
         }
       ).catch(
         err=>{
           console.log('err: ', err);
           alert("添加失败");
         }
       ).finally(
          this.dialogVisible = false
        )
      },

      handleCustomEvent({index, row}) {
        console.log(index);
        console.log(row)
      },

    },

    data() {
      return {
        dialogVisible: false,
        columns: [
          {
            title: '日期',
            key: 'date'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [],

        postData:{
          empDate: '',
          empName:'',
          empAddress:'',
        },


        rowHandle: {
          custom: [
            {
              text: '自定义按钮',
              type: 'warning',
              size: 'small',
              emit: 'custom-emit-1'
            }
          ]
        }
      }
    }
  }
</script>
