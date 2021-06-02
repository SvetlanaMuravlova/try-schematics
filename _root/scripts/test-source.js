import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import './matchers';
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
const context = require.context('../src', true, /\.spec\.ts/);
context.keys().map(context);
//# sourceMappingURL=test-source.js.map