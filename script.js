const enroll = document.querySelector(".enrollBtn");

const enrollPop = document.querySelector(".pointerBox");

const logIn = document.querySelector('.logIn')

const loader = document.querySelector('.loader');

const logInTxt = document.querySelector('.logIntxt');

const aside = document.querySelector('.aside');

const webIcon = document.querySelector('.webTitleImg')

const main = document.querySelector('main');

const footer = document.querySelector('footer');

const enrollSpan = document.querySelector('.enrollSpan');

const headName = document.querySelector('.headName')

const inputEm = document.querySelector('.inputEm')

const inputPs = document.querySelector('.inputPs')

const body = document.querySelector('body')


inputPs.addEventListener( 'click', () => {
    inputPs.classList.toggle('input-focus')
    inputPs.classList.toggle('input-normal')
} )


inputEm.addEventListener( 'click', () => {
    inputEm.classList.toggle('input-focus')
    inputEm.classList.toggle('input-normal')
} )

enroll.addEventListener('click', () => {
    enrollPop.classList.toggle('pointerOpacity')
});

logIn.addEventListener('click', () => {
    console.log("click")
    loader.classList.remove('loaderBefore');
    logInTxt.classList.remove('logIntxtBefore')
    loader.classList.add('loaderAfter');
    logInTxt.classList.add('logIntxtAfter')
    setTimeout( logInClick, 3000)

})

function logInClick () {
    aside.classList.add('asideAnimation1');
    webIcon.classList.add('webTitleImgAnimation1');
    loader.classList.remove('loaderAfter');
    logInTxt.classList.remove('logIntxtAfter');
    loader.classList.add('loaderBefore');
    logInTxt.classList.add('logIntxtBefore');
    main.classList.add('allRemaingClassAnim');
    footer.classList.add('allRemaingClassAnim');
    enrollSpan.classList.add('enrollAnimeSpan');
    headName.classList.add('headNameAnimation');
    enroll.classList.add('enrollBtnAnime')

    setTimeout(() => {
        aside.classList.remove('asideAnimation1');
        aside.classList.add('asideAnimation2');
        webIcon.classList.remove('webTitleImgAnimation1');
        webIcon.classList.add('webTitleImgAnimation2')
        }, 2000)

    setTimeout(() => {
    aside.classList.remove('asideAnimation2');
    webIcon.classList.remove('webTitleImgAnimation2')
    main.classList.remove('allRemaingClassAnim');
    footer.classList.remove('allRemaingClassAnim');
    enrollSpan.classList.remove('enrollAnimeSpan');
    headName.classList.remove('headNameAnimation');
    enroll.classList.remove('enrollBtnAnime')
    }, 10000)
}