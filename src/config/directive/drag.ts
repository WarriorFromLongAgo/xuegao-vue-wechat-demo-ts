import {useStore} from "vuex";

const store = useStore()

export default {
    drag(el: HTMLElement) {
        // 获取当前元素
        const copyEl = el;
        const moveEl = {
            appOffsetLeft: 0,
            appOffsetTop: 0,
            x: 0,
            y: 0
        }
        copyEl.onmousedown = (event) => {
            const app: HTMLElement | null = document.getElementById("wechat");
            if (app === null) {
                return
            }
            moveEl.x = event.pageX;
            moveEl.y = event.pageY;
            moveEl.appOffsetLeft = app.offsetLeft;
            moveEl.appOffsetTop = app.offsetTop;
            document.onmousemove = (event: MouseEvent) => {
                const moveLeft = event.pageX - moveEl.x;
                const moveTop = event.pageY - moveEl.y;
                const resultLeft = moveEl.appOffsetLeft + moveLeft;
                const resultTop = moveEl.appOffsetTop + moveTop;
                if (resultLeft >= 5 && resultLeft <= store.state.SYSTEM.windowWidth - app.offsetWidth - 5) {
                    app.style.left = resultLeft + "px";
                }
                if (resultTop >= 5 && resultTop <= store.state.SYSTEM.windowHeight - app.offsetHeight - 5) {
                    app.style.top = resultTop + "px";
                }
            };
            document.onmouseup = (event: MouseEvent) => {
                document.onmousemove = null;
                document.onmouseup = null;
                moveEl.x = 0;
                moveEl.y = 0;
                moveEl.appOffsetLeft = 0;
                moveEl.appOffsetTop = 0;
            };
        }
    },
}

