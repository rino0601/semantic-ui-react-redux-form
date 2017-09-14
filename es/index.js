var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ui from 'semantic-ui-react';
import { reduxForm, propTypes } from "redux-form";

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

            return React.createElement(
                ui.Form,
                {
                    error: submitFailed, success: submitSucceeded, warning: warning,
                    loading: submitting, onSubmit: handleSubmit
                },
                React.createElement(ui.Message, { attached: 'top', header: title, list: descriptions }),
                React.createElement(
                    ui.Segment,
                    { attached: true },
                    children
                ),
                React.createElement(
                    ui.Message,
                    { attached: 'bottom' },
                    React.createElement(
                        ui.Sidebar.Pushable,
                        null,
                        React.createElement(
                            ui.Sidebar.Pusher,
                            null,
                            React.createElement(
                                ui.Grid,
                                { padded: true },
                                React.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 10 },
                                    React.createElement(ui.Message, { error: true, header: 'Input Error', content: this.props.error }),
                                    React.createElement(ui.Message, { success: true, header: 'Request Success', content: this.props.warning }),
                                    React.createElement(ui.Message, { warning: true, header: 'Request Success', content: this.props.warning })
                                ),
                                React.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 6 },
                                    React.createElement(
                                        ui.Button.Group,
                                        { fluid: true },
                                        React.createElement(ui.Button, { type: 'button', icon: 'edit', color: 'green', disabled: true }),
                                        this.props.onDelete && React.createElement(ui.Button, { type: 'button', icon: 'trash', color: 'red', disabled: pristine || submitting,
                                            onClick: this.toggleVisibility }),
                                        React.createElement(ui.Button, { type: 'button', icon: 'undo', disabled: pristine || submitting, onClick: reset }),
                                        React.createElement(ui.Button, { color: 'black', disabled: pristine || submitting, labelPosition: 'right', icon: 'upload',
                                            content: 'Submit', type: 'submit' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            ui.Sidebar,
                            { as: ui.Segment, animation: 'overlay', direction: 'top', visible: visible },
                            React.createElement(
                                ui.Grid,
                                { style: { padding: 0 } },
                                React.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 10 },
                                    'This action cannot be undone. Are you sure?'
                                ),
                                React.createElement(
                                    ui.Grid.Column,
                                    { mobile: 16, tablet: 8, computer: 6 },
                                    React.createElement(
                                        ui.Button.Group,
                                        { fluid: true, size: 'mini' },
                                        React.createElement(ui.Button, {
                                            color: 'red', icon: 'trash', labelPosition: 'right', content: 'Delete',
                                            type: 'button', name: 'confirm', onClick: this.confirmDelete
                                        }),
                                        React.createElement(ui.Button, {
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
}(Component);

SemanticUiReactReduxForm.propTypes = _extends({}, propTypes, {
    title: PropTypes.string,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node,
    onDelete: PropTypes.func
});


export default reduxForm({})(SemanticUiReactReduxForm);