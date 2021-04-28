const state = () => ({
  projects: [
    { id: 1, link: 'https://danurhydroponic.herokuapp.com/', title: 'HydroFarm', subTitle: 'Web App, fullstack', desc: 'A web app for hydroponic system management in Danur Farm.', imgPath: '1.png' },
    { id: 2, link: 'https://pmd7-d3f6f.web.app/', title: 'Prayer Scedhule', subTitle: 'Web App, frontend', desc: 'A web app provide schedule prayer time, dzikir counter and hadith finder.', imgPath: '2.png' },
    { id: 3, link: 'https://urbarn-admin.herokuapp.com/', title: 'Admin urBarn', subTitle: 'Web, fullstack', desc: 'Admin dashboard that manage e-commerce for urBarn store.', imgPath: '3.png' },
    { id: 4, link: 'https://institut.id/', title: 'Institut.id', subTitle: 'Web, fullstack', desc: 'A website free e-learning platform for all of Indonesia student.', imgPath: '4.png' },
    { id: 5, link: 'https://fauziru.github.io/urBarn/', title: 'urBarn', subTitle: 'Web, frontend', desc: 'e-commerce template that i build while learn Nuxt.js framework.', imgPath: '5.png' },
    { id: 6, link: 'https://ghibahin-com.herokuapp.com/', title: 'Ghibahin', subTitle: 'Web, fullstack', desc: 'Social media platform for my final assignment in Sanbercode bootcamp.', imgPath: '6.png' }
  ]
})

export default {
  namespaced: true,
  state
}
