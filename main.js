const shareEl = document.querySelector('.share'),
  shareBtn = document.querySelector('.share-btn')

shareBtn.addEventListener('click', () => {
  shareEl.classList.toggle('active')
})
