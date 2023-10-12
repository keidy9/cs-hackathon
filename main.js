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
hiddenImage.setAttribute('id', 'shrek')
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
        audio.src = 'https://www.myinstants.com/en/instant/hank-hill-bwah-59976/';
        audio.autoplay = true;
        audio.play();
        // audio.addEventListener("load", function() {
        //     audio.play;
        // })
        

        // const audio = new Audio('https://www.myinstants.com/en/instant/hank-hill-bwah-59976/');
        // audio.play();

        // const winAudio = document.createElement('audio');
        // const audioSrc = document.createElement('source');
        // audioSrc.src = 'https://www.myinstants.com/en/instant/hank-hill-bwah-59976/?utm_source=copy&utm_medium=share';
        // winAudio.prepend(audioSrc);
        // winAudio.autoplay = true;
        // //winAudio.setAttribute('autoplay', true);
        // box.prepend(winAudio);

        setTimeout(() => {
            newVidBox.parentElement.removeChild(newVidBox);
            hiddenImage.style.visibility = 'visible';
            hiddenImage.style.top = `${Math.random()* 100}%`;
            hiddenImage.style.left = `${Math.random()* 100}%`;
        }, 5000)
        
    });
}


// SEMI-WORKING CODE:
// const pageBody = document.querySelector('body');
// const box = document.createElement('div');
// box.style.height = '95%';
// box.style.width = '95%';
// box.style.position = 'fixed';
// box.style.top = '0';
// box.style.zIndex= '999';
// box.style.pointerEvents = 'none';

// const hiddenImage = document.createElement('img');
// hiddenImage.setAttribute('id', 'shrek')
// hiddenImage.src = 'https://i.kym-cdn.com/entries/icons/original/000/031/320/poster_840x830_f8f8f8-pad_750x1000_f8f8f8.jpg';
// hiddenImage.style.width = "25px";
// hiddenImage.style.position = "absolute";
// hiddenImage.style.pointerEvents = "auto"; 

// hiddenImage.style.top = `${Math.random()* 100}%`;
// hiddenImage.style.left = `${Math.random()* 100}%`;


// box.prepend(hiddenImage);
// // box.style.backgroundColor = "blue";
// pageBody.prepend(box);

// pageBody.addEventListener('click', () => console.log("You clicked!"));

// if (hiddenImage) {
//     console.log("Hidden image added");
//     console.log(hiddenImage);
//     hiddenImage.addEventListener('click', () => {
//         console.log("You found Shrek!");
//         const video = document.createElement('video');
//         video.src = 'https://youtu.be/QGJuMBdaqIw?si=iNi64lwnTXVIjT4y&t=60&autoplay=1';
//         box.prepend(video);
//     });
// }

















// SHREK CODE -> DO NOT DELETE!

// const img = document.querySelectorAll('img');
// for (let image in img) {
//     console.log(img[image]); 
//     img[image].src = '';
//     img[image].srcset = 'https://i.kym-cdn.com/entries/icons/original/000/031/320/poster_840x830_f8f8f8-pad_750x1000_f8f8f8.jpg';
//     console.log(img[image]); 


// }
// console.log(img);

