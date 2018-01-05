### React XHR Testing: Reduced Test Case

See CONTRIBUTING.md for details on installing, launching and running tests

The app was bootstrapped with [NWB](https://github.com/insin/nwb)

The app is a code display widget with tabs.
The first tab contains HTML extracted from the live DOM
The second tab contains code extracted from a URL by tag

The problem is with testing the ExtractTagFromURL component - it works fine, but I can't get the test to pass correctly - currently they are returning a false positive.

The followinf files contain some alternate attempts to get the process to work - these are commented out
* src/js/utilities/ExtractTagFromURL/ExtractTagFromURL.js
* src/js/utilities/ReadURL/ReadURL.js
* src/js/utilities/ReadURL/ReadURL-test.js


Disabled tests: these tests all work, but have been disabled to make the test output cleaner.

ExtractTagFromURL-test contains working promise testing with mocked dependancy module using babel-plugin-rewire

* src/js/components/DisplayCode/DisplayCode-test.js-disabled
* src/js/components/Tabs/Tabs-test.js-disabled
* src/js/utilities/ExtractHTMLFromDom/ExtractHTMLFromDom-test.js-disabled
* src/js/utilities/ExtractTagFromURL/ExtractTagFromURL-test.js-disabled