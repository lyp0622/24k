import {specialType,topicDetail} from '../types/topic'
import {observable,action} from 'mobx'
import {getSpecialData,getTypeDetail} from '../../api/home'

export default class CreateStore{
    @observable
    list:specialType[]=[];
    detaiList:topicDetail[]=[]
    
    //专题页面的初始渲染
    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        console.log(res,'res123');
        this.list = res.data;
    }

    //专题页面的详情
    @action
    async getTypeDetail(obj:object){
        const res:any =await getTypeDetail(obj);
        console.log(res,'res456');
        this.detaiList = res.id;
        console.log(this.detaiList,'detaiList')
    }

}