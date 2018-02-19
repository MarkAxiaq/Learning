import { MarkAngularPreparePage } from './app.po';

describe('mark-angular-prepare App', () => {
  let page: MarkAngularPreparePage;

  beforeEach(() => {
    page = new MarkAngularPreparePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
