import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import './matchers';
// Prevent Karma from running prematurely.
// __karma__.loaded = Function.prototype;
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('../demo/src', true, /\.spec\.ts/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
// __karma__.start();
//# sourceMappingURL=test-demo.js.map