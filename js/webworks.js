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
nodeList.forEach(element => {
    element.addEventListener('click', () => {flexIt(element)});
    element.addEventListener('hover', () => {dimIt(element)});
});

idleState = {
    'border-right-color': '#484848'
}
$('#btn-moon').hover(
    function() {
        $('#moon').css({'border-right-color': '#f0e68c'});
    },
    function() {
        $('#moon').css(idleState);
    }
);