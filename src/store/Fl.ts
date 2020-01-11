import { observable, action, computed } from 'mobx'
import { CategoryType, lyp } from '../utils/type/Fl'
import { getCategory, fn} from '../service/Fl'
export default class CreateStore {
    @observable
    list: CategoryType[] = []

    @observable
    curIndex: number = 0

    @observable
    ListItem: lyp[] = []

    @observable
    lis: CategoryType[] = []

    @action
    async getCategory() {
        const res = await getCategory();
        console.log(res.data.categoryList, 'res');
        this.list = res.data.categoryList;
        // console.log(this.list,'111111111')
        this.ListItem = res.data.categoryList[0].subCategoryList
        this.lis = [res.data.categoryList[0]]
        this.curIndex = 0
    }

    @action
    async fn(index: number, id: number) {
        console.log(index)
        this.curIndex = index
        const res = await fn(id);
        console.log(res)
        this.ListItem = res.data.currentCategory.subCategoryList
        this.lis = [res.data.currentCategory]
    }
}