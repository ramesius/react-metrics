export const defaultMapMetricsToProps = metrics => ({
    ...metrics
});

export function whenMapMetricsToPropsIsMissing(mapMetricsToProps) {
    return typeof mapMetricsToProps === "undefined"
        ? defaultMapMetricsToProps
        : undefined;
}

export function whenMapMetricsToPropsIsAFunction(mapMetricsToProps) {
    return typeof mapMetricsToProps === "function"
        ? metrics => mapMetricsToProps(metrics)
        : undefined;
}

export function whenMapMetricsToPropsIsAnObject(mapMetricsToProps) {
    if (typeof mapMetricsToProps === "object") {
        // Each property on the object is assumed to be in the form of metrics => ...args => ...
        return metrics => {
            return Object.keys(mapMetricsToProps).reduce((prev, key) => {
                const func = mapMetricsToProps[key](metrics);
                prev[key] = func;
                return prev;
            }, {});
        };
    }

    return undefined;
}

export default [
    whenMapMetricsToPropsIsMissing,
    whenMapMetricsToPropsIsAnObject,
    whenMapMetricsToPropsIsAFunction
];
