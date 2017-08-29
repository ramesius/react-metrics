import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import withMetrics from "../../src/react/withMetrics";
import {metrics as metricsType} from "../../src/react/PropTypes";

const mockMetrics = {
    track: () => {},
    pageView: () => {}
};
class MockMetricsContainer extends React.Component {
    getChildContext() {
        return {
            metrics: mockMetrics
        };
    }
    render() {
        return this.props.children;
    }
}

MockMetricsContainer.childContextTypes = {
    metrics: metricsType.isRequired
};

describe.only("withMetrics", () => {
    it("should be named after wrapped component", () => {
        class Button extends React.Component {}
        const TrackButton = withMetrics()(Button);
        expect(TrackButton.displayName).to.be.eq("WithMetrics(Button)");
    });
    it("should be named after wrapped component with display name", () => {
        class Button extends React.Component {}
        Button.displayName = "TotallyAButton";
        const TrackButton = withMetrics()(Button);
        expect(TrackButton.displayName).to.be.eq("WithMetrics(TotallyAButton)");
    });
    it("should return function", () => {
        expect(typeof withMetrics()).to.be.eq("function");
    });
    it("should map all metrics functions to props by default", () => {
        class Button extends React.Component {
            render() {
                return <div />;
            }
        }

        Button.contextTypes = {metrics: metricsType};

        const TrackedButton = withMetrics()(Button);

        const tree = ReactTestUtils.renderIntoDocument(
            <MockMetricsContainer>
                <TrackedButton />
            </MockMetricsContainer>
        );

        const node = ReactTestUtils.findRenderedComponentWithType(tree, Button);

        expect(typeof node.props.track).to.be.eq("function");
        expect(typeof node.props.pageView).to.be.eq("function");
    });

    it("should map named metrics functions to props", () => {
        class Button extends React.Component {
            render() {
                return <div />;
            }
        }

        Button.contextTypes = {metrics: metricsType};

        const TrackedButton = withMetrics(metrics => {
            return {
                trackThis: metrics.track
            };
        })(Button);

        const tree = ReactTestUtils.renderIntoDocument(
            <MockMetricsContainer>
                <TrackedButton />
            </MockMetricsContainer>
        );

        const node = ReactTestUtils.findRenderedComponentWithType(tree, Button);

        expect(typeof node.props.trackThis).to.be.eq("function");
        expect(node.props.pageView).to.be.undefined;
    });

    it("should pass props to wrapped component", () => {
        class Button extends React.Component {
            render() {
                return <div />;
            }
        }

        Button.contextTypes = {metrics: metricsType};

        const TrackedButton = withMetrics(metrics => {
            return {
                trackThis: metrics.track
            };
        })(Button);

        const tree = ReactTestUtils.renderIntoDocument(
            <MockMetricsContainer>
                <TrackedButton name="checkout" />
            </MockMetricsContainer>
        );

        const node = ReactTestUtils.findRenderedComponentWithType(tree, Button);

        expect(node.props.name).to.be.eq("checkout");
    });

    it("should throw exception when mapMetricsToProps type is not supported", () => {
        class Button extends React.Component {
            render() {
                return <div />;
            }
        }

        Button.contextTypes = {metrics: metricsType};

        const TrackedButton = withMetrics({})(Button);

        expect(() =>
            ReactTestUtils.renderIntoDocument(
                <MockMetricsContainer>
                    <TrackedButton />
                </MockMetricsContainer>
            )
        ).to.throw(
            "Invalid value of type object for mapMetricsToProps argument when connecting component Button."
        );
    });
});
