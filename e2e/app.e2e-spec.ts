import { AngularTddLessonPage } from './app.po';

describe('angular-tdd-lesson App', () => {
  let page: AngularTddLessonPage;

  beforeEach(() => {
    page = new AngularTddLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
