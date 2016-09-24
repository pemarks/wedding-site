import * as React from 'react';
import * as _ from 'lodash';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';
import { PageRoot } from 'app-js/pages/root';
import { IntroPage } from 'app-js/pages/intro';
import { MainPage } from 'app-js/pages/main';
export default function () {
    return React.createElement(Router, {}, React.createElement(Route, {
        'path': '/',
        'component': PageRoot
    }, React.createElement(IndexRoute, { 'component': IntroPage }), React.createElement(Route, {
        'path': 'main',
        'component': MainPage
    })));
}