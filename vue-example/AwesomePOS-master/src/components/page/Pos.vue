<template>
    <div class="pos">
        <el-row>
            <el-col :span="7" class="left-list" id="order">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border show-summary style="width: 100%">
                            <el-table-column label="商品" prop="goodsName">
                            </el-table-column>
                            <el-table-column label="数量" prop="count">
                            </el-table-column>
                            <el-table-column label="金额" prop="price">
                            </el-table-column>
                            <el-table-column label="操作" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" name="del" @click="removeCur(scope.row)">删除</el-button>
                                    <el-button type="text" @click="addGoodList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="totalDiv">
                            <small>数量：</small>
                            <strong>{{totalCount}}</strong>
                            <small>总计:</small>
                            <strong>{{totalMoney}}</strong>元
                        </div>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="removeAll">删除</el-button>
                            <el-button type="success" @click="pain">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="结账">
                        结账
                    </el-tab-pane>   
                </el-tabs>
            </el-col>
            <!-- 产品栏 -->
            <el-col :span="17" class="right-list">
                <!-- 产品栏上半部分 -->
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-lis">
                        <ul>
                            <li v-for="(good, key) in oftenGoods" :key="key" @click="addGoodList(good)">
                                <span>{{ good.goodsName }}</span>
                                <span>￥{{ good.price }}元</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <!-- 产品栏下半部分 -->
                <!-- 选项卡 -->
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul class="cookList">
                                <li v-for="(good,key) in type0Goods" :key="key" @click="addGoodList(good)">
                                    <span><img :src="good.goodsImg" width="100%"></span>
                                    <span>{{ good.goodsName }}</span>
                                    <span>￥{{ good.price }}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class="cookList">
                                <li v-for="(good,key) in type1Goods" :key="key" @click="addGoodList(good)">
                                    <span><img :src="good.goodsImg" width="100%"></span>
                                    <span>{{ good.goodsName }}</span>
                                    <span>￥{{ good.price }}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class="cookList">
                                <li v-for="(good,key) in type2Goods" :key="key" @click="addGoodList(good)">
                                    <span><img :src="good.goodsImg" width="100%"></span>
                                    <span>{{ good.goodsName }}</span>
                                    <span>￥{{ good.price }}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class="cookList">
                                <li v-for="(good,key) in type3Goods" :key="key">
                                    <span><img :src="good.goodsImg" width="100%"></span>
                                    <span>{{ good.goodsName }}</span>
                                    <span>￥{{ good.price }}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
        <div v-if="isPain" class="dialog">{{painmsg}}</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
       return{
            tableData: [],
            oftenGoods: [],
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],
            isPain: false,
            painmsg: ''
            //totalMoney: ''
       }
    },
    created() {
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(res=>{
            this.oftenGoods = res.data
        })
        .catch(err=>{
            alert('网络错误，请检查设置')
        })

         axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(res=>{
            this.type0Goods = res.data[0];
            this.type1Goods = res.data[1];
            this.type2Goods = res.data[2];
            this.type3Goods = res.data[3];
        })
        .catch(err=>{
            alert('网络错误，请检查设置')
        })
    },
    mounted() {
        var orderH = document.body.clientHeight;
        //console.log(orderH)
        document.getElementById('order').style.height = orderH + 'px';
    },
    methods: {
        addGoodList(goods) {
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                //console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
        },
        removeCur(good) { //删除当前的
            this.tableData = this.tableData.filter(item => item !== good)
        },
        removeAll() { //删除全部
            this.tableData = []
        },
        pain() {
            console.log(this.tableData.length)
            if(this.tableData.length !== 0){
                this.painmsg = '支付成功'
            }else{
                this.painmsg = '请先选购'
            }
            this.isPain = true;

            setTimeout(()=>{
                this.isPain = false;
            },1500)
        }
    },
    computed: {
        totalMoney() {
            return this.tableData.reduce((prev, next) => {
                return prev + next.count * next.price;
            },0)
        },
        totalCount() {
            let a = 0
            for(var i = 0;i<this.tableData.length;i++) {
                a+=this.tableData[i].count;
            }
            return a    
        }
    }
}
</script>
<style>
    .pos {
        color: black;
    }
    .left-list {
        background-color: #8f2020;
    }

    .div-btn {
        margin-top: 20px;
    }

    .title {
        text-align: left;
        background-color: #fff;
    }
    .often-goods-lis ul li {
        list-style: none;
        float: left;
        margin: 10px;
        background-color: #55ebd7;
    }
    .goods-type {
        clear: both;
    }
   .cookList li {
       list-style: none;
       width: 20%;
       border: 1px solid #e5e9f2;
       height: auto;
       overflow: hidden;
       margin: 8px;
       padding: 2px;
       float: left;
       cursor: pointer;
   }
   .dialog {
       position: fixed;
       left: 50%;
       top: 2%;
       background-color: yellowgreen;
   }
</style>
