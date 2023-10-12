document.addEventListener('loaded', () => {




    const pageBody = document.querySelector('body');
    const box = document.createElement('div');
    box.style.height = '95%';
    box.style.width = '95%';
    box.style.position = 'fixed';
    box.style.top = '0';
    box.style.zIndex= '999';
box.style.pointerEvents = 'none';

const hiddenImage = document.createElement('img');
hiddenImage.setAttribute('id', 'shrek')
hiddenImage.src = 'https://i.kym-cdn.com/entries/icons/original/000/031/320/poster_840x830_f8f8f8-pad_750x1000_f8f8f8.jpg';
hiddenImage.style.width = "25px";
hiddenImage.style.position = "absolute";
hiddenImage.style.pointerEvents = "auto"; 

hiddenImage.style.top = `${Math.random()* 100}%`;
hiddenImage.style.left = `${Math.random()* 100}%`;


box.prepend(hiddenImage);
// box.style.backgroundColor = "blue";
pageBody.prepend(box);

pageBody.addEventListener('click', () => console.log("You clicked!"));

if (hiddenImage) {
    console.log("Hidden image added");
    console.log(hiddenImage);
    hiddenImage.addEventListener('click', () => {
        console.log("You found Shrek!");
        const video = document.createElement('video');
        video.src = 'https://youtu.be/QGJuMBdaqIw?si=iNi64lwnTXVIjT4y&t=60&autoplay=1';
        box.prepend(video);
    });
}


})
























// SHREK CODE -> DO NOT DELETE!

// const img = document.querySelectorAll('img');
// for (let image in img) {
//     console.log(img[image]); 
//     img[image].src = '';
//     img[image].srcset = 'https://i.kym-cdn.com/entries/icons/original/000/031/320/poster_840x830_f8f8f8-pad_750x1000_f8f8f8.jpg';
//     console.log(img[image]); 


// }
// console.log(img);

