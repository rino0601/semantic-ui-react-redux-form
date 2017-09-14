var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by rino0 on 2017-09-10.
 */
import React from "react";
import PropTypes from "prop-types";
import { Form, Popup } from "semantic-ui-react";

var FormInput = function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FormInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: _this.props.input.value
        }, _this.onKeyPress = function (e) {
            if (_this.props.submitOnEnter && e.key === "Enter") {
                _this.props.input.onChange(e);
                _this.props.input.onBlur(e);
            }
        }, _this.handleChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({ value: value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FormInput, [{
        key: "componentWillReceiveProps",


        // static defaultProps = {};
        // static  childContextTypes = {};
        // static contextTypes = {};

        // getChildContext() {}
        // componentDidMount(){}
        // componentWillUnmount(){}

        value: function componentWillReceiveProps(nextProps) {
            var value = nextProps.input.value;

            this.setState({ value: value });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                input = _props.input,
                meta = _props.meta,
                rest = _objectWithoutProperties(_props, ["input", "meta"]);

            var onChange = input.onChange,
                value = input.value,
                iinput = _objectWithoutProperties(input, ["onChange", "value"]);

            return React.createElement(Popup, {
                trigger: React.createElement(Form.Input, _extends({
                    value: this.state.value,
                    onChange: this.handleChange,
                    onKeyPress: this.onKeyPress,
                    error: meta.touched && meta.invalid,
                    loading: meta.asyncValidating
                }, iinput, rest)),
                position: "bottom left",
                open: meta.touched && meta.invalid,
                content: meta.error
            });
        }
    }]);

    return FormInput;
}(React.Component);

FormInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    submitOnEnter: PropTypes.bool
};


export default FormInput;