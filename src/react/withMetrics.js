import React, {Component} from "react";
import {metrics as metricsType} from "./PropTypes";
import hoistStatics from "hoist-non-react-statics";
import mapMetricsToPropsFactories from "./mapMetricsToProps";

function match(arg, factories, name, wrappedComponentName) {
    for (let i = factories.length - 1; i >= 0; i--) {
        const result = factories[i](arg);
        if (result) return result;
    }

    return () => {
        throw new Error(
            `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${wrappedComponentName}.`
        );
    };
}

/**
 * Returns a function in which you can pass a component to provide metrics tracking functions.
 * @param {function|object} mapMetricsToProps 
 * @returns {function}
 */
export default function withMetrics(mapMetricsToProps) {
    return WrappedComponent => {
        const wrappedComponentName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            "Component";

        const _mapMetricsToProps = match(
            mapMetricsToProps,
            mapMetricsToPropsFactories,
            "mapMetricsToProps",
            wrappedComponentName
        );

        class WithMetrics extends Component {
            static contextTypes = {
                metrics: metricsType
            };

            static displayName = `WithMetrics(${wrappedComponentName})`;

            render() {
                return (
                    <WrappedComponent
                        {..._mapMetricsToProps(this.context.metrics)}
                        {...this.props}
                    />
                );
            }
        }

        return hoistStatics(WithMetrics, WrappedComponent);
    };
}
