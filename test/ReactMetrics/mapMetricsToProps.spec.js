import {
    defaultMapMetricsToProps,
    whenMapMetricsToPropsIsAFunction,
    whenMapMetricsToPropsIsMissing
} from "../../src/react/mapMetricsToProps";

define("mapMetricsToProps", () => {
    define("defaultMapMetricsToProps", () => {
        it("should return argument", () => {
            const metrics = {track: () => {}, view: () => {}};
            const mapMetricsToProps = defaultMapMetricsToProps(metrics);
            expect(mapMetricsToProps).to.be.deep.eq({...metrics});
        });
    });
    define("whenMapMetricsToPropsIsMissing", () => {
        it("should return default when mapMetricsToProps is missing", () => {
            const mapMetricsToProps = whenMapMetricsToPropsIsMissing();
            expect(mapMetricsToProps).to.be.eq(defaultMapMetricsToProps);
        });
        it("should return undefined when mapMetricsToProps is not missing", () => {
            const mapMetricsToProps = whenMapMetricsToPropsIsMissing(() => {});
            expect(mapMetricsToProps).to.be.undefined;
        });
    });
    define("whenMapMetricsToPropsIsAFunction", () => {
        it("should return function when mapMetricsToProps is a function", () => {
            const mapMetricsToProps = whenMapMetricsToPropsIsAFunction(
                () => {}
            );
            expect(typeof mapMetricsToProps).to.be.eq("function");
        });
        it("should return function that takes one parameter", () => {
            const mapMetricsToProps = whenMapMetricsToPropsIsAFunction(
                () => {}
            );
            expect(mapMetricsToProps.length).to.be.eq(1);
        });
        it("should call function with metrics", done => {
            const metrics = {};
            const mapMetricsToProps = whenMapMetricsToPropsIsAFunction(
                metrics => {
                    expect(metrics).to.be.eq(metrics);
                    done();
                }
            )(metrics);
        });
    });
});
