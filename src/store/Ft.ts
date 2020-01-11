import { observable, action, computed } from 'mobx'
import {  goodsType, detail } from '../utils/type/Fl'
import {  goods, tab } from '../service/Fl'
export default class CreateStore {
    @observable
    curIndex: number = 0

    @observable
    goodsList: goodsType[] = []

    @observable
    goodsLis: goodsType[] = []

    @observable
    detailList: detail[] = []

    @action
    async tab(index: number, id: number) {
        this.curIndex = index
        console.log(this.curIndex,id)
        const res = await goods(id)
        this.goodsLis = [res.data.currentCategory]
        const res1= await tab(id)
        this.detailList=res1.data.goodsList
    }
    
    @action
    async tabList(categoryId:number){
        const res= await tab(categoryId)
        this.detailList=res.data.goodsList
    }

    @action
    async getgoods(id: number) {
        const res = await goods(id)
        this.goodsList = res.data.brotherCategory
        this.goodsLis = [res.data.currentCategory]
        // console.log(res.data.brotherCategory, '111111')
        // console.log([res.data.currentCategory], '44444444')
        // console.log(res.data, '000')
    }
    @action
     setIndex(index:number){
        this.curIndex = index
     
     }
}