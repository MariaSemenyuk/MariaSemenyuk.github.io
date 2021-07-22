const todaysDate = new Date();

document.querySelector(`.year`).textContent = ` ${todaysDate.getFullYear()}, `;
document.querySelector(`.modifiedTime`).textContent = `${document.lastModified}`;