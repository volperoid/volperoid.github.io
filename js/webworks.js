
// * get accordion slides //

const nodeList = document.querySelectorAll('.illustration');

// * functions //


function flexIt(target){
    function closePrevSlide () {
        const nodeList = document.querySelectorAll('.illustration');
        for (let i = 0; i < nodeList.length; i++) {
            if ('slide'+i !== target.id) {
                document.querySelector('#slide'+i).style.flex = 1;
                document.querySelector('#slide'+i+' '+'.wrapper').style.transform = 'translateX(-100%)';
                document.querySelector('#slide'+i+' '+'.wrapper').style.opacity = 0;
                document.querySelector('#slide'+i+' '+'.wrapper').style.backgroundColor = 'transparent';
            }
        }
    }
    function closeCurrentSlide () {
        const nodeList = document.querySelectorAll('.illustration');
        for (let i = 0; i < nodeList.length; i++) {
            if ('slide'+i == target.id) {
                document.querySelector('#slide'+i).style.flex = 1;
                document.querySelector('#slide'+i+' '+'.wrapper').style.transform = 'translateX(-100%)';
                document.querySelector('#slide'+i+' '+'.wrapper').style.opacity = 0;
                document.querySelector('#slide'+i+' '+'.wrapper').style.backgroundColor = 'transparent';
            }
        }
    }
    let selectorString = "#"+target.id+" "+".wrapper";
    if (target.style.flex !== '10 1 0%') {
        target.style.flex = '10 1 0%';
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector(selectorString).style.backgroundColor = '#ffffffcc';
        closePrevSlide();
    } else if (target.style.flex == '10 1 0%') {
        target.style.flex = '1 1 0%';
        closeCurrentSlide();
    }
}

//------------------------------------------------------------------------------------------------------------------//

function dimIt(target) {
    console.log('hi')
    target.style.filter = 'sepia(100)';
}

//------------------------------------------------------------------------------------------------------------------//

function slideIt (targetButton) {
    if (targetButton == 1) {
        document.querySelector('#toggle').style.transform = 'translateY(0%)';

        console.log('Theme: Dark');

        const nodeList = document.querySelectorAll('.section');
        nodeList.forEach(element => {
            element.style.backgroundColor = '#121212cc';
            element.style.color = 'white';
        });
        document.querySelector('#banner').style.backgroundColor = '#121212cc';
        document.querySelector('header').style.color = 'white';
        document.querySelector('#author').style.color = 'hsla(0, 0%, 100%, 0.50)';
        document.querySelector('#visit').style.color = 'hsla(0, 0%, 100%, 0.50)';
        document.querySelectorAll('.wrapper').style.backgroundColor = '#121212cc';
    } else if (targetButton == 0) {
        document.querySelector('#toggle').style.transform = 'translateY(-50%)';

        console.log('Theme: Light');

        const nodeList = document.querySelectorAll('.section');
        nodeList.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = '#121212';
        });
        document.querySelector('#banner').style.backgroundColor = '#ffffffcc';
        document.querySelector('header').style.color = '#121212';
        document.querySelector('#author').style.color = 'hsla(0, 0%, 7%, 0.5)';
        document.querySelector('#visit').style.color = 'hsla(0, 0%, 7%, 0.5)';
        document.querySelector('.wrapper').style.backgroundColor = '#ffffffcc';
    }
}

//------------------------------------------------------------------------------------------------------------------//

function scrollToSection () {
    console.log('function entered');
    for (let i = 0; i < 2; i++) {
        if (i < 1) {
            document.querySelector('section'+'-'+i).scrollIntoView();
        } else if (i = 1) {
            document.querySelector('body').scrollIntoView();
        };

    }
}

// * load event listeners //

nodeList.forEach(element => {
    element.addEventListener('click', () => {flexIt(element)});
    element.addEventListener('hover', () => {dimIt(element)});
});
document.querySelector('#light').addEventListener('click', () => {slideIt(1)});
document.querySelector('#dark').addEventListener('click', () => {slideIt(0)});
document.querySelector('#nav-arrow').addEventListener('click', scrollToSection)