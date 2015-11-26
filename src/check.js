'use strict';

exports.init = function () {
    Object.defineProperties(Object.prototype, {
        checkContainsKeys: {
            value: function (keys) {
                if (!(this.constructor === Object || this.constructor === Array)) {
                    throw new TypeError('Not an object or an array');
                }
                var objKeys = Object.keys(this);
                if (objKeys.length < keys.length) {
                    return false;
                }
                keys.forEach(function (key) {
                    if (objKeys.indexOf(key) === -1) {
                        return false;
                    }
                });
                return true;
            }
        },

        checkHasKeys: {
            value: function (keys) {
                if (!(this.constructor === Object || this.constructor === Array)) {
                    throw new TypeError('Not an object or an array');
                }
                if (!(Object.keys(this).length === keys.length)) {
                    return false;
                }
                return this.checkContainsKeys(keys);
            }
        },

        checkContainsValues: {
            value: function (values) {
                if (!(this.constructor === Object || this.constructor === Array)) {
                    throw new TypeError('Not an object or an array');
                }
                var copyValues = values.slice();
                var obj = this;
                Object.keys(this).forEach(function (key) {
                    for (var i = 0; i < copyValues.length; i++) {
                        if (obj[key] === copyValues[i]) {
                            copyValues.splice(i, 1);
                            break;
                        }
                    }
                });
                return copyValues.length === 0;
            }
        },

        checkHasValues: {
            value: function (values) {
                if (!(this.constructor === Object || this.constructor === Array)) {
                    throw new TypeError('Not an object or an array');
                }
                if (!(Object.keys(this).length === values.length)) {
                    return false;
                }
                return this.checkContainsValues(values);
            }
        },

        checkHasValueType: {
            value: function (key, type) {
                if (!(this.constructor === Object || this.constructor === Array)) {
                    throw new TypeError('Not an object or an array');
                }
                if (this.hasOwnProperty(key)) {
                    return this[key].constructor === type;
                }
                return false;
            }
        }
    });

    Object.defineProperties(String.prototype, {
        checkHasLength: {
            value: function (length) {
                return this.length === length;
            }
        },

        checkHasWordsCount: {
            value: function (count) {
                return this.split(' ').length === count;
            }
        }
    });

    Object.defineProperties(Array.prototype, {
        checkHasLength: {
            value: function (length) {
                return this.length === length;
            }
        }
    });

    Object.defineProperties(Function.prototype, {
        checkHasParamsCount: {
            value: function (count) {
                return this.length === count;
            }
        }
    });
};
