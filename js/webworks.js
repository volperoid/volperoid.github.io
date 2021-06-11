
// * log entries //

let logCount = 1;
console.log('JavaScript Event Log:');

// * global declarations //

const nodeList_slide = document.querySelectorAll('.slide');
const nodeList_description = document.querySelectorAll('.description');
const nodeList_heading = document.querySelectorAll('.heading');


// * functions //

function closePrevSlide (activeSlide) {
    for (let i = 0; i < nodeList_slide.length; i++) {
        if ('slide'+'-'+i !== activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.backgroundColor = 'transparent';
        }
    }
}

function closeCurrentSlide (activeSlide) {
    for (let i = 0; i < nodeList_slide.length; i++) {
        if ('slide'+'-'+i == activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.backgroundColor = 'transparent';
        }
    }
}

function openSlide(target){
    let selectorString = "#"+target.id+" "+".description";
    if (target.style.flex !== '10 1 0%') {
        target.style.flex = '10 1 0%';
        target.style.transform = 'scale(1)';
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector(selectorString).style.backgroundColor = '#ffffffcc';
        closePrevSlide(target);
    } else if (target.style.flex == '10 1 0%') {
        target.style.flex = '1 1 0%';
        closeCurrentSlide(target);
    }
}

function addFocusEffects(target) {
    target.style.boxShadow = '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)';
    if (target.style.flex !== '10 1 0%') {
        target.style.transform = 'scale(1.2)';
        target.style.flex = '1.25';
        target.style.zIndex = '2';
        nodeList_slide.forEach(element => {
            if (element.id !== target.id) {
                element.style.filter = 'blur(4px)';
                element.style.zIndex = '0';
            }
        });
    }
}

function removeFocusEffects(target) {
    target.addEventListener('animationend', () => {
        target.style.zIndex = '0';
        console.log('test');
    });
    target.style.boxShadow = 'none';
    target.style.transform = 'scale(1)';
    target.style.flex = '1 1 0%';
    nodeList_slide.forEach(element => {
        element.style.filter = 'blur(0)';
    });
    closeCurrentSlide(target);
}

function activeTheme(theme) {
    if (theme == 'dark') {
        nodeList_heading.forEach(element => {
            element.style.backgroundColor = '#121212cc';
            element.style.color = 'white';
        });
        document.querySelector('#banner').style.backgroundColor = '#121212cc';
        document.querySelector('header').style.color = 'white';
        document.querySelector('#credits').style.color = 'hsla(0, 0%, 100%, 0.50)';
        document.querySelector('#visit').style.color = 'hsla(0, 0%, 100%, 0.50)';
        document.querySelector('#slide-3 .description').style.backgroundColor = '#121212cc';
    } else if (theme == 'light') {
        nodeList_heading.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = '#121212';
        });
        document.querySelector('#banner').style.backgroundColor = '#ffffffcc';
        document.querySelector('header').style.color = '#121212';
        document.querySelector('#credits').style.color = 'hsla(0, 0%, 7%, 0.5)';
        document.querySelector('#visit').style.color = 'hsla(0, 0%, 7%, 0.5)';
        document.querySelector('#slide-3 .description').style.backgroundColor = '#ffffffcc';
    }
}

function slideIt (targetButton) {
    if (targetButton == 1) {
        document.querySelector('#toggle').style.transform = 'translateY(0%)';
        console.log(logCount + ':' + ' ' + 'Dark Theme');
        logCount++
        activeTheme('dark');
    } else if (targetButton == 0) {
        document.querySelector('#toggle').style.transform = 'translateY(-50%)';
        console.log(logCount + ':' + ' ' + 'Light Theme');
        logCount++
        activeTheme('light');
    }
}

function scrollToHeading () {
    console.log('function entered');
    for (let i = 0; i < 2; i++) {
        if (i < 1) {
            document.querySelector('heading'+'-'+i).scrollIntoView();
        } else if (i = 1) {
            document.querySelector('body').scrollIntoView();
        };
    }
}

// * load event listeners //

nodeList_slide.forEach(element => {
    element.addEventListener('click', () => {openSlide(element)});
    element.addEventListener('mouseover', () => {addFocusEffects(element)});
    element.addEventListener('mouseleave', () => {removeFocusEffects(element)});
});
document.querySelector('#light').addEventListener('click', () => {slideIt(1)});
document.querySelector('#dark').addEventListener('click', () => {slideIt(0)});
document.querySelector('#nav-arrow').addEventListener('click', scrollToHeading);