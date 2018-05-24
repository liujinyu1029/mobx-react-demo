import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

//Mobx 的另一个写法  简单粗暴，并不优雅，也不严谨的

var appState = observable({
    timer: 0
});
appState.timer = 10

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);

var TimerView = observer(React.createClass({
     render: function() {
        return (<button onClick={this.onReset}>
            Seconds passed: {this.props.appState.timer}
            </button>);
     },

     onReset: function() {
        this.props.appState.resetTimer();
     }
}));

render(<TimerView appState={appState} />, document.getElementById('root'));

