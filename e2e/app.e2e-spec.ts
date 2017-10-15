import { PdfAppPage } from './app.po';

describe('pdf-app App', () => {
  let page: PdfAppPage;

  beforeEach(() => {
    page = new PdfAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
