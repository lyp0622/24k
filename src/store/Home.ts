import {observable, action, computed} from 'mobx'
import {HomeList,liveHome,getCategory} from "../api/Homelist"
import {ItemType,channel,newList,brandList,hotGoodsList,topicList} from "../utils/homeList"

class HomeStore{
    @observable 
    list:ItemType[]=[]
    @observable
    channelList:channel[]=[]
    @observable
    brandList:brandList[]=[]
    @observable 
    newList:newList[]=[]
    @observable
    hotGoodsList:hotGoodsList[]=[]
    @observable 
    topicList:topicList[]=[]
    @action
     async HomeList(){//获取的是首页的数据，方便对于首页进行渲染，操作
    let res:any=await HomeList()
       console.log(res)
       this.list=res.banner
       this.channelList=res.channel
       this.brandList=res.brandList
       this.newList=res.newGoodsList
       this.hotGoodsList=res.hotGoodsList
       this.topicList=res.topicList
       console.log(res.banner,"67890")
     }
     @action//获取的是路由后的数据，即为首页的跳转详情后的数据
     async liveHome(params:number){
         console.log(params,"实例")
            let data={
                categoryId:params,
                page:1,
                size:1000
            }
        let res:any=await liveHome(data)
        console.log(res)
     }
     @action
     async getCategory(params:number){
         let res:any=await getCategory(params)
         console.log(res,"带有详细id的数据")
     }
}
export default HomeStore

