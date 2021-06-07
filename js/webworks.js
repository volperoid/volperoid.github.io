const nodeList = document.querySelectorAll('.illustration');
function flexIt(target){
    let selectorString = "#"+target.id+" .wrapper";
    if (target.style.flex !== 10) {
        target.style.flex = 10;
        for (let i = 0; i < nodeList.length; i++) {
            if ('slide'+i !== target.id) {
                document.querySelector('#slide'+i).style.flex = 1;
                document.querySelector('#slide'+i+' '+'.wrapper').style.transform = 'translateX(-100%)';
                document.querySelector('#slide'+i+' '+'.wrapper').style.opacity = 0;
                document.querySelector('#slide'+i+' '+'.wrapper').style.backgroundColor = 'transparent';
            }
        }
        document.querySelector(selectorString).style.transform = 'translateX(0)';
        document.querySelector(selectorString).style.opacity = 1;
        document.querySelector(selectorString).style.backgroundColor = '#ffffffcc';
    } else {
        target.style.flex = 1;
    }
}
function dimIt(target) {
    target.style.filter = 'sepia()';
}
function slideIt (targetButton) {
    //function colorChangeCrimson () {document.querySelector('#visit i').style.color = 'crimson';
    //console.log('it works');}
    //function colorChangeWhite () {document.querySelector('#visit i').style.color = 'white';
    //console.log('it works');}
    if (targetButton == 1) {
        document.querySelector('#toggle').style.transform = 'translateY(0%)';
        console.log('Theme: Dark');
        let nodeList = document.querySelectorAll('.section');
        nodeList.forEach(element => {
            element.style.backgroundColor = '#121212cc';
            element.style.color = 'white';
        });
        document.querySelector('#banner').style.backgroundColor = '#121212cc';
        document.querySelector('header').style.color = 'white';
        document.querySelector('#author').style.color = 'hsla(0, 0%, 100%, 0.50)';
        //document.querySelector('#visit').style.color = 'hsla(0, 0%, 100%, 0.50)';
        //document.querySelector('#visit').addEventListener('hover', colorChangeWhite);
    } else if (targetButton == 0) {
        document.querySelector('#toggle').style.transform = 'translateY(-50%)';
        console.log('Theme: Light');
        let nodeList = document.querySelectorAll('.section');
        nodeList.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = '#121212';
        });
        document.querySelector('#banner').style.backgroundColor = '#ffffffcc';
        document.querySelector('header').style.color = '#121212';
        document.querySelector('#author').style.color = 'hsla(0, 0%, 7%, 0.5)';
        //document.querySelector('#visit').style.color = 'hsla(0, 0%, 7%, 0.5)';
        //document.querySelector('#visit').addEventListener('hover', colorChangeCrimson);
    }
}
nodeList.forEach(element => {
    element.addEventListener('click', () => {flexIt(element)});
    element.addEventListener('hover', () => {dimIt(element)});
});
document.querySelector('#light').addEventListener('click', () => {slideIt(1)});
document.querySelector('#dark').addEventListener('click', () => {slideIt(0)});

