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

export default [
    whenMapMetricsToPropsIsMissing,
    whenMapMetricsToPropsIsAFunction
];
