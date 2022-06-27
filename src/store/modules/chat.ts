import { base64toFile } from "@/common/base64";
import { getMinute, getTimestamp, getDate } from "@/common/time";


const nowTimestamp = getTimestamp()
const nowDate = getTimestamp()

const CHAT = {
    state: {
        // 对话好友列表
        chatList: [{
            id: 1,
            type: 1,
            index: 1,
            chatId: '99',
            info: {
                username: '99',
                avatar: 'static/images/vue.jpg', //头像
                nickname: "机器人", //昵称
                remark: "偷懒的机器人", //备注
                notDisturb: true // 免打扰
            },
            newMsgNum: 1, //新消息条数
            isShow: true,
            lastMsgTime: nowDate,
            messages: [{
                username: "99",
                type: 1,
                content: '我会跟你聊聊天的哟',
                date: nowTimestamp,
                showTime: true
            }]
        },
        {
            id: 2,
            type: 1,
            index: 2,
            chatId: '1486842355',
            info: {
                username: "1486842355",
                avatar: 'https://img2020.cnblogs.com/blog/1556860/202109/1556860-20210923160332031-1473597366.jpg',
                nickname: "面白い男",
                remark: "老胡",
                notDisturb: false
            },
            newMsgNum: 0,
            isShow: true,
            lastMsgTime: new Date(1637131427000),
            messages: [{
                self: false,
                type: 1,
                content: '我已经通过你的好友请求，现在可以开始聊天了',
                date: new Date(1636955087000),
                showTime: true
            }, {
                self: true,
                type: 1,
                content: 'hello 我叫麻花藤',
                date: new Date(1636955087000),
                showTime: false
            }, {
                self: false,
                type: 1,
                content: '你好，我是老胡',
                date: new Date(1636955087000),
                showTime: false
            }, {
                self: false,
                type: 1,
                content: '我嚓！你这个做的可以哦',
                date: new Date(1637214287000),
                showTime: true
            }, {
                self: false,
                type: 1,
                content: '6666',
                date: new Date(1637131427000),
                showTime: false
            },
            {
                self: true,
                type: 1,
                content: '哈哈哈哈，还行吧@::tt;;@1cb4c147d8565bf1c1c59773c99f3fb7@',
                date: new Date(1637131427000),
                showTime: false
            },
            ]
        },
        {
            id: 3,
            type: 1,
            index: 3,
            chatId: '1398952749',
            info: {
                username: "1398952749",
                avatar: 'https://img2020.cnblogs.com/blog/1556860/202109/1556860-20210923160406881-373503134.jpg',
                nickname: "我不听",
                remark: "马老C",
                notDisturb: false
            },
            newMsgNum: 3,
            isShow: true,
            lastMsgTime: new Date(),
            messages: [{
                self: false,
                type: 1,
                content: '我已经通过你的好友请求，现在可以开始聊天了',
                date: new Date(1637131427000),
                showTime: true
            }, {
                self: false,
                type: 1,
                content: '老哥，赶紧上号',
                date: new Date(1637131487000),
                showTime: false
            }, {
                self: false,
                type: 2,
                content: {
                    width: 1922,
                    height: 1032,
                    src: 'https://img2020.cnblogs.com/blog/1556860/202111/1556860-20211118151107858-1710905478.png'
                },
                date: new Date(1637131487000),
                showTime: false
            }]
        },
        {
            id: 4,
            type: 2,
            index: 4,
            chatId: 'A_t431FMe74187',
            info: {
                groupNo: "A_t431FMe74187",
                avatar: 'https://img2022.cnblogs.com/blog/1556860/202202/1556860-20220221135450877-25718536.jpg',
                nickname: "五道口职业技术学院校友会",
                remark: "校友会的叼毛们",
                notDisturb: false
            },
            newMsgNum: 0,
            isShow: true,
            lastMsgTime: new Date(),
            messages: [{
                username: "1677900582",
                type: 1,
                content: '上号上号',
                date: new Date(1637131427000),
                showTime: true
            }, {
                username: "1486842355",
                type: 1,
                content: '老哥，赶紧上号',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1398952749",
                type: 1,
                content: '给兄弟们发点好康的@::tt;;@17c07d6a3cd57c6654c75728987b93dc@',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1486842355",
                type: 1,
                content: '我草 牛逼',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1486842355",
                type: 1,
                content: '别墨迹，赶紧的',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1486842355",
                type: 1,
                content: '快点快点',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1486842355",
                type: 1,
                content: '老哥，赶紧上号',
                date: new Date(1637131487000),
                showTime: false
            }, {
                username: "1486842355",
                type: 1,
                content: '老哥，赶紧上号',
                date: new Date(1637131487000),
                showTime: false
            },]
        }
        ],
        // 得知当前选择的是哪个对话
        selectChatId: '99'
    },
    getters: {},
    mutations: {
        // 从localStorage 中获取数据
        initData() {
            const data = localStorage.getItem('vue-chat');
            if (data) {
                CHAT.state.chatList = JSON.parse(data);
            }
        },
    },
    actions: {}
}
export default CHAT
