'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('notifications', function() {
      it('should render an element for notifications', function() {
          expect(element(by.css('.master')).getText()).
            toMatch(/Notifications/)
      })
  })
});
