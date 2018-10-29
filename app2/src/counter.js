import React from "react";
import {connect} from "react-redux";
import {decrementCount, incrementCount} from "./actions/actions";

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    increment = () => {
        const count = this.props.count;

        this.props.incrementCount(count);
        console.log(this.props.count);
    };

    decrement = () => {
        const count = this.props.count;

        this.props.decrementCount(count);
    };

    globalIncrement = () => {
        const count = this.props.count;

        this.props.globalEventDistributor.increment(count);
    };

    globalDecrement = () => {
        const count = this.props.count;

        this.props.globalEventDistributor.decrement(count);
    };

    render() {
        return (
            <div>
                <br/>
                <div>
                    <b> Count: {this.props.count}</b>
                    <br/>
                    <br/>
                    <button onClick={this.increment}>local increment</button>
                    &nbsp;Send a <b>local</b> increment event. This will only increase the
                    counter for the current app. <br/>
                    <button onClick={this.decrement}>local decrement</button>
                    &nbsp;Send a <b>local</b> decrement event. This will only decrement
                    the counter for the current app. <br/>
                    <button onClick={this.globalIncrement}>global increment</button>
                    &nbsp;Send a <b>global</b> increment event. This will increase the
                    counter for the current app and all other apps that listen to this
                    event. <br/>
                    <button onClick={this.globalDecrement}>global decrement</button>
                    &nbsp;Send a <b>global</b> decrement event. This will increase the
                    counter for the current app and all other apps that listen to this
                    event. <br/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps, {incrementCount, decrementCount})(Counter);
