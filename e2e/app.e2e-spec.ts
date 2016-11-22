import { TelerikReduxPage } from './app.po';

describe('telerik-redux App', function() {
  let page: TelerikReduxPage;

  beforeEach(() => {
    page = new TelerikReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
