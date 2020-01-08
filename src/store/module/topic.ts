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
    @observable
    name:commentListType[]=[]
    //精品留言
    @action
    async commentList(obj:object){
        const res:any =await commentList(obj);
        console.log(res.data[0].user_info.username,'dlist123')
        console.log(res.data,'============')
        this.dlist = res.data;
        this.name=res.data[0].user_info.username
        // res.data[0].user_info?this.name=res.data[0].user_info.username : this.name='匿名用户'
        console.log(this.dlist,'dlist')
    }

}