import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

//Mobx 三板斧，observable、observer、action。
//【第一斧】：使用observable  定义一个可被观察的状态【初始化数据】
var appState = observable({
    timer: 0
});
//状态值可以直接修改 
appState.timer  = 10;

//【第二斧】：通过action 定义操控状态的事件 ps:可以不加action 建议加上。
//官方解释是：
// “只有在严格模式(默认是不启用)下使用MobX时才需要 action 包装。建议使用action，因为它将帮助你更好地组织应用，
//并表达出一个函数修改状态的意图。同时,它还自动应用事务以获得最佳性能。”
appState.resetTimer = action( val => {
    appState.timer = val;
});

setInterval(action(() =>{
    appState.timer += 1;
}), 1000);

//【第三斧】observer 组件的 MobX 化
@observer
class TimerView extends React.Component {
    render() {
        return (<button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }

    onReset () {
        this.props.appState.resetTimer(50);
    }
};
render(<TimerView appState={appState} />, document.getElementById('root'));

