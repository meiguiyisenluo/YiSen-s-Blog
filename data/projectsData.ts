interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '移动云手机',
    description: `中国移动云手机是云端运行的虚拟手机，可通过实体手机操控，实现一台手机变多台。云手机是实体
手机的延伸，同样可以聊天、玩游戏、看电影，还具备副号通话、应用多开等特色功能。 `,
    imgSrc: '/static/images/case1-B2sw0F5Z.png',
    href: 'https://cloudphoneh5.buy.139.com/#/cloudphone',
  },
  {
    title: 'nginx autoindx pretty ui',
    description: `nginx-pretty-autoindex, using VITE, Vue@3, and Vue Router@4, Windows File System - Large Image Viewer`,
    imgSrc: '/static/images/2025-03-14-125420.png',
    href: '/blog/02',
  },
  {
    title: 'ICVP融合应用一体化平台',
    description: `VTRON 提供的大屏幕拼接显控产品及其解决方案，可根据不同客户的
应用场景，通过各种屏幕（端），利用网络和各种应用（企业云），将
信息、交互、协作整合在一起，满足用户信息智能化显示与控制的需求。 `,
    imgSrc: '/static/images/2022021811174865.jpg',
    href: 'https://www.vtron.com.cn/product_def_list_775.html',
  },
]

export default projectsData
