var pages = [
    ['A01_正在初始化硬件模块', 'A01_InitDev',
        'View', require('./customer/common/A01_InitDev.vue')
    ],
    ['A01_设备初始化失败', 'A01_InitDevFail',
        'View', require('./customer/common/A01_InitDevFail.vue')
    ],
    ['A01_交易进行中提示', 'A01_com_Trading',
        'Popup', require('./customer/common/A01_com_Trading.vue')
    ],
    ['A01_交易结果提示是否打印凭条', 'A01_com_transResult',
        'View', require('./common/result.vue')
    ],
    ['A01_公共信息确认页面样式', 'cus_com_informationConfirm',
        'View', require('./customer/common/cus_com_informationConfirm.vue')
    ],
    ['A01_公共信息确认页面两列样式', 'com_Detail_table',
        'View', require('./common/com_Detail_table.vue')
    ],
    ['A01_日期公共样式', 'A01_com_date',
        'View', require('./common/com_date.vue')
    ],
    ['A01_下拉公共样式', 'A01_com_select',
        'View', require('./common/com_select.vue')
    ],
    ['A01_创建下拉公共样式', 'A01_com_newSelect',
        'View', require('./common/com_newSelect.vue')
    ],
    ['A01_显示公共错误信息-有声音', 'A01_ShowReason',
        'View', require('./customer/common/A01_ShowReason.vue')
    ],
    ['A01_显示公共错误信息-无声音', 'A01_ShowReasonNoSound',
    'View', require('./customer/common/A01_ShowReasonNoSound.vue')
    ],
    ['A01_显示公共错误信息并返回', 'A01_ShowReasonAndReturn',
        'View', require('./customer/common/A01_ShowReasonAndReturn.vue')
    ],
    ['A01_显示交易结果（公共）', 'A01_ShowTransResult',
        'View', require('./customer/common/A01_ShowTransResult.vue')
    ],
    ['A01_再次显示交易结果（打印机故障）', 'A01_ShowTransResult4PrinterError',
        'View', require('./customer/common/A01_ShowTransResult4PrinterError.vue')
    ],
    ['A01_暂停服务原因', 'A01_OutServiceReason',
        'View', require('./customer/common/A01_OutServiceReason.vue')
    ],
    ['A01_吞卡折结果', 'A01_EjectResult',
        'View', require('./customer/common/A01_EjectResult.vue')
    ],     
    ['A01_主密钥未加载', 'A01_MstKeyNotLoad',
        'View', require('./customer/common/A01_MstKeyNotLoad.vue')
    ],
    ['A01_打印凭条', 'A01_PrintReceipt',
        'View', require('./customer/common/A01_PrintReceipt.vue')
    ],
    ['A01_打印回单', 'A01_PrintA4HTML',
        'View', require('./customer/common/A01_PrintA4HTML.vue')
    ],
    ['A01_输入帐号和密码', 'A01_InputAccountAndPassword',
        'View', require('./customer/common/A01_InputAccountAndPassword.vue')
    ],
    ['A01_重新输入帐号和密码', 'A01_InputAccountAndPasswordAgain',
        'View', require('./customer/common/A01_InputAccountAndPasswordAgain.vue')
    ],
    ['A01_正在读卡……', 'A01_CardReading',
        'Popup', require('./customer/common/A01_CardReading.vue')
    ],
    ['A01_正在读证件……', 'A01_IDCardReading',
        'Popup', require('./customer/common/A01_IDCardReading.vue')
    ],
    ['A01_正在读折……', 'A01_PassbookReading',
        'Popup', require('./customer/common/A01_PassbookReading.vue')
    ],
    ['A01_选择交易介质(4种)', 'A01_ChooseMediaType',
        'View', require('./customer/common/A01_ChooseMediaType.vue')
    ],
    ['A01_输入证件信息(View)', 'A01_inputIDinfo',
        'View', require('./customer/common/A01_inputIDinfo.vue')
    ],
    ['A01_输入详细证件信息', 'A01_InputMoreIDInfo',
        'View', require('./customer/common/A01_InputMoreIDInfo.vue')
    ],
    ['A01_回显详细证件信息', 'A01_ShowMoreIDInfo',
        'View', require('./customer/common/A01_ShowMoreIDInfo.vue')
    ],
    ['A01_动态显示菜单', 'A01_Menu',
        'View', require('./customer/common/A01_Menu.vue')
    ],
    ['A01_选择证件类型', 'A01_SelectDocumentType',
        'View', require('./customer/common/A01_SelectDocumentType.vue')
    ],
    ['A01_选择证件类型(ALL)', 'A01_SelectDocumentTypeAll',
        'View', require('./customer/common/A01_SelectDocumentTypeAll.vue')
    ],
    ['A01_选择证件类型1(预删除)', './customer/common/cust_com_SelectDocumentType.html',
    'View', require('./customer/common/cust_com_SelectDocumentType.vue')
    ],
    ['A01_选择证件类型,不含非二代证', 'cust_com_SelectShenfengzheng',
        'View', require('./customer/common/cust_com_SelectShenfengzheng.vue')
    ],
    ['A01_人脸识别视频显示页面', 'A01_FaceCamera',
        'View', require('./customer/common/A01_FaceCamera.vue')
    ],
    ['A01_退出卡折证提示', 'A01_TakeCardOrPassbook',
        'View', require('./customer/common/A01_TakeCardOrPassbook.vue')
    ],
    ['A01_回收卡折证提示', 'A01_RetractCardOrPassbook',
        'View', require('./customer/common/A01_RetractCardOrPassbook.vue')
    ],
    ['A01_插入银行卡提示', 'A01_InputCardOrPassbook',
        'View', require('./customer/common/A01_InputCardOrPassbook.vue')
    ],
    ['A01_插入银行卡提示(非桌面款)', 'A01_InputCardOrPassbook2',
        'View', require('./customer/common/A01_InputCardOrPassbook2.vue')
    ],
    ['A01_电子签名异常是否继续交易', 'A01_SignError',
        'Popup', require('./customer/common/A01_SignError.vue')
    ],
    ['A01_外国人居留证是否带芯片提示', 'A01_ForeignerTip',
        'Popup', require('./customer/common/A01_ForeignerTip.vue')
    ],
    ['A01_回单打印成功', 'A01_HDPrintOK',
        'View', require('./customer/common/A01_HDPrintOK.vue')
    ],
    ['A01_高拍仪拍摄证件', 'A01_HignCamTakePhoto',
        'View', require('./customer/common/A01_HignCamTakePhoto.vue')
    ],
    ['A01_审核高拍仪拍摄证件', 'A01_AuthHighCamPic',
        'View', require('./customer/common/A01_AuthHighCamPic.vue')
    ],
    ['A01_前端指纹审核PDF', 'A01_AuditorVerifyIDPDF',
        'View', require('./common/A01_AuditorVerifyIDPDF.vue')
    ],
    ['A01_前端指纹审核实时登记PDF', 'A01_AuditorVerifyIDPDFMarketing',
        'View', require('./common/A01_AuditorVerifyIDPDFMarketing.vue')
    ],
    ['A01_前端指纹审核NoPDF', 'A01_AuditorVerifyIDNoPDF',
        'View', require('./common/A01_AuditorVerifyIDNoPDF.vue')
    ],
    ['A01_菜单下载', 'A01_DownloadMenu',
        'View', require('./common/A01_DownloadMenu.vue')
    ],
    ['A01_参数下载', 'A01_DownloadParams',
        'View', require('./common/A01_DownloadParams.vue')
    ],
    ['A01_UFile下载', 'A01_DownloadUFiles',
        'View', require('./common/A01_DownloadUFiles.vue')
    ],
    ['A01_密钥下载', 'A01_DownloadWorkKey',
        'View', require('./common/A01_DownloadWorkKey.vue')
    ],
    ['A01_参数初始化', 'A01_InitializeParams',
        'View', require('./common/A01_InitializeParams.vue')
    ],
    ['A01_数据库维护中', 'A01_DataBaseMgn',
        'View', require('./common/A01_DataBaseMgn.vue')
    ],
    ['A01_敏感信息维护中', 'A01_SensitiveData',
        'View', require('./common/A01_SensitiveData.vue')
    ],
    ['A01_（申请书签名）电子签名', 'A01_ESign',
        'View', require('./customer/common/A01_ESign.vue')
    ],
    ['A01_非二代证件处理', 'A01_DealNicpCard',
        'Popup', require('./customer/common/A01_DealNicpCard.vue')
    ],
    ['A01_提示读取证件', 'A01_NeedReadCardTip',
        'View', require('./customer/common/A01_NeedReadCardTip.vue')
    ],
    ['A01_广告屏等待页面', 'A01_WaitingForAD',
        'Popup', require('./customer/common/A01_WaitingForAD.vue')
    ],    
    ['阅读协议【所有】', 'A01_ShowApplication',
        'View', require('./customer/common/A01_ShowApplication.vue')
    ],
    ['强制显示交易结果', 'A01_ForceShowReSult',
        'View', require('./customer/common/A01_ForceShowReSult.vue')
    ],
    ['是否退出登录模式', 'cust_isLogout',
        'Popup', require('./common/cust_isLogout.vue')
    ],
    ['插入银行卡提示', 'cust_com_InputCard',
        'View', require('./customer/common/cust_com_InputCard.vue')
    ],
    ['是否打印凭条', 'cust_com_IsPrintReceipt',
        'View', require('./customer/common/cust_com_IsPrintReceipt.vue')
    ],

    ['暂停服务', './cust_main_OutService.html', 'View', require('./cust_main_OutService.vue')],
    ['显示信息', './cust_ShowReason.html', 'View', require('./cust_ShowReason.vue')],

    ['com暂停服务', './common/cust_main_OutService.html',
        'View', require('./common/cust_main_OutService.vue')
    ],
    ['com显示信息', './common/cust_ShowReason.html',
        'View', require('./common/cust_ShowReason.vue')
    ],
    ['com正在处理', './common/cust_main_Sysing.html',
        'View', require('./common/A01_main_Sysing.vue')
    ],

    ['主菜单', './customer/business/cust_bus_index.html',
        'View', require('./customer/business/cust_bus_index.vue')
    ],
    ['空闲广告', './customer/business/cust_bus_advertise',
        'View', require('./customer/business/cust_bus_advertise.vue')
    ],
    ['迎客', './customer/business/cust_bus_welcome',
        'View', require('./customer/business/cust_bus_welcome.vue')
    ],

    ['布局示例测试', './customer/common/cust_com_LayoutMainDemo.html',
        'View', require('./customer/common/cust_com_LayoutMainDemo.vue')
    ],
    ['Popup示例测试', './customer/common/cust_com_PopupDemo.html',
        'Popup', require('./customer/common/cust_com_PopupDemo.vue')
    ],
    ['Dialog示例测试', './customer/common/cust_com_DialogDemo.html',
        'Popup', require('./customer/common/cust_com_DialogDemo.vue')
    ],
    ['Swiper示例测试', './customer/common/cust_com_SwiperDemo.html',
        'View', require('./customer/common/cust_com_SwiperDemo.vue')
    ],
    ['many测试', './customer/common/cust_com_ManyDemo.html',
        'View', require('./customer/common/cust_com_ManyDemo.vue')
    ],
    ['echarts测试', './customer/common/cust_com_EChartsDemo.html',
        'View', require('./customer/common/cust_com_EChartsDemo.vue')
    ],
    ['界面主题切换', './customer/common/cust_com_SwitchTheme',
        'View', require('./customer/common/cust_com_SwitchTheme.vue')
    ],

    ['录入其他证件资料', './customer/common/cust_com_InsertOtherDocumentInfo.html',
        'View', require('./customer/common/cust_com_InsertOtherDocumentInfo.vue')
    ],
    ['联网核查', './customer/common/cust_com_NetCheck.html',
        'View', require('./customer/common/cust_com_NetCheck.vue')
    ],
    ['是否打印凭条', './customer/common/cust_com_IsPrintReceipt.html',
        'View', require('./customer/common/cust_com_IsPrintReceipt.vue')
    ],
    ['第一次输入密码', './customer/common/cust_com_InputPassword.html',
        'View', require('./customer/common/cust_com_InputPassword.vue')
    ],
    ['第一次输入密码2', './customer/common/cust_com_InputPassWord.html',
        'View', require('./customer/common/cust_com_InputPassword.vue')
    ],
    ['第二次输入密码', './customer/common/cust_com_InputPasswordAgain.html',
        'View', require('./customer/common/cust_com_InputPasswordAgain.vue')
    ],
    ['密码错误提示（非三次）', './customer/common/cust_com_InputPasswordError.html',
        'View', require('./customer/common/cust_com_InputPasswordError.vue')
    ],
    ['输入证件信息（Popup）', './customer/common/cust_com_InputDocumentInfo.html',
        'Popup', require('./customer/common/cust_com_InputDocumentInfo.vue')
    ],
    ['插入银行卡提示', './customer/common/cust_com_InputCard.html',
        'View', require('./customer/common/cust_com_InputCard.vue')
    ],
    ['取走银行卡提示', './customer/common/cust_com_TakeCard.html',
        'View', require('./customer/common/cust_com_TakeCard.vue')
    ],
    ['吞卡提示', './customer/common/cust_com_RetractCard',
        'View', require('./customer/common/cust_com_RetractCard.vue')
    ],
    ['取走证件（身份证需要两个，失败与成功）', './customer/common/cust_com_IDout.html',
        'View', require('./customer/common/cust_com_IDout.vue')
    ],
    ['刷证件', './customer/common/cust_com_IDin.html',
        'View', require('./customer/common/cust_com_IDin.vue')
    ],
    ['审核员审核', './customer/common/cust_com_VerifyIdentity.html',
        'View', require('./customer/common/cust_com_VerifyIdentity.vue')
    ],
    ['坐席审核（即后台审核身份）', './customer/common/cust_com_SeatVerify.html',
        'View', require('./customer/common/cust_com_SeatVerify.vue')
    ],
    ['移动PAD审核', './customer/common/Cust_Pad_Check',
        'View', require('./customer/common/Cust_Pad_Check.vue')
    ],
    ['交易进行中提示', './customer/common/cust_com_Trading.html',
        'Popup', require('./customer/common/cust_com_Trading.vue')
    ],
    ['交易成功提示', './customer/common/cust_com_TradeSuccess.html',
        'View', require('./customer/common/cust_com_TradeSuccess.vue')
    ],
    ['交易失败提示', './customer/common/cust_com_TradeFailed.html',
        'View', require('./customer/common/cust_com_TradeFailed.vue')
    ],
    ['取走凭条提示', './customer/common/cust_com_TakeReceipt.html',
        'View', require('./customer/common/cust_com_TakeReceipt.vue')
    ],

    ['审核员录入指纹', './customer/common/cust_com_FingerDistinguish.html',
        'View', require('./customer/common/cust_com_FingerDistinguish.vue')
    ],
    ['审核员选择Or输入指纹编号', './customer/common/cust_com_AuditorVerifyID.html',
        'Popup', require('./customer/common/cust_com_AuditorVerifyID.vue')
    ],
    ['（申请书签名）展示申请书及签名结果', './customer/common/cust_com_ShowSignResult.html',
        'View', require('./customer/common/cust_com_ShowSignResult.vue')
    ],
    ['（申请书签名）展示申请书及提示', './customer/common/cust_com_ShowApplication.html',
        'View', require('./customer/common/cust_com_ShowApplication.vue')
    ],
    ['打印申请书', './customer/common/cust_com_PrintApplication.html',
        'View', require('./customer/common/cust_com_PrintApplication.vue')
    ],
    ['取走申请书', './customer/common/cust_com_TakeApplication.html',
        'View', require('./customer/common/cust_com_TakeApplication.vue')
    ],
    ['放入申请书', './customer/common/cust_com_PutApplication.html',
        'View', require('./customer/common/cust_com_PutApplication.vue')
    ],
    ['（城市选择器）省市区三级联动选择', './customer/common/cust_com_CitySelector.html',
        'Popup', require('./customer/common/cust_com_CitySelector.vue')
    ],
    ['是否结束交易提示弹框', './customer/common/cust_com_TradeFinishTip.html',
        'Popup', require('./customer/common/cust_com_TradeFinishTip.vue')
    ],
    ['人脸审核繁忙提示弹框', './customer/common/cust_com_VertifyBusyTip.html',
        'Popup', require('./customer/common/cust_com_VertifyBusyTip.vue')
    ],
    ['显示错误提示信息', './customer/common/cust_com_ShowReason.html',
        'View', require('./customer/common/cust_com_ShowReason.vue')
    ],
    ['显示错误信息', './customer/common/Cust_ShowReason.html',
        'View', require('./customer/common/Cust_ShowReason.vue')
    ],
    ['交易成功提示', './cust_com_TradeSuccess.html',
        'View', require('./customer/common/cust_com_TradeSuccess.vue')
    ],
    ['请取走您的银行卡', './cust_com_TakeCard',
        'View', require('./customer/common/cust_com_TakeCard.vue')
    ],
    ['显示公共成功信息', './customer/common/cust_com_TradeSuccess.html',
        'View', require('./customer/common/cust_com_TradeSuccess.vue')
    ],
    ['显示公共错误信息1', './customer/common/Cust_ShowReason.html',
        'View', require('./customer/common/Cust_ShowReason.vue')
    ],
    ['显示公共错误信息2', './customer/common/cust_com_ShowReason.html',
        'View', require('./customer/common/Cust_ShowReason.vue')
    ],
    ['输入证件信息例子', './demo/com_inputIDinfo.html',
        'View', require('./demo/com_inputIDinfo.vue')
    ],
    ['理财产品认购/申购信息填写例子', './demo/com_buyProductInfo.html',
        'View', require('./demo/com_buyProductInfo.vue')
    ],
    ['借记卡交易安全锁', './demo/tran_safety_key.html',
        'View', require('./demo/tran_safety_key.vue')
    ],
    ['个人税收居民身份声明', './demo/identity_statement.html',
        'View', require('./demo/identity_statement.vue')
    ],
    ['滚动条例子', './demo/scroll.html',
        'View', require('./demo/scroll.vue')
    ],
    ['迎客', './demo/welcome.html',
        'View', require('./demo/welcome.vue')
    ],
    ['生日', './demo/birthday.html',
        'View', require('./demo/birthday.vue')
    ],
    ['持有基金产品信息例子', './demo/com_holdFundList.html',
        'View', require('./demo/com_holdFundList.vue')
    ],
    ['A01_精准营销', 'cust_com_isLoginOutAndShowSaleInfo',
        'Popup', require('./customer/common/cust_com_isLoginOutAndShowSaleInfo.vue')
    ],
    ['A01_风险评估已过期', 'A01_RiskExpiredTip',
        'Popup', require('./customer/common/A01_RiskExpiredTip.vue')
    ],
    ['A01_风险评估未评估', 'A01_NotRiskTip',
        'Popup', require('./customer/common/A01_NotRiskTip.vue')
    ],
    ['是否补登折', 'cust_com_IfBonusRecord',
        'View', require('./customer/common/cust_com_IfBonusRecord.vue')
    ],
    ['显示版本过低提示页面', 'A01_ShowVersion',
        'View', require('./customer/common/A01_ShowVersion.vue')
    ],
    ['显示机器未重启页面', 'A01_ShowRebootTerm',
        'View', require('./customer/common/A01_ShowRebootTerm.vue')
    ],
    ['显示设备故障或未配置页面', 'A01_ShowDeviceError',
        'View', require('./customer/common/A01_ShowDeviceError.vue')
    ],
    ['暂停服务页面', 'A01_OutService',
    'View', require('./customer/common/A01_OutService.vue')
    ],
    ['信息治理显示页面', 'A01_ShowReasonForCustMnt',
    'View', require('./customer/common/A01_ShowReasonForCustMnt.vue')
    ],
    ['模糊检索', 'A01_Search',
    'View', require('./customer/common/A01_Search.vue')
    ]
]

export default pages