<a name="3.0.0"></a>
## [3.0.0](https://github.com/nfl/react-metrics/compare/v2.3.1...v3.0.0) (2017-09)

### Features

* Added a `withMetrics` higher order component to abstract the usage of react context.

### Breaking change

* Usage of metrics proptypes in context types is discouraged (see below). As a result, it is no longer exported as part of the public API of react-metrics.

### Notice

* As of this release, the usage of react context directly i.e `this.context.metrics.track()` has been depcrecated and hence has been removed from the documentation. Please prefer to use the `withMetrics` function provided in this release that abtracts the usage of context.

<a name="2.3.2"></a>
## [2.3.2](https://github.com/nfl/react-metrics/compare/v2.3.1...v2.3.2) (2017-06-27)


### Bug Fixes

* Fix for IE console log error with SVG parentNode (#46) ([51ff8a5](https://github.com/nfl/react-metrics/commit/51ff8a55bfa9c6dcdda9ab229d0ecf495961ef7c))


<a name="2.3.1"></a>
## [2.3.1](https://github.com/nfl/react-metrics/compare/v2.3.0...v2.3.1) (2017-05-22)


### Bug Fixes

* Fix warning when using PropTypes via main package (fix #39) (#43) ([03a4c4](https://github.com/nfl/react-metrics/commit/03a4c4d1b8025f635b35aaddea354982cf877805))
* Support ie10 quirks mode (#41) ([56ba30](https://github.com/nfl/react-metrics/commit/56ba305c4304ba3d8efbf8c8c0a99932d61734fd))


<a name="2.3.0"></a>
# [2.3.0](https://github.com/nfl/react-metrics/compare/v2.2.3...v2.3.0) (2017-02-23)


### Features

* support aggregating metrics data within 'MetricsElement' ([dc976a3](https://github.com/nfl/react-metrics/commit/dc976a3))



<a name="2.2.3"></a>
## [2.2.3](https://github.com/nfl/react-metrics/compare/v2.2.2...v2.2.3) (2016-10-31)


### Bug Fixes

* Don't throw invariant error for missing pageView api when `enabled` is set to `false` in the co ([e820662](https://github.com/nfl/react-metrics/commit/e820662))



<a name="2.2.2"></a>
## [2.2.2](https://github.com/nfl/react-metrics/compare/v2.2.1...v2.2.2) (2016-10-22)

* Republish as 2.2.2

<a name="2.2.1"></a>
## [2.2.1](https://github.com/nfl/react-metrics/compare/v2.1.1...v2.2.1) (2016-10-18)


### Features

* Allow merging pageDefaults data into declarative tracking data ([fd1c8bb](https://github.com/nfl/react-metrics/commit/fd1c8bb))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/nfl/react-metrics/compare/v2.1.0...v2.1.1) (2016-09-20)


### Performance Improvements

* Prevent possible memory leaks on the server ([777a551](https://github.com/nfl/react-metrics/commit/777a551))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/nfl/react-metrics/compare/v2.0.0...v2.1.0) (2016-08-09)


### Features

* **MetricsElement:** add MetricsElement component ([b7c108e](https://github.com/nfl/react-metrics/commit/b7c108e))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/nfl/react-metrics/compare/v1.2.1...v2.0.0) (2016-05-16)


### Code Refactoring

* **build:** remove polyfill and add umd build([cabf6c3](https://github.com/nfl/react-metrics/commit/cabf6c3))


### BREAKING CHANGES

* build: remove polyfill and depend on the parent project to include the polyfill



<a name="1.2.1"></a>
# [1.2.1](https://github.com/nfl/react-metrics/compare/1.1.1...v1.2.1) (2016-04-15)


### Features

* **dependency:** Bump react to v15 ([d6ca28d](https://github.com/nfl/react-metrics/commit/d6ca28d))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/nfl/react-metrics/compare/1.1.0...v1.1.1) (2016-04-14)


### Bug Fixes

* **package:** Fix react dependency ([aee0c8d](https://github.com/nfl/react-metrics/commit/aee0c8d))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/nfl/react-metrics/compare/1.0.1...v1.1.0) (2016-02-29)


### Features

* **babel:** Upgrade Babel to 6 ([10b4e90](https://github.com/nfl/react-metrics/commit/10b4e90))



<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1.0.1](#101)
- [1.0.0](#100)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 1.0.1

Bugfixes:

  - Avoid invariant error when server caches modules
  - Fix typo in examples

## 1.0.0

Features:

  - Initial release
