const shareContainer = document.querySelector('.js-share-part');
const michelleId = document.querySelector('.js-figure');
const shareElement = document.querySelector('.js-share-button-div');
const shareElementButton = document.querySelector('.share-button');
const newIcons = document.querySelector('.js-share-icons');
const shareTextElement = document.querySelector('.js-share-text');
const iconElement = document.querySelectorAll('js-icon');
const container = document.querySelector('.js-container');
const triangleElement = document.querySelector('.js-triangle');



shareElement.addEventListener('click', () => {
  clickedShareButton()
});

shareElementButton.addEventListener('click', () => {
  clickedShareButton()
});

function clickedShareButton() {
  shareElement.classList.add('updated-share-button-div');
  shareElementButton.classList.add('updated-share-button');
  container.classList.add('update-container');
  shareContainer.classList.add('new-share-container');
  michelleId.classList.add('remove-figure');
  newIcons.classList.add('display-new-icons');
  shareTextElement.classList.add('display-share-text');
  iconElement.classList.add('display-icon');
  triangleElement.classList.add('display-triangle');
}