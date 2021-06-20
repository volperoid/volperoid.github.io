
// * log entries //

let logCount = 1;
console.log('JavaScript Event Log:');

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
    } else if (target.style.flex == '10 1 0%') {
        target.style.flex = '1 1 0%';
        closeCurrentSlide(target);
        target.style.zIndex = 0;
    }
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

// * load event listeners //

document.querySelectorAll('.slide').forEach(element => {
    element.addEventListener('click', () => {openSlide(element)});
    element.addEventListener('mouseenter', () => {addFocusEffects(element)});
    element.addEventListener('mouseleave', () => {removeFocusEffects(element)});
});
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