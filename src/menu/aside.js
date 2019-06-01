// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '用户管理',
    icon: 'folder-o',

    children: [
      { path: '/demo/page1', title: '系统用户' },
      { path: '/demo/page2', title: '权限管理' },
    ]
  }
]
