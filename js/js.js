document.onreadystatechange = (res) => {
    if (document.readyState == "complete") {
        // this.stopLoading();x
    }else if(document.readyState == "interactive"){
        this.startLoading();
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startLoading() {
    document.getElementById('loading').style.display = 'flex';
    document.getElementsByTagName('header')[0].style.filter = 'blur(5px)';
    document.getElementsByTagName('main')[0].style.filter = 'blur(5px)';
    document.getElementsByTagName('footer')[0].style.filter = 'blur(5px)';
    const hexa = document.getElementsByClassName('hexa');
    while (true) {
        for (let i = 1; i <= 6; i++) {
            await sleep(500);
            hexa[i - 1].style.display = 'flex', 2000;
        }
        for (let i = 1; i <= 6; i++) {
            await sleep(500);
            hexa[i - 1].style.display = 'none', 2000;
        }
    }
}
function stopLoading() {
    document.getElementById('loading').style.display = 'none';
    document.getElementsByTagName('header')[0].style.filter = 'none';
    document.getElementsByTagName('main')[0].style.filter = 'none';
    document.getElementsByTagName('footer')[0].style.filter = 'none';
}