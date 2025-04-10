interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Chiikawa分享站',
    description: `进入 Chiikawa 的治愈宇宙，这里是专注于分享角色介绍和表情包的欢乐站点！了解每个可爱角色的故事，探索他们令人捧腹的互动瞬间，更有丰富的表情包让你在聊天中释放满满萌点。无论你是初次认识 Chiikawa，还是资深粉丝，这里都充满了温暖与乐趣。快来和更多小可爱们一起欢度美好时光吧！`,
    imgSrc: '/static/images/2025-04-10-163015.png',
    href: 'https://chiikawa.online',
  },
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
    imgSrc: '/static/images/2025-03-19-163015.png',
    href: '/blog/02',
  },
  {
    title: 'ICVP融合应用一体化平台',
    description: `VTRON 提供的大屏幕拼接显控产品及其解决方案，可根据不同客户的
应用场景，通过各种屏幕（端），利用网络和各种应用（企业云），将
信息、交互、协作整合在一起，满足用户信息智能化显示与控制的需求。 `,
    imgSrc: '/static/images/2025-03-19-163016.png',
    href: 'https://www.vtron.com.cn/product_def_list_775.html',
  },
  {
    title: 'LEG处理器',
    description: `LEG是一种新的图灵完备的计算机架构，你可以利用它来解决一切算法问题。`,
    imgSrc: '/static/images/2025-03-19-163014.png',
    href: '/blog/03',
  },
  {
    title: 'OmgTV',
    description: `OmgTV 是一款为全球用户打造的随机视频聊天平台，旨在打破边界，为人们带来意想不到的
社交体验。在这里，每一次匹配都可能让你惊呼“OMG！”，从陌生人的日常故事到文化的奇
妙碰撞，每一次相遇都是独一无二的。为用户提供了一个快速、安全且富有趣味的互动空间。`,
    imgSrc: '/static/images/2025-03-19-163017.png',
    href: 'https://luoyisen.com/client/#/omgTv',
  },
]

export default projectsData
