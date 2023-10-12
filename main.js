const pageBody = document.querySelector('body');
console.log(pageBody);
const box = document.createElement('div');
box.style.height = '100%';
box.style.width = '100%';
box.style.position = 'fixed';
box.style.top = '0';
box.style.zIndex= '999';
box.style.pointerEvents = 'none';

const hiddenImage = document.createElement('img');
hiddenImage.src = 'https://imgb.ifunny.co/images/816cd88683311a5fe384c98b64fbea02d21e45d83300ac9578869dc269a9abc6_1.jpg';
hiddenImage.style.width = "23px";
hiddenImage.style.height = "30px";
hiddenImage.style.position = "absolute";
hiddenImage.style.pointerEvents = "auto"; 

hiddenImage.style.top = `${Math.random()* 100}%`;
hiddenImage.style.left = `${Math.random()* 100}%`;

box.prepend(hiddenImage);
pageBody.prepend(box);

pageBody.addEventListener('click', () => console.log("You clicked!"));

if (hiddenImage) {
    console.log("Hidden image added");
    console.log(hiddenImage);
    hiddenImage.addEventListener('click', () => {
        const videoSrc = document.createElement('img');
        videoSrc.src = 'https://media4.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif';
    
        const newVidBox = document.createElement('p');
        newVidBox.style.textAlign = "center";

        newVidBox.prepend(videoSrc);
        
        videoSrc.style.pointerEvents = "auto"; 
        const largeHankBob = document.createElement('img');
        largeHankBob.src = 'https://imgb.ifunny.co/images/816cd88683311a5fe384c98b64fbea02d21e45d83300ac9578869dc269a9abc6_1.jpg';
        largeHankBob.style.width = "200px";
        largeHankBob.style.height = "250px";
        newVidBox.appendChild(largeHankBob);
        
        box.prepend(newVidBox);
        hiddenImage.style.visibility = 'hidden';

        videoSrc.style.position = "absolute";
        largeHankBob.style.position = "absolute";
        videoSrc.marginTop = '100px';

        videoSrc.style.zIndex = 1;
        largeHankBob.style.zIndex = 2;

        videoSrc.style.transform = 'translate(-50%, 100%)';
        largeHankBob.style.transform = 'translate(-50%, 140%)';

        const audio = new Audio();
        audio.src = chrome.runtime.getURL("assets/hank-audio.mp3");
        audio.autoplay = true;
        audio.play();
        
        setTimeout(() => {
            newVidBox.parentElement.removeChild(newVidBox);
            hiddenImage.style.visibility = 'visible';
            hiddenImage.style.top = `${Math.random()* 100}%`;
            hiddenImage.style.left = `${Math.random()* 100}%`;
        }, 1000)
        
    });
}