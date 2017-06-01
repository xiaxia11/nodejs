var router = express.Router();
var Umeng = require('umengpush-node');
var android = new Umeng();
var ios = new Umeng();

//android 初始化
android.initialize({
    platform: 'android',
    appKey: '888888888888888',
    appMasterSecret: 'mhibubgpfuuzxgyyy',
    production_mode: 'true'
});

//ios 初始化
ios.initialize({
    platform: 'ios',
    appKey: '888888888888888',
    appMasterSecret: 'mhibubgpfuuzxgyyy',
    production_mode: 'true'
});

//配置项必填参数
var info = {
    timestamp: Date.now(),
    payload: {
        //默认选择通知类型为Notification,需必填以下信息
        body: {
            "ticker": '第一次测试',//通知栏的显示的文字
            "title": '测试',
            "text": '测试测试'
           //自行添加参数，默认after_open为go_app即打开APP
    }
}
};
//调用响应方法
android.broadcast(info, function (err, result) {
    console.log(result)

});
ios.broadcast(info, function (err, result) {
    console.log(result)

});

module.exports = router;