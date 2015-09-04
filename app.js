var disableBranchButton = function() {
  var mergedFrom = document.querySelector('.post-merge-message .merge-branch-description span > span').textContent;
  if (mergedFrom === 'master') {
    var deleteBranchButton = document.querySelector('.post-merge-message button');
    deleteBranchButton.disabled = true;
  }
};

var observeDocumentChange = function(cb) {
  var target = document.querySelector('body');
  var config = {
    childList: true,
    subtree: true
  };

  var observer = new MutationObserver(function(mutations, self) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        cb();
      }
    });
  });

  observer.observe(target, config);
};

observeDocumentChange(disableBranchButton);
disableBranchButton();
