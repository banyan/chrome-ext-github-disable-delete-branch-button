var mergedFrom = document.querySelector('.post-merge-message .merge-branch-description span > span').textContent;
if (mergedFrom === 'master') {
  var deleteBranchButton = document.querySelector('.post-merge-message button');
  deleteBranchButton.disabled = true;
}
