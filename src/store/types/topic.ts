//专题初始页需要的数据
export interface specialType{
    page:number,
    size:number,
    scene_pic_url:string,
    title:string,
    subtitle:string,
    price_info:number
}

//专题详情页需要的数据
export interface topicDetail{
    id: number,
    title:string,
    content:string,
    avatar:string,
    item_pic_url:string,
    subtitle:string,
    topic_category_id:number,
    price_info:number,
    read_count:string,
    scene_pic_url:string,
    topic_template_id:number,
    topic_tag_id:number,
    sort_order:number,
    is_show:number
}