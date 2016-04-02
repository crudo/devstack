require('./styles/app');

import mousetrap from 'mousetrap';
import cx from 'classnames';
import $ from 'jquery';
import immutable from 'immutable';

import React from 'react';
import Button from './components/button';

React.render(
    <Button value="Hello world" />,
    document.getElementById('app')
);

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
