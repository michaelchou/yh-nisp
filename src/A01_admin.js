var pages = [
    ['维护管理菜单', './admin/adm_bus_index.html',
        'View', require('./admin/adm_bus_index.vue')
    ],
    ['管理员登录', './admin/adm_Login.html',
        'View', require('./admin/adm_Login.vue')
    ],
    ['界面主题切换', './admin/adm_com_SwitchTheme',
        'View', require('./admin/adm_com_SwitchTheme.vue')
    ],
    ['历史清机查询结果显示', './admin/adm_BusQuery_ClearMachine.html',
        'View', require('./admin/adm_BusQuery_ClearMachine.vue')
    ],
    ['吞卡明细结果显示', './admin/adm_BusQuery_RCardDetail.html',
        'View', require('./admin/adm_BusQuery_RCardDetail.vue')
    ],
    ['安全工具明细结果显示', './admin/adm_BusQuery_SafeTool.html',
        'View', require('./admin/adm_BusQuery_SafeTool.vue')
    ],
    ['发卡明细结果显示', './admin/adm_BusQuery_SCardDetail.html',
        'View', require('./admin/adm_BusQuery_SCardDetail.vue')
    ],
    ['交易查询结果显示', './admin/adm_BusQuery_TransQuery.html',
        'View', require('./admin/adm_BusQuery_TransQuery.vue')
    ],
    ['业务统计查询', './admin/adm_BusQuery_BusinessStatistics.html',
        'View', require('./admin/adm_BusQuery_BusinessStatistics.vue')
    ],
    ['申请书统计查询', './admin/adm_BusQuery_ApplicationStatistics.html',
        'View', require('./admin/adm_BusQuery_ApplicationStatistics.vue')
    ],
    ['清机发卡箱', './admin/adm_ClearMachineMng_ClearCardS.html',
        'View', require('./admin/adm_ClearMachineMng_ClearCardS.vue')
    ],
    ['清机发卡箱故障', './admin/adm_com_DevError.html',
        'View', require('./admin/adm_com_DevError.vue')
    ],
    ['清机读卡器', './admin/adm_ClearMachineMng_ClearCardR.html',
        'View', require('./admin/adm_ClearMachineMng_ClearCardR.vue')
    ],
    ['清机K令', './admin/adm_ClearMachineMng_ClearKorder.html',
        'View', require('./admin/adm_ClearMachineMng_ClearKorder.vue')
    ],
    ['清机K宝', './admin/adm_ClearMachineMng_ClearKtreasure.html',
        'View', require('./admin/adm_ClearMachineMng_ClearKtreasure.vue')
    ],
    ['高拍仪配置选择', './admin/adm_DeviceMng_HspConfSelect.html',
        'View', require('./admin/adm_DeviceMng_HspConfSelect.vue')
    ],
    ['一级菜单管理', './admin/adm_MenuMng_FirstMenu.html',
        'View', require('./admin/adm_MenuMng_FirstMenu.vue')
    ],
    ['二级菜单管理', './admin/adm_MenuMng_SecondMenu.html',
        'View', require('./admin/adm_MenuMng_SecondMenu.vue')
    ],
    ['输入三组主密钥', './admin/adm_SecretKeyMng_LoadKey.html',
        'View', require('./admin/adm_SecretKeyMng_LoadKey.vue')
    ],
    ['外设状态检测', './admin/adm_DeviceMng_DeviceCheck.html',
        'View', require('./admin/adm_DeviceMng_DeviceCheck.vue')
    ],
    ['系统录入员', './admin/adm_SystemMng_SystemEntry.html',
        'View', require('./admin/adm_SystemMng_SystemEntry.vue')
    ],
    ['自助模式', './admin/adm_MenuMng_SelfServiceMode.html',
        'View', require('./admin/adm_MenuMng_SelfServiceMode.vue')
    ],
    ['签到成功提示', './admin/adm_SystemMng_SignSuccess.html',
        'View', require('./admin/adm_SystemMng_SignSuccess.vue')
    ],
    ['确认是否重启', './admin/adm_SystemMng_Restart.html',
        'View', require('./admin/adm_SystemMng_Restart.vue')
    ],
    ['确认是否关机', './admin/adm_SystemMng_PowerOff.html',
        'View', require('./admin/adm_SystemMng_PowerOff.vue')
    ],
    ['确认是否退出管理员', './admin/adm_SystemMng_ExitAdm.html',
        'View', require('./admin/adm_SystemMng_ExitAdm.vue')
    ],
    ['第一次录入指纹', './admin/adm_SystemMng_InputFingerPrint1.html',
        'View', require('./admin/adm_SystemMng_InputFingerPrint1.vue')
    ],
    ['第二次录入指纹', './admin/adm_SystemMng_InputFingerPrint2.html',
        'View', require('./admin/adm_SystemMng_InputFingerPrint2.vue')
    ],
    ['第三次录入指纹', './admin/adm_SystemMng_InputFingerPrint3.html',
        'View', require('./admin/adm_SystemMng_InputFingerPrint3.vue')
    ],
    ['提示失败信息', './admin/adm_com_ShowFailReason.html',
        'View', require('./admin/adm_com_ShowFailReason.vue')
    ],
    ['提示信息', './admin/adm_com_ShowReason.html',
        'View', require('./admin/adm_com_ShowReason.vue')
    ],
    ['提示成功信息', './admin/adm_com_ShowSuccessReason.html',
        'View', require('./admin/adm_com_ShowSuccessReason.vue')
    ],
    ['是否结束交易提示弹框', './customer/common/cust_com_TradeFinishTip.html',
        'Popup', require('./customer/common/cust_com_TradeFinishTip.vue')
    ],
    ['管理员用户号、密码错误提示', './admin/adm_LoginError.html',
        'View', require('./admin/adm_LoginError.vue')
    ]

]

export default pages