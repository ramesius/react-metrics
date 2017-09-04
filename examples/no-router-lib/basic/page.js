import React from "react";
import PropTypes from "prop-types";
import {withMetrics} from "react-metrics";

class Page extends React.Component {
    constructor(...args) {
        super(...args);

        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        params: PropTypes.object
    };

    onClick() {
        const {params, user, track} = this.props;
        user({
            username: "exampleuser"
        });
        track(
            "trackClick",
            {page: params.id},
            true /* this will merge page default metrics */
        );
    }

    render() {
        const {params} = this.props;
        return (
            <div>
                <h1>Page {params.id}</h1>
                <button onClick={this.onClick}>Manual Track</button>
                <button
                    data-metrics-event-name="trackClick"
                    data-metrics-merge-pagedefaults="true"
                    data-metrics-page={params.id}
                >
                    Declarative Track
                </button>
            </div>
        );
    }
}

export default withMetrics(metrics => ({
    user: metrics.user,
    track: metrics.track
}))(Page);
