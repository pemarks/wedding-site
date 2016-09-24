import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';
export default function () {
    return React.createElement('div', { 'id': 'page-intro' }, React.createElement('div', { 'className': 'hidden-xs' }, React.createElement('div', { 'className': 'intro-pic img' })), React.createElement('div', { 'className': 'visible-xs-block' }, React.createElement('div', { 'className': 'intro-pic img xs' })), React.createElement('div', { 'className': 'intro-heading' }, React.createElement('h2', {}, 'The wedding of'), React.createElement('h1', { 'className': 'cursive' }, 'Paul Marks ', React.createElement('span', {}, '&'), ' Sylicia Kittling'), React.createElement('h2', {}, 'Saturday December 10, 2016'), React.createElement(Link, {
        'className': 'intro-btn btn btn-primary',
        'to': '/main'
    }, 'Join Us!')));
}