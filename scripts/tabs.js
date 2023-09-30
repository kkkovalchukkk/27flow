window.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_PAGE_CLASSNAME = 'page-list__page--active';
  const ACTIVE_TAB_CLASSNAME = 'tab-list__item--active';

  const sectionWithTabsEls = document.querySelectorAll('.tab-section');

  const resetTabs = (tabEls) => {
    tabEls.forEach((tabEl) => tabEl.classList.remove(ACTIVE_TAB_CLASSNAME));
  };
  const resetPages = (pagesEls) => {
    pagesEls.forEach((page) => page.classList.remove(ACTIVE_PAGE_CLASSNAME));
  };
  const makeActiveTab = (tab) => tab.classList.add(ACTIVE_TAB_CLASSNAME);
  const makeActivePage = (page) => page.classList.add(ACTIVE_PAGE_CLASSNAME);

  sectionWithTabsEls.forEach((tabSection) => {
    const tabEls = tabSection.querySelectorAll('.tab-list__item');
    const pagesEls = tabSection.querySelectorAll('.page-list__page');

    tabEls.forEach((tabEl, idx) => {
      tabEl.addEventListener('click', () => {
        tabSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        resetTabs(tabEls);
        resetPages(pagesEls);
        makeActiveTab(tabEl);
        makeActivePage(pagesEls[idx]);
      });
    });
  });
});
