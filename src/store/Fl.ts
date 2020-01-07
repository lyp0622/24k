import {observable, action,computed } from 'mobx'
import {CategoryType} from '../utils/type/Fl'
import {getCategory} from '../service/Fl'
export default class CreateStore{
    @observable
        list:CategoryType[]=[]

        curIndex:number=0
    @action
    async getCategory(){
        const res:any =await getCategory();
        console.log(res.data.categoryList,'res');
        this.list = res.data.categoryList;
        // console.log(this.list,'111111111')
    }

}