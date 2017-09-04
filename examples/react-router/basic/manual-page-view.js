import React from "react";
import {exposeMetrics, withMetrics} from "react-metrics";
import PropTypes from "prop-types";

@exposeMetrics
@withMetrics()
class ManualPageView extends React.Component {
    static contextTypes = {
        metrics: PropTypes.metrics
    };

    static propTypes = {
        appName: PropTypes.string
    };

    static willTrackPageView() {
        return false;
    }

    componentDidMount() {
        const {appName, pageView} = this.props;
        pageView({appName});
    }

    render() {
        return <h1>Manual Page View Example</h1>;
    }
}

export default ManualPageView;
