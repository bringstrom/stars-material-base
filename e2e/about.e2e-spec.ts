import { browser, element, by } from 'protractor';

describe('About navigation', () => {

  beforeEach(() => {
    browser.get('/about');
  });

  it('should navigate to the about page', () => {
    const divText = element(by.css('div')).getText();
    expect(divText).toContain('Demonstrates');
  });
});
