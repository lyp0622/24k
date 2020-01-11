import React from 'react'
import { observable, action, computed } from 'mobx'
import { HomeType } from '../util/type'
import { getData } from '../service/index'

export default class CartStore {
    @observable
    data: HomeType = {
        banner: [],
        channel: [],
        newGoodsList: [],
        hotGoodsList: [],
        brandList: [],
        topicList: [],
        categoryList: []
    }

    @action
    async getData() {
        let res = await getData();
        this.data = res.data;
    }
}