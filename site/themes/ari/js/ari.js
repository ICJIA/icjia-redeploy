(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var App = {

    init: function init() {
        console.log('ARI Init');
        return this;
    },

    highlightSearch: function highlightSearch() {
        $(".search").focus().select();
        return this;
    },

    addThis: function addThis() {
        var addThis = document.createElement('script');
        addThis.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=cschweda');
        document.body.appendChild(addThis);
        return this;
    },

    initializeFactsheets: function initializeFactsheets() {
        console.log('Factsheet init');
        $('.selectpicker').selectpicker();
        $('.selectpicker').on('changed.bs.select', function (e) {
            $('.local-program-description').hide();
            $('.factsheet').show();
            var siteTitle = $(".selectpicker option:selected").text();
            var siteURL = e.target.value;
            $('.panel-title').html(siteTitle);
            console.log('URL: ', e.target.value);
            $.ajax(siteURL, {
                success: function success(data) {
                    $('.panel-body').html(data);
                },
                error: function (_error) {
                    function error() {
                        return _error.apply(this, arguments);
                    }

                    error.toString = function () {
                        return _error.toString();
                    };

                    return error;
                }(function () {
                    console.log('Error: ', error);
                })
            });
        });
        return this;
    }

};

exports.App = App;

},{}],2:[function(require,module,exports){
'use strict';

var _App = require('./App.js');

$(function () {
    _App.App.init().highlightSearch().initializeFactsheets();
});

},{"./App.js":1}]},{},[2]);

//# sourceMappingURL=ari.js.map
