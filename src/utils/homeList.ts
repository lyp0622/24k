export interface channel {
  id: number,
  name: string,
  url: string,
  icon_url: string
}
export interface ItemType {
  name: string,
  image_url: string
}
export interface newList {
  name: string,
  id: number,
  list_pic_url: string,
  retail_price: number
}
export interface brandList {
  id: number,
  name: string,
  list_pic_url: string,
  simple_desc: string,
  pic_url: string,
  floor_price: number,
  app_list_pic_url: string,
  new_pic_url: string
}
export interface hotGoodsList {
  id: number
  name: string
  list_pic_url: string
  retail_price: number
  goods_brief: string
}
export interface topicList {
  id: number
  title: string
  content: string
  avatar: string
  item_pic_url: string
  subtitle: string
  topic_category_id: number
  price_info: number
  read_count: string
  scene_pic_url: string
  topic_template_id: number
  topic_tag_id: number
  sort_order: number
  is_show: number
}
