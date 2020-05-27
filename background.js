function removeDuplicateTabs() {
  browser.tabs.query({}).then((allTabs) => {
    const urls = new Set();
    const toClose = [];

    allTabs.forEach((tab) => {
      if (urls.has(tab.url)) {
        toClose.push(tab.id);
      } else {
        urls.add(tab.url);
      }
    });

    browser.tabs.remove(toClose);
  });
}

browser.browserAction.onClicked.addListener(removeDuplicateTabs);
