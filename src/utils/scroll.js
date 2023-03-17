export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
}

export const scrollToId = (id) => {
    const $element = document.querySelector('#' + id)
    window.scrollTo({
        top: $element.offsetTop - 100,
        left: 0,
        behavior: 'smooth'
      })
    // document.getElementById(id).scrollIntoView({
    //     behavior: 'smooth'
    // })
}