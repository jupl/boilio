// Register Babel since our tests require transpiling
require('babel-register')

// Simulate a browser environment in Node with jsdom
const {jsdom} = require('jsdom')
const document = global.document = jsdom('')
const window = global.window = document.defaultView
global.navigator = window.navigator
