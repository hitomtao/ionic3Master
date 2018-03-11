webpackJsonp([3],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabListPageModule", function() { return TabListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_list__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabListPageModule = (function () {
    function TabListPageModule() {
    }
    TabListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_list__["a" /* TabListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_list__["a" /* TabListPage */]),
            ],
        })
    ], TabListPageModule);
    return TabListPageModule;
}());

//# sourceMappingURL=tab-list.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabListPage = (function () {
    function TabListPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.categoryData = [
            {
                name: "潮流女装",
                typeNumber: '102',
                isSelect: true
            },
            {
                name: "品牌男装",
                typeNumber: '103',
                isSelect: false
            },
            {
                name: "热门推荐",
                typeNumber: '101',
                isSelect: false
            },
            {
                name: "内衣配饰",
                typeNumber: '104',
                isSelect: false
            },
            {
                name: "家用电器",
                typeNumber: '105',
                isSelect: false
            },
            {
                name: "电脑办公",
                typeNumber: '106',
                isSelect: false
            },
            {
                name: "手机数码",
                typeNumber: '107',
                isSelect: false
            },
            {
                name: "母婴频道",
                typeNumber: '108',
                isSelect: false
            },
            {
                name: "图书",
                typeNumber: '109',
                isSelect: false
            },
            {
                name: "家居家纺",
                typeNumber: '110',
                isSelect: false
            },
            {
                name: "居家生活",
                typeNumber: '111',
                isSelect: false
            },
            {
                name: "家具建材",
                typeNumber: '112',
                isSelect: false
            },
            {
                name: "热门推荐",
                typeNumber: '101', isSelect: false
            },
            {
                name: "居家生活",
                typeNumber: '101', isSelect: false
            }
        ];
        this.select = 0;
        this.categoryDetailData = [];
        this.obj_GoodsListData = [
            {
                "productid": 322177,
                "ProductName": "稻香村豆沙粽/肉松蛋黄粽110g×8只礼盒装",
                "PromotionInfo": null,
                "PromotionInfoPrice": "19.9元",
                "Picture": "/gitem/2017/05/08/124551847.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/08/124551847.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:45:40",
                "LastModifyTime": "2017-05-08T12:45:52",
                "ExpiredTime": "2017-05-09T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=17951e324cfc465e840794115c99b8f2&pid=mm_35068870_18286427_65134362&itemId=548328608636&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=17951e324cfc465e840794115c99b8f2&pid=mm_35068870_18286427_65134362&itemId=548328608636&dx=1",
                "QuanInfo": "立即前往",
                "DiscountRate": 0.0,
                "RealPrice": 19.9,
                "SalesVolume": 9967,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170425144223578601.htm"
            },
            {
                "productid": 368903,
                "ProductName": "【瓷肌】补水美白淡斑4款面膜套装*10片",
                "PromotionInfo": "30元券",
                "PromotionInfoPrice": "券后29元",
                "Picture": "/gitem/2017/05/08/124501657.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/08/124501657.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:45:02",
                "LastModifyTime": "2017-05-08T12:45:02",
                "ExpiredTime": "2017-05-11T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=80aa9c7120ec46688e75b2415df6fd8e&pid=mm_35068870_18286427_65134362&itemId=549999559900&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=80aa9c7120ec46688e75b2415df6fd8e&pid=mm_35068870_18286427_65134362&itemId=549999559900&dx=1",
                "QuanInfo": "领30元券",
                "DiscountRate": 0.51,
                "RealPrice": 59.0,
                "SalesVolume": 18,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170506095512186241.htm"
            },
            {
                "productid": 143447,
                "ProductName": "【拍4件】超薄冰爽，芙达儿男士纯色/印花冰丝平角内裤4条装",
                "PromotionInfo": "10元券 + 聚划算+下单4件立减119.7元",
                "PromotionInfoPrice": "券后29.9元  +  聚划算 + 下单4件立减119.7元",
                "Picture": "/gitem/2017/04/22/194917909.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/22/194917909.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:43:36",
                "LastModifyTime": "2017-05-08T12:43:37",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=d49f92d2540047b18a109165e63e3c2e&pid=mm_35068870_18286427_65134362&itemId=545225445890&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=d49f92d2540047b18a109165e63e3c2e&pid=mm_35068870_18286427_65134362&itemId=545225445890&dx=1",
                "QuanInfo": "领10元券",
                "DiscountRate": 0.25,
                "RealPrice": 39.9,
                "SalesVolume": 0,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170302154936657588.htm"
            },
            {
                "productid": 33638,
                "ProductName": "物生物500mL大容量304不锈钢保温闷烧壶",
                "PromotionInfo": "15元券 + 聚划算",
                "PromotionInfoPrice": "券后43元  +  聚划算",
                "Picture": "/2016/12/29/1123876.jpg@s_0,w_240,q_100",
                "picture_square": "/2016/12/29/1123876.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:42:33",
                "LastModifyTime": "2017-05-08T12:42:32",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=cee62d1723b7422ba98a3b472dfb502f&pid=mm_35068870_18286427_65134362&itemId=536714388104&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=cee62d1723b7422ba98a3b472dfb502f&pid=mm_35068870_18286427_65134362&itemId=536714388104&dx=1",
                "QuanInfo": "领15元券",
                "DiscountRate": 0.26,
                "RealPrice": 58.0,
                "SalesVolume": 36072,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/161229113221750246.htm"
            },
            {
                "productid": 367251,
                "ProductName": "拉绳设计不脏手/新料韧足承重佳，靓涤自动收口手提式垃圾袋5卷",
                "PromotionInfo": "5元券",
                "PromotionInfoPrice": "券后12.9元",
                "Picture": "/gitem/2017/05/06/042004498.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/06/042004498.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:39:28",
                "LastModifyTime": "2017-05-08T12:40:45",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=56fe021e55df4008ad816c517c0207fa&pid=mm_35068870_18286427_65134362&itemId=520381139791&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=56fe021e55df4008ad816c517c0207fa&pid=mm_35068870_18286427_65134362&itemId=520381139791&dx=1",
                "QuanInfo": "领5元券",
                "DiscountRate": 0.28,
                "RealPrice": 17.9,
                "SalesVolume": 19893,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170506042005473877.htm"
            },
            {
                "productid": 350136,
                "ProductName": "健康材质/密封防漏，富光大容量塑料水杯",
                "PromotionInfo": "5元券",
                "PromotionInfoPrice": "券后10.8元",
                "Picture": "/gitem/2017/05/01/174758883.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/01/174758883.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:36:28",
                "LastModifyTime": "2017-05-08T12:37:49",
                "ExpiredTime": "2017-05-09T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=446ee5665a1649fda7304dba190d8cd4&pid=mm_35068870_18286427_65134362&itemId=545112881999&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=446ee5665a1649fda7304dba190d8cd4&pid=mm_35068870_18286427_65134362&itemId=545112881999&dx=1",
                "QuanInfo": "领5元券",
                "DiscountRate": 0.32,
                "RealPrice": 15.8,
                "SalesVolume": 7692,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170501174759429923.htm"
            },
            {
                "productid": 231579,
                "ProductName": "轻盈灵动/透气循环，鸿星尔克春夏新款网面透气跑步鞋",
                "PromotionInfo": "50元券",
                "PromotionInfoPrice": "券后109元",
                "Picture": "/gitem/2017/04/07/1801630.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/07/1801630.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:33:50",
                "LastModifyTime": "2017-05-08T12:36:06",
                "ExpiredTime": "2017-05-08T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=79a97c945cef452cbbc55c44aebfb7dc&pid=mm_35068870_18286427_65134362&itemId=536505774041&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=79a97c945cef452cbbc55c44aebfb7dc&pid=mm_35068870_18286427_65134362&itemId=536505774041&dx=1",
                "QuanInfo": "领50元券",
                "DiscountRate": 0.31,
                "RealPrice": 159.0,
                "SalesVolume": 34,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170407180100824378.htm"
            },
            {
                "productid": 354904,
                "ProductName": "闪速电流/整网点击/安全持久，源本生活安全超强电蚊拍",
                "PromotionInfo": "30元券",
                "PromotionInfoPrice": "券后39元",
                "Picture": "/gitem/2017/05/08/123129892.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/08/123129892.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:30:27",
                "LastModifyTime": "2017-05-08T12:31:30",
                "ExpiredTime": "2017-05-08T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=beb511dfa07c441e81dfc2f6deee930d&pid=mm_35068870_18286427_65134362&itemId=547802843267&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=beb511dfa07c441e81dfc2f6deee930d&pid=mm_35068870_18286427_65134362&itemId=547802843267&dx=1",
                "QuanInfo": "领30元券",
                "DiscountRate": 0.43,
                "RealPrice": 69.0,
                "SalesVolume": 522,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170502203618166847.htm"
            },
            {
                "productid": 330438,
                "ProductName": "柔顺亲肤/凉而不冰/透气清爽，迪士尼儿童冰丝凉席三件套",
                "PromotionInfo": "40元券",
                "PromotionInfoPrice": "券后58元",
                "Picture": "/gitem/2017/04/26/210557575.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/26/210557575.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:29:47",
                "LastModifyTime": "2017-05-08T12:30:16",
                "ExpiredTime": "2017-05-08T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=81c7e29b1b3a450a87e2d89e0e52ae18&pid=mm_35068870_18286427_65134362&itemId=546872959623&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=81c7e29b1b3a450a87e2d89e0e52ae18&pid=mm_35068870_18286427_65134362&itemId=546872959623&dx=1",
                "QuanInfo": "领40元券",
                "DiscountRate": 0.41,
                "RealPrice": 98.0,
                "SalesVolume": 1243,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170426210558081950.htm"
            },
            {
                "productid": 375635,
                "ProductName": "弹力舒适/抗皱薄款，金佰顿夏季男士商务抗皱薄款直筒休闲裤",
                "PromotionInfo": "50元券",
                "PromotionInfoPrice": "券后78元",
                "Picture": "/gitem/2017/05/08/093242354.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/08/093242354.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:28:59",
                "LastModifyTime": "2017-05-08T12:29:39",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=dcd4187e48b44123bebe54b92548a73e&pid=mm_35068870_18286427_65134362&itemId=549932842590&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=dcd4187e48b44123bebe54b92548a73e&pid=mm_35068870_18286427_65134362&itemId=549932842590&dx=1",
                "QuanInfo": "领50元券",
                "DiscountRate": 0.39,
                "RealPrice": 128.0,
                "SalesVolume": 3,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170508093242698848.htm"
            },
            {
                "productid": 328181,
                "ProductName": "导热迅速/传热优良，乐妙厨无涂层炒锅",
                "PromotionInfo": "20元券",
                "PromotionInfoPrice": "券后39元",
                "Picture": "/gitem/2017/04/26/144743602.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/26/144743602.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:27:26",
                "LastModifyTime": "2017-05-08T12:28:39",
                "ExpiredTime": "2017-05-12T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=47a44fb353f749e496ddaf0e2a506cf8&pid=mm_35068870_18286427_65134362&itemId=548929439035&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=47a44fb353f749e496ddaf0e2a506cf8&pid=mm_35068870_18286427_65134362&itemId=548929439035&dx=1",
                "QuanInfo": "领20元券",
                "DiscountRate": 0.34,
                "RealPrice": 59.0,
                "SalesVolume": 362,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170426144744185140.htm"
            },
            {
                "productid": 331191,
                "ProductName": "音乐掌中宝/评书播放器，不见不散便携式迷你插卡音箱收音机",
                "PromotionInfo": "30元券",
                "PromotionInfoPrice": "券后69元",
                "Picture": "/gitem/2017/04/26/225342326.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/26/225342326.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:25:29",
                "LastModifyTime": "2017-05-08T12:39:15",
                "ExpiredTime": "2017-05-09T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=0157353c16a7465fa5582c1f077836c6&pid=mm_35068870_18286427_65134362&itemId=36790218475&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=0157353c16a7465fa5582c1f077836c6&pid=mm_35068870_18286427_65134362&itemId=36790218475&dx=1",
                "QuanInfo": "领30元券",
                "DiscountRate": 0.3,
                "RealPrice": 99.0,
                "SalesVolume": 1399,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170426225343159150.htm"
            },
            {
                "productid": 353252,
                "ProductName": "莫代尔面料/柔软舒适/简约百搭，战地吉普时尚休闲男士短袖T恤",
                "PromotionInfo": "30元券",
                "PromotionInfoPrice": "券后39元",
                "Picture": "/gitem/2017/05/02/170122263.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/02/170122263.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:23:48",
                "LastModifyTime": "2017-05-08T12:25:02",
                "ExpiredTime": "2017-05-09T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=a355990d90cf4bf3af9c1de36732aa61&pid=mm_35068870_18286427_65134362&itemId=549646657183&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=a355990d90cf4bf3af9c1de36732aa61&pid=mm_35068870_18286427_65134362&itemId=549646657183&dx=1",
                "QuanInfo": "领30元券",
                "DiscountRate": 0.43,
                "RealPrice": 69.0,
                "SalesVolume": 1866,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170502170122605923.htm"
            },
            {
                "productid": 123596,
                "ProductName": "优质材料/防滑加固/双层设计，收纳博士家用医药箱收纳盒",
                "PromotionInfo": "10元券",
                "PromotionInfoPrice": "券后19.9元",
                "Picture": "/gitem/2017/02/18/1633228.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/02/18/1633228.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:23:24",
                "LastModifyTime": "2017-05-08T12:27:19",
                "ExpiredTime": "2017-05-09T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=884753fcfad14e50a8b777b0e1d22614&pid=mm_35068870_18286427_65134362&itemId=545076981123&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=884753fcfad14e50a8b777b0e1d22614&pid=mm_35068870_18286427_65134362&itemId=545076981123&dx=1",
                "QuanInfo": "领10元券",
                "DiscountRate": 0.33,
                "RealPrice": 29.9,
                "SalesVolume": 96,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170218163326496501.htm"
            },
            {
                "productid": 210439,
                "ProductName": "面料舒适/多色可选/时尚百搭，宇恒世家夏季新款五分短裤",
                "PromotionInfo": "20元券",
                "PromotionInfoPrice": "券后29.9元",
                "Picture": "/gitem/2017/03/30/1927907.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/03/30/1927907.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:17:02",
                "LastModifyTime": "2017-05-08T12:18:35",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=87ec3cb0a6cf4564964e58a1be5746b5&pid=mm_35068870_18286427_65134362&itemId=545206359114&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=87ec3cb0a6cf4564964e58a1be5746b5&pid=mm_35068870_18286427_65134362&itemId=545206359114&dx=1",
                "QuanInfo": "领20元券",
                "DiscountRate": 0.4,
                "RealPrice": 49.9,
                "SalesVolume": 309,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170330192706386774.htm"
            },
            {
                "productid": 376053,
                "ProductName": "放肆开吃，【洽美滋】烤手工馍丁馍片/麻辣原味多种口味整箱750g",
                "PromotionInfo": "5元券 + 下单立减2元",
                "PromotionInfoPrice": "券后15.8元  +  下单立减2元",
                "Picture": "/gitem/2017/05/08/121443023.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/08/121443023.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:14:42",
                "LastModifyTime": "2017-05-08T12:14:43",
                "ExpiredTime": "2017-05-11T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=491f1fe0f5d34ace9693a39f91e6b939&pid=mm_35068870_18286427_65134362&itemId=549754207191&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=491f1fe0f5d34ace9693a39f91e6b939&pid=mm_35068870_18286427_65134362&itemId=549754207191&dx=1",
                "QuanInfo": "领5元券",
                "DiscountRate": 0.24,
                "RealPrice": 20.8,
                "SalesVolume": 0,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170508103433223218.htm"
            },
            {
                "productid": 174202,
                "ProductName": "​优质纯棉/免烫耐洗/纯色薄款，谦语谦诺纯色青年修身衬衫",
                "PromotionInfo": "30元券",
                "PromotionInfoPrice": "券后55元",
                "Picture": "/gitem/2017/03/16/0623473.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/03/16/0623473.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:10:09",
                "LastModifyTime": "2017-05-08T12:11:26",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=ed88665303e246d8a7fc08cf683e0e65&pid=mm_35068870_18286427_65134362&itemId=522218330175&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=ed88665303e246d8a7fc08cf683e0e65&pid=mm_35068870_18286427_65134362&itemId=522218330175&dx=1",
                "QuanInfo": "领30元券",
                "DiscountRate": 0.35,
                "RealPrice": 85.0,
                "SalesVolume": 126,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170316062343680211.htm"
            },
            {
                "productid": 317311,
                "ProductName": "时尚百搭/精简设计/潮流短裤，肯蒂夏季百搭潮流运动七分裤",
                "PromotionInfo": "20元券",
                "PromotionInfoPrice": "券后38元",
                "Picture": "/gitem/2017/04/24/202142660.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/04/24/202142660.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:08:58",
                "LastModifyTime": "2017-05-08T12:09:56",
                "ExpiredTime": "2017-05-11T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=ad63136c040e45139085d35e637cffd7&pid=mm_35068870_18286427_65134362&itemId=548220764958&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=ad63136c040e45139085d35e637cffd7&pid=mm_35068870_18286427_65134362&itemId=548220764958&dx=1",
                "QuanInfo": "领20元券",
                "DiscountRate": 0.34,
                "RealPrice": 58.0,
                "SalesVolume": 225,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170424202142886139.htm"
            },
            {
                "productid": 367567,
                "ProductName": "轻盈透气/吸汗亲肤，kool休闲字母圆领男士短袖T恤",
                "PromotionInfo": "20元券",
                "PromotionInfoPrice": "券后39元",
                "Picture": "/gitem/2017/05/06/051036318.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/06/051036318.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:05:03",
                "LastModifyTime": "2017-05-08T12:05:50",
                "ExpiredTime": "2017-05-11T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=5c619e8ff0ae47de9b23b964055c0084&pid=mm_35068870_18286427_65134362&itemId=10435663805&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=5c619e8ff0ae47de9b23b964055c0084&pid=mm_35068870_18286427_65134362&itemId=10435663805&dx=1",
                "QuanInfo": "领20元券",
                "DiscountRate": 0.34,
                "RealPrice": 59.0,
                "SalesVolume": 10,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170506051036740593.htm"
            },
            {
                "productid": 354617,
                "ProductName": "优质面料/11色可选，酷堡罗男士夏天五分裤",
                "PromotionInfo": "10元券",
                "PromotionInfoPrice": "券后29元",
                "Picture": "/gitem/2017/05/02/195932401.jpg@s_0,w_240,q_100",
                "picture_square": "/gitem/2017/05/02/195932401.jpg@s_0,w_180,h_180",
                "OriginStoreName": "天猫",
                "OriginStoreColor": "#dd2727",
                "CreateTime": "2017-05-08T12:03:54",
                "LastModifyTime": "2017-05-08T12:04:50",
                "ExpiredTime": "2017-05-10T23:59:59",
                "QuanUrl": "https://uland.taobao.com/coupon/edetail?activityId=c272b7b82c15459089db40b623299f76&pid=mm_35068870_18286427_65134362&itemId=549588638033&dx=1",
                "MixCouponUrl": "https://uland.taobao.com/coupon/edetail?activityId=c272b7b82c15459089db40b623299f76&pid=mm_35068870_18286427_65134362&itemId=549588638033&dx=1",
                "QuanInfo": "领10元券",
                "DiscountRate": 0.26,
                "RealPrice": 39.0,
                "SalesVolume": 551,
                "IsGoUland": true,
                "HalfUlandUrl": "",
                "From": null,
                "ItemPath": "/item/170502195933217262.htm"
            }
        ];
    }
    TabListPage.prototype.ionViewDidLoad = function () {
        this.getCategoryDetailData(102);
    };
    TabListPage.prototype.goToOption = function () {
        this.app.getRootNav().push('Entry', {
            aa: 666
        });
    };
    TabListPage.prototype.goBack = function () {
    };
    TabListPage.prototype.startPage = function (i) {
    };
    TabListPage.prototype.categoryLeftClick = function (index) {
        console.log("index" + index);
        this.categoryData[this.select].isSelect = false;
        var data = this.categoryData[index];
        data.isSelect = true;
        this.select = index;
    };
    TabListPage.prototype.getCategoryDetailData = function (typeNumber) {
        if (typeNumber == 102) {
            this.categoryDetailData = [
                {
                    name: "毛呢大衣",
                    src: "assets/imgs/nz1.jpg",
                    typeNumber: '10001'
                },
                {
                    name: "羽绒服",
                    src: "assets/imgs/nz2.jpg",
                    typeNumber: '10002'
                },
                {
                    name: "针织衫",
                    src: "assets/imgs/nz3.jpg",
                    typeNumber: '10003'
                },
                {
                    name: "连衣裙",
                    src: "assets/imgs/nz4.jpg",
                    typeNumber: '10004'
                },
                {
                    name: "棉服",
                    src: "assets/imgs/nz5.jpg",
                    typeNumber: '10005'
                },
                {
                    name: "长袖T恤",
                    src: "assets/imgs/nz6.jpg",
                    typeNumber: '10006'
                },
                {
                    name: "羊绒衫",
                    src: "assets/imgs/nz7.jpg",
                    typeNumber: '10007'
                },
                {
                    name: "衬衫",
                    src: "assets/imgs/nz8.jpg",
                    typeNumber: '10008'
                },
                {
                    name: "风衣",
                    src: "assets/imgs/nz9.jpg",
                    typeNumber: '10009'
                },
                {
                    name: "皮衣",
                    src: "assets/imgs/nz10.jpg",
                    typeNumber: '10010'
                },
                {
                    name: "休闲裤",
                    src: "assets/imgs/nz11.jpg",
                    typeNumber: '10011'
                },
                {
                    name: "牛仔裤",
                    src: "assets/imgs/nz12.jpg",
                    typeNumber: '10012'
                }
            ];
        }
        else {
            this.categoryDetailData = [
                {
                    name: "夹克",
                    src: "assets/imgs/nanz1.jpg",
                    typeNumber: '10013'
                },
                {
                    name: "衬衫",
                    src: "assets/imgs/nanz2.jpg",
                    typeNumber: '10014'
                },
                {
                    name: "牛仔裤",
                    src: "assets/imgs/nanz3.jpg",
                    typeNumber: '10015'
                },
                {
                    name: "羽绒服",
                    src: "assets/imgs/nanz4.jpg",
                    typeNumber: '10016'
                },
                {
                    name: "T恤",
                    src: "assets/imgs/nanz5.jpg",
                    typeNumber: '10017'
                },
                {
                    name: "休闲裤",
                    src: "assets/imgs/nanz6.jpg",
                    typeNumber: '10018'
                },
                {
                    name: "卫衣",
                    src: "assets/imgs/nanz7.jpg",
                    typeNumber: '10019'
                },
                {
                    name: "针织衫",
                    src: "assets/imgs/nanz8.jpg",
                    typeNumber: '10020'
                },
                {
                    name: "棉服",
                    src: "assets/imgs/nanz9.jpg",
                    typeNumber: '10021'
                }
            ];
        }
    };
    TabListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-list',template:/*ion-inline-start:"E:\web\hybridApp-workspace\master\src\pages\tab-list\tab-list.html"*/'<ion-content id="category"  cache-view="false">\n  <header id="header">\n    <div class="header-left">\n      <span></span>\n    </div>\n\n    <!--<a class="header-center" ng-href="#/search">-->\n    <a class="header-center" href="#">\n      <span></span>\n    </a>\n    <div class="header-right">\n      <span></span>\n    </div>\n  </header>\n  <nav id="nav">\n    <ul>\n      <li *ngFor="let item of categoryData, let i = index" (click)="categoryLeftClick(i);getCategoryDetailData(item.typeNumber);">\n        <span [ngClass]="{true:\'nav-current\',false:\'nav-blur\'}[item.isSelect]" style="font-size: 11px">{{item.name}}</span>\n      </li>\n    </ul>\n  </nav>\n  <div id="pro">\n    <div class="pro-scroll">\n      <div class="pro-warp">\n        <div class="banner">\n          <img src="assets/imgs/banner_1.jpg" alt=""/>\n        </div>\n        <div class="content">\n          <div class="content-title">\n            <span>热卖品类</span>\n          </div>\n          <div class="content-body">\n            <!--<li class="content-body-list" *ngFor="item in categoryDetailData" ui-sref="goodsList({typeNumber:1})">-->\n            <li class="content-body-list" *ngFor="let item of categoryDetailData, let i = index" (click)="startPage(i)" >\n              <!--<img [defaultImage]="assets/imgs/common/common_default"  [lazyLoad]="item.src" />-->\n              <img src="{{item.src}}" />\n              <span>{{item.name}}</span>\n            </li>\n          </div>\n          <div class="content-title">\n            <span>冬季新品</span>\n          </div>\n          <div class="content-body">\n            <li class="content-body-list" *ngFor="let item of obj_GoodsListData, let i = index">\n              <!--<img [defaultImage]="assets/imgs/common/common_default"  [lazyLoad]="item.src" />-->\n              <img src="{{\'http://img.lapin365.com/productpictures\'+item.Picture}}" />\n              <span>{{item.ProductName}}</span>\n            </li>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\web\hybridApp-workspace\master\src\pages\tab-list\tab-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabListPage);
    return TabListPage;
}());

//# sourceMappingURL=tab-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map