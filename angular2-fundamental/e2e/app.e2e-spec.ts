import { Angular2FundamentalPage } from './app.po';

describe('angular2-fundamental App', function() {
  let page: Angular2FundamentalPage;

  beforeEach(() => {
    page = new Angular2FundamentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
