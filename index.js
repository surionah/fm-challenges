'use strict';

(async () => {

  const fillData = (activeLink) => {
    data.forEach(val => {
      const selectedClassName = val.title.toLocaleLowerCase()
      const nameLabelElement = document.querySelector(`.${selectedClassName}>.labels>span`)
      nameLabelElement.innerText = val.title
      const previusLabelElement = document.querySelector(`.${selectedClassName}>.data>.main`)
    });
  }

  const dataFetched = await fetch('./assets/data.json')
  const data = await dataFetched.json()

  const linkElements = document.getElementsByTagName('a')
  const links = [...linkElements]
  const activeLink = links.find(el => {
    return el.getAttribute('class') === 'active'
  }).innerText.toLocaleLowerCase()
  fillData(activeLink)
})()