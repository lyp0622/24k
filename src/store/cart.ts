
import React from "react";
import { cartList } from "../utils/type"
import { cartTotal } from "../utils/type"
//ajax请求
import { address, checked, update } from "../service/cart"
import { observable, action, computed } from 'mobx';

export default class CarStore {
    //总数据
    @observable
    cartList: cartList[] = [];

    //总价格和数量
    @observable
    cartTotal: cartTotal = { goodsCount: 0, goodsAmount: 0, checkedGoodsCount: 0, checkedGoodsAmount: 0 };

    //控制css样式
    @observable
    num: number = 1

    //控制选择
    @observable
    index: Array<number> = []

    //控制全选
    @observable
    whole: boolean = false
    //请求数据
    @action
    async setaAddress() {
        let res = await address()
        // console.log(res,"======================")
        this.cartList = res.data.cartList;
        this.cartTotal = res.data.cartTotal;
    }
    //全选与不全选
    @action
    isSelect() {
        this.cartList.map(async (item, index) => {
            //放所有的id
            let productIds = [];
            let string = "";
            //是否选中
            let select = null;
            if (this.cartTotal.goodsCount === this.cartTotal.checkedGoodsCount) {
                select = 0;
            } else {
                select = 1;
            }
            productIds.push(item.product_id)
            string = productIds.join(",");
            let res = await checked(select, string)
            this.cartList = res.data.cartList;
            this.cartTotal = res.data.cartTotal;
        })
    }
    //单个的选择与不选择
    @action
    async oneSelect(isChecked: number, productIds: number) {
        if (isChecked == 1) {
            isChecked = 0
        } else {
            isChecked = 1
        }
        let res = await checked(isChecked, productIds)
        this.cartList = res.data.cartList;
        this.cartTotal = res.data.cartTotal;
    }

    //控制css样式的方法
    @action
    numIS(id: number) {
        this.num = id
        this.index.length = 0
        this.whole = false
    }

    //控制删除的选中与不选中
    @action
    setIndex(index: number) {
        let indexs = this.index.findIndex((item1) => item1 == index);
        if (indexs == -1) {
            this.index.push(index)
        } else {
            this.index.splice(indexs, 1)
        }
        if (this.index.length == this.cartList.length) {
            this.whole = true
        } else {
            this.whole = false
        }

    }

    //控制删除的全选
    @action
    wholeDelete() {
        this.cartList.map((item, index) => {
            let indexs = this.index.findIndex((item1) => item1 == index)
            if (indexs == -1) {
                this.index.push(index)
            }
        })
        this.whole = true
    }

    //控制数量
    @action
    async setCount(item: cartList, together: string) {
        console.log(item, together, "7777777777777777")
        if (together === "+") {
            // console.log(6666666666)
            item.number++
        } else {
            item.number--
        }
        let res = await update(item.goods_id, item.id, item.number, item.product_id);
        this.cartList = res.data.cartList;
        this.cartTotal = res.data.cartTotal;
    }
}



