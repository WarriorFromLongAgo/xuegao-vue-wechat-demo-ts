import {createStore} from 'vuex'
import SYSTEM from "@/store/modules/system";
import GROUP from "@/store/modules/group";
import USER from "@/store/modules/user";
import CHAT from "@/store/modules/chat";

export default createStore({
    // 开启严格模式，仅需在创建 store 的时候传入 strict: true：
    strict: true,
    modules: {
        USER, GROUP, SYSTEM, CHAT
    }
})
