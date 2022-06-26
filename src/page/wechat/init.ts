import {useStore} from "vuex";

const store = useStore()

export function initInfo() {
    initFriendList();
    initGroupChatList();
}

export function initSystemInfo() {
    initSystemIcon();
}

function initSystemIcon() {
    if (store.state.SYSTEM.systemIcon != null) {
        return;
    }
}

function initGroupChatList() {
    for (const group of store.state.GROUP.groupChatList) {
        let user = store.getters["user/getUser"];
        user.groupNickname = user.nickname;
        let value = {
            groupNo: group.groupNo,
            user: user
        }
        store.commit("groupchat/groupAddUser", value);
    }
    // listGroupChat()
    //     .then((res) => {
    //         if (res.code == 0) {
    //             store.commit("groupchat/addGroupChatList", res.data);
    //         }
    //     })
}
