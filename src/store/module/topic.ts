import {specialType,topicDetail,commentListType} from '../types/topic'
import {observable,action} from 'mobx'
import {getSpecialData,getTypeDetail,commentList} from '../../api/home'

export default class CreateStore{
    @observable
    list:specialType[]=[];    
    //专题页面的初始渲染
    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        // console.log(res,'res123');
        this.list = res.data;
    }

    @observable
    title:topicDetail[]=[]
    //专题页面的详情
    @action
    async getTypeDetail(obj:object){
        const res:any =await getTypeDetail(obj);
        console.log(res,'res456');
        // this.title.push(res)
        this.title = [res];
        console.log(this.title[0].title,'detaiList')
    }

    @observable
    dlist:commentListType[]=[]
    //精品留言
    @action
    async commentList(obj:object){
        const res:any =await commentList(obj);
        console.log(res.data,'============') //查找user_info存在的个数，当user_info为 undefined 时，让undefined="匿名用户"
        this.dlist = res.data;
        console.log(this.dlist,'dlist')
    }

}