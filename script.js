

let $buttons = $('nav>button')

for (const button of $buttons) {
    $(button).click(() => {
        let info = data.find(e => e.title === button.innerHTML)
        $('.text>h1').html(info.title)
        $('.text>p').html(info.content)
        $('.image>img').attr('src', info.img)
    })
}

fetch('./api.json').then(e=>console.log(e))