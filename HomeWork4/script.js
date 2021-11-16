let text = document.querySelector('.homework__text').textContent;

document.querySelector('.homework__one').textContent = text.replace(/'/g, '\"');
document.querySelector('.homework__two').textContent = text.replace(/(\W)(')|(^)(')/g, "$1\"");