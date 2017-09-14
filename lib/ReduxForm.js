'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var ui = _interopRequireWildcard(_semanticUiReact);

var _reduxForm = require('redux-form');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SemanticUiReactReduxForm = function (_Component) {
    _inherits(SemanticUiReactReduxForm, _Component);

    function SemanticUiReactReduxForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SemanticUiReactReduxForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SemanticUiReactReduxForm.__proto__ || Object.getPrototypeOf(SemanticUiReactReduxForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { visible: false }, _this.toggleVisibility = function () {
            return _this.setState({ visible: !_this.state.visible });
        }, _this.confirmDelete = function () {
            _this.props.onDelete(_this.props.values);
            _this.toggleVisibility();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SemanticUiReactReduxForm, [{
        key: 'render',


        // componentWillMount(){}
        // componentDidMount(){}
        // componentWillReceiveProps(nextProps){}
        // shouldComponentUpdate(nextProps, nextState){}
        // componentWillUnmount(){}

        value: function render() {
            var visible = this.state.visible;
            var _props = this.props,
                title = _props.title,
                descriptions = _props.descriptions,
                children = _props.children,
                handleSubmit = _props.handleSubmit,
                reset = _props.reset,
                pristine = _props.pristine,
                submitting = _props.submitting,
                submitSucceeded = _props.submitSucceeded,
                submitFailed = _props.submitFailed,
                warning = _props.warning;

            return _react2.default.createElement(
                ui.Form,
                {
                    error: submitFailed, success: submitSucceeded, warning: warning,
                    loading: submitting, onSubmit: handleSubmit
                },
                _react2.default.createElement(ui.Message, { attached: true, header: title, list: descriptions }),
                _react2.default.createElement(
                    ui.Segment,
                    { attached: true },
                    children
                ),
                _react2.default.createElement(
                    ui.Message,
                    { attached: 'bottom' },
                    _react2.default.createElement(
                        ui.Sidebar.Pushable,
                        null,
                        _react2.default.createElement(
                            ui.Sidebar.Pusher,
                            null,
                            _react2.default.createElement(
                                ui.Grid,
                                { padded: true },
                                _react2.default.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 10 },
                                    _react2.default.createElement(ui.Message, { error: true, header: 'Input Error', content: this.props.error }),
                                    _react2.default.createElement(ui.Message, { success: true, header: 'Request Success', content: this.props.warning }),
                                    _react2.default.createElement(ui.Message, { warning: true, header: 'Request Success', content: this.props.warning })
                                ),
                                _react2.default.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 6 },
                                    _react2.default.createElement(
                                        ui.Button.Group,
                                        { fluid: true },
                                        _react2.default.createElement(ui.Button, { type: 'button', icon: 'edit', color: 'green', disabled: true }),
                                        this.props.onDelete && _react2.default.createElement(ui.Button, { type: 'button', icon: 'trash', color: 'red', disabled: pristine || submitting,
                                            onClick: this.toggleVisibility }),
                                        _react2.default.createElement(ui.Button, { type: 'button', icon: 'undo', disabled: pristine || submitting, onClick: reset }),
                                        _react2.default.createElement(ui.Button, { color: 'black', disabled: pristine || submitting, labelPosition: 'right', icon: 'upload',
                                            content: 'Submit', type: 'submit' })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            ui.Sidebar,
                            { as: ui.Segment, animation: 'overlay', direction: 'top', visible: visible },
                            _react2.default.createElement(
                                ui.Grid,
                                { style: { padding: 0 } },
                                _react2.default.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 10 },
                                    'This action cannot be undone. Are you sure?'
                                ),
                                _react2.default.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 6 },
                                    _react2.default.createElement(
                                        ui.Button.Group,
                                        { fluid: true, size: 'mini' },
                                        _react2.default.createElement(ui.Button, {
                                            color: 'red', icon: 'trash', labelPosition: 'right', content: 'Delete',
                                            type: 'button', name: 'confirm', onClick: this.confirmDelete
                                        }),
                                        _react2.default.createElement(ui.Button, {
                                            icon: 'close', labelPosition: 'right', content: 'Cancel',
                                            type: 'button', name: 'cancel', onClick: this.toggleVisibility
                                        })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SemanticUiReactReduxForm;
}(_react.Component);

SemanticUiReactReduxForm.propTypes = _extends({}, _reduxForm.propTypes, {
    title: _propTypes2.default.string,
    descriptions: _propTypes2.default.arrayOf(_propTypes2.default.string),
    children: _propTypes2.default.node,
    onDelete: _propTypes2.default.func
});
exports.default = (0, _reduxForm.reduxForm)({})(SemanticUiReactReduxForm);