import {getToken, removeToken, setToken} from "@/common/token";
import {UserInfo} from "@/model/UserInfo";

const avatar = "https://ts1.cn.mm.bing.net/th/id/R-C.f9e3287748e021253c470bb1d086c067?rik=monsD6pS%2bLvCsg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201908%2f30%2f1567152427607909.jpg&ehk=PpQMFFhXfzkiv6AVNq44ozcLL3AMTavASG8zln7NFZI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"

const USER = {
    state: {
        token: getToken(),
        // 当前登录用户
        info: {
            signature: "",
            sex: 1,
            wxid: "",
            area: "广州",
            nickname: '房东的Tom',
            avatar: avatar,
            username: "",
        },
    },
    getters: {
        getUser() {
            return USER.state.info;
        }
    },
    mutations: {
        saveToken(input: { token: string }) {
            if (input.token == null) {
                removeToken();
            } else {
                USER.state.token = input.token
                setToken(input.token)
            }
        },
        setUserInfo(info: UserInfo) {
            USER.state.info = info;
        }
    },
    actions: {}
}
export default USER

