import {observable, action, computed} from 'mobx'
import {HomeList,liveHome} from "../api/Homelist"
import {ItemType} from "../utils/homeList"
import {channel} from "../utils/channel"
import {brandList} from "../utils/brandList"
import {newList} from "../utils/newList"

class HomeStore{
    @observable 
    list:ItemType[]=[]
    @observable
    channelList:channel[]=[]
    @observable
    brandList:brandList[]=[]
    @observable 
    newList:newList[]=[]
    @action
     async HomeList(){
    let res:any=await HomeList()
       console.log(res)
       this.list=res.banner
       this.channelList=res.channel
       this.brandList=res.brandList
       this.newList=res.newGoodsList
       console.log(res.banner,"67890")
     }
     @action
     async liveHome(params:number){
         console.log(params,"实例")
        let res:any=await liveHome(params)
        console.log(res)
     }

}
export default HomeStore

