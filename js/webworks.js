
// * log entries //

let logCount = 1;
console.log('JavaScript Event Log:');

// * global declarations //

let themeLabel = 'dark';

// * functions //

function closePrevSlide (activeSlide) {
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i !== activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
        }
    }
}

function closeCurrentSlide (activeSlide) {
    for (let i = 0; i < document.querySelectorAll('.slide').length; i++) {
        if ('slide'+'-'+i == activeSlide.id) {
            document.querySelector('#slide'+'-'+i).style.flex = 1;
            document.querySelector('#slide'+'-'+i+' '+'.description').style.transform = 'translateX(-100%)';
            document.querySelector('#slide'+'-'+i+' '+'.description').style.opacity = 0;
        }
    }
}

function openSlide(target){
    let selectorString = "#"+target.id+" "+".description";
    if (target.style.flex !== '10 1 0%') {
        target.style.transform = 'scale(1)';
        target.style.flex = '10 1 0%';
        target.style.boxShadow = '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)';
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'hidden';
        closePrevSlide(target);
    } /*else if (target.style.flex == '10 1 0%') {
        target.style.flex = '1 1 0%';
        closeCurrentSlide(target);
        target.style.zIndex = 0;
    }*/
    document.querySelectorAll('.slide').forEach(element => {
        if (element.id !== target.id) {
            element.style.zIndex = 0;
        }
    });
}

function addFocusEffects(target) {
    if (target.style.flex !== '10 1 0%') {
        target.style.boxShadow = '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)';
        document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'visible';
        target.style.transform = 'scale(1.1)';
        target.style.zIndex = 1;
        document.querySelectorAll('.slide').forEach(element => {
            if (element.id !== target.id) {
                element.style.zIndex = 0;
            }
        });
    }
}

function removeFocusEffects(target) {
    document.querySelector('#' + target.id + ' ' + '.ui-hint').style.visibility = 'hidden';
    if (target.style.flex !== '10 1 0%') {
        target.style.transform = 'scale(1)';
        target.style.boxShadow = 'none';
    }
    document.querySelectorAll('.slide').forEach(element => {
    });
}
/*
function activeTheme(theme) {
    if (theme == 'dark') {
        themeLabel = 'dark';
        document.querySelector('#banner').style.backgroundColor = '#121212cc';
        document.querySelector('#logo').style.color = '#ffffff';
        document.querySelector('#credits').style.color = '#ffffff80'
        document.querySelector('#smallText').style.color = '#ffffff80';
        document.querySelector('#largeText').style.color = '#ffffff80';
        document.querySelectorAll('.description').forEach(element => {
            element.style.backgroundColor = '#ffffff';
            element.style.color = '#121212';
        });
        document.querySelectorAll('h2').forEach(element => {
            element.style.color = '#ffffff';
        });
        document.querySelector('body').style.backgroundColor = '#121212';
        document.querySelector('body').style.color = '#ffffff';
        return 'dark';
    } else if (theme == 'light') {
        themeLabel = 'light';
        document.querySelector('#banner').style.backgroundColor = '#ffffffcc';
        document.querySelector('#logo').style.color = '#121212';
        document.querySelector('#credits').style.color = '#121212'
        document.querySelector('#smallText').style.color = '#12121280';
        document.querySelector('#largeText').style.color = '#12121280';
        document.querySelectorAll('.description').forEach(element => {
            element.style.backgroundColor = '#121212';
            element.style.color = '#ffffff';
        });
        document.querySelectorAll('h2').forEach(element => {
            element.style.color = '#121212';
        });
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('body').style.color = '#121212';
        return 'light';
    }
}
function slideIt (targetButton) {
    if (targetButton == 'light') {
        document.querySelector('#toggle').style.transform = 'translateY(0%)';
        console.log(logCount + ':' + ' ' + 'Dark Theme');
        logCount++
        activeTheme('dark');
    } else if (targetButton == 'dark') {
        document.querySelector('#toggle').style.transform = 'translateY(-50%)';
        console.log(logCount + ':' + ' ' + 'Light Theme');
        logCount++
        activeTheme('light');
    }
}
*/

function scrollToHeading () {

}

// * load event listeners //

document.querySelectorAll('.slide').forEach(element => {
    element.addEventListener('click', () => {openSlide(element)});
    element.addEventListener('mouseenter', () => {addFocusEffects(element)});
    element.addEventListener('mouseleave', () => {removeFocusEffects(element)});
});
document.querySelectorAll('.close-btn').forEach(element => {
    element.addEventListener('click', () => {
        if (target.style.flex == '10 1 0%') {
            target.style.flex = '1 1 0%';
            closeCurrentSlide(target);
            target.style.zIndex = 0;
        }
    });
});
/*
document.querySelector('#light').addEventListener('click', () => {slideIt('light')});
document.querySelector('#dark').addEventListener('click', () => {slideIt('dark')});
document.querySelector('#nav-arrow a').addEventListener('click', scrollToHeading);
document.querySelector('#credits').addEventListener('mouseover', () => {
    document.querySelector('#smallText').style.color = '#crimson';
    document.querySelector('#largeText').style.color = '#crimson';
    document.querySelector('#largeText i').style.color = '#crimson';
});
*/
document.querySelectorAll('.brand').forEach(element => {
    element.addEventListener('mousedown', () => {
        if (element.style.backgroundSize == '40%') {
            element.style.backgroundSize = '35%';
        } else if (element.style.backgroundSize == '50%') {
            element.style.backgroundSize = '45%';
        }
    });
    element.addEventListener('mouseup', () => {
        if (element.style.backgroundSize == '35%') {
            element.style.backgroundSize = '40%';
        } else if (element.style.backgroundSize == '45%') {
            element.style.backgroundSize = '50%';
        }
    });
});

// * run at visit //

/*activeTheme(themeLabel);*/