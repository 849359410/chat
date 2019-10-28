/**
 * @pageName 公共头部显示
 * @pageRight 公共头部是否需要显示完成按钮
 *
 * */
export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    // 通讯录
    path: "/diary",
    name: "Diary",
    component: () => import("../views/diary.vue")
  },
  {
    // 好友资料
    path: "/personal/:id",
    name: "Personal",
    component: () => import("../views/personal.vue")
  },
  {
    // 发现
    path: "/find",
    name: "Find",
    component: () => import("../views/find.vue")
  },
  {
    // 我
    path: "/my",
    name: "My",
    component: () => import("../views/Myself/my.vue")
  },
  {
    // 登录
    path: "/login",
    name: "Login",
    component: () => import("../views/login/login.vue"),
	  meta: { pageName: "登录" }
  },
  {
    // 注册
    path: "/register",
    name: "Register",
    component: () => import("../views/register/register.vue"),
	  meta: { pageName: "注册" }
  },
  {
    // 个人资料
    path: "/myInformation",
    name: "MyInformation",
    component: () => import("../views/Myself/MyInformation.vue")
  },
  {
    // 设置
    path: "/adjustment",
    name: "Adjustment",
    component: () => import("../views/Myself/Adjustment.vue")
  },
  {
    // 账号与安全
    path: "/security",
    name: "Security",
    component: () => import("../views/Myself/Security.vue")
  },
	{
		// 修改密码
		path: "/modifyPass",
		name: "modifyPass",
		component: () => import("../views/Myself/modifyPass.vue"),
		meta: { pageName: "修改密码", pageRight: true }
	},
  {
    // 聊天
    path: "/chat",
    name: "Chat",
    component: () => import("../views/chat/chat.vue")
  },
  {
    // 好友聊天详情
    path: "/friendParticulars",
    name: "FriendParticulars",
    component: () => import("../views/chat/FriendParticulars.vue")
  },
  {
    // 群聊天详情
    path: "/groupParticulars",
    name: "GroupParticulars",
    component: () => import("../views/chat/GroupParticulars.vue")
  },
  {
    // 群成员
    path: "/groupMember",
    name: "GroupMember",
    component: () => import("../views/chat/GroupMember.vue")
  },
  {
    // 修改群昵称 && 修改群聊天名称
    path: "/modifyNickname/:id",
    name: "ModifyNickname",
    component: () => import("../views/chat/ModifyNickname.vue")
  },
  {
    // 群公告
    path: "/groupNotice",
    name: "GroupNotice",
    component: () => import("../views/chat/GroupNotice.vue")
  },
  {
    // 编辑群公告
    path: "/editNotice",
    name: "EditNotice",
    component: () => import("../views/chat/EditNotice.vue")
  },
  {
    // 添加好友
    path: "/addFriends",
    name: "AddFriends",
    component: () => import("../views/AddFriends.vue")
  },
  {
    // 发起群聊
    path: "/groupChat",
    name: "GroupChat",
    component: () => import("../views/GroupChat.vue")
  },
  {
    // 新的朋友
    path: "/newFriend",
    name: "NewFriend",
    component: () => import("../views/NewFriend.vue")
  }
];
