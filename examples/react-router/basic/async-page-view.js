import React from "react";
import {exposeMetrics} from "react-metrics"; // eslint-disable-line import/no-unresolved

@exposeMetrics 
class AsyncPageView extends React.Component {

    static willTrackPageView(routeState) {
        return AsyncPageView._promise.then(result => {
            return Object.assign(result, routeState.query);
        });
    }

    static _promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                asyncMetrics: "asyncValue"
            });
        }, 5 * 1000);
    });

    render() {
        return <h1>Async Page View Example</h1>;
    }
}

export default AsyncPageView;
