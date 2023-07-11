const video1= document.querySelector('#video1')
const video2= document.querySelector('#video2')

let video1Ready = false
let video2Ready = false

console.log(video2, video1)




function reproducirVideoCompleto(videoElement) {
    videoElement.addEventListener('canplaythrough', function () {
        videoElement.play();
    });

    videoElement.addEventListener('error', function () {
        console.log('Error al cargar el video');
    });

    videoElement.load();
}

video1.addEventListener('progress', function () {
    var percentLoaded = Math.round((video1.buffered.end(0) / video1.duration) * 100);
    console.log('Porcentaje de carga: ' + percentLoaded + '%');
});


const playIfIsBuffer = ()=>{
    if ((video1.buffered.length == 1) && (video2.buffered.length == 1 )){
        reproducirVideoCompleto(video1)
        reproducirVideoCompleto(video2)

    } else{
        console.log('No Bffer')
        setTimeout(() => {
            playIfIsBuffer()
            
        }, 500);
    }
}

console.log(video1.buffered.length)


// const playVideo =async ()=>{
    
//     await video1.play()
//     await video2.play()

// }


// const videosAreReady = ()=>{
//     if (video1Ready === true && video2Ready === true){
//         playVideo()
//     }
// }

// const testVideoState = ()=>{

//     video1.addEventListener("canplaythrough", (event) => {
//         video1Ready = true;
//         if (video1Ready === true && video2Ready === true ){
//             console.log('Los videos estan listos') 
//         }else{console.log('no')}
//     });
    
//     video2.addEventListener("canplaythrough", (event) => {
//         video2Ready = true;
//         if (video1Ready === true && video2Ready === true) {
//             console.log('Los videos estan listos')
//         } else { console.log('no') }
//     });
// }



// const videoTest = ()=>{
//     if ((video1Ready===true) && (video2Ready===true)) {
//         playVideo()
//     }else{
//         setTimeout(() => {
//             testVideoState()
//             console.log('no estan liotos')
//             console.log(video1Ready)
//             console.log(video2Ready)
//             videoTest()
            
//         }, 500);
//     }
// }




document.addEventListener('DOMContentLoaded', function () {
    // reproducirVideos();
    playIfIsBuffer();
});



// if (
//     video1.addEventListener('canplaythrough', () => { console.log('video1 ready') }) 
//     &&
//     video2.addEventListener('canplaythrough', () => { console.log('video2 ready') }) 
//     ) {
//     console.log('los videos están')
// }else{
//     console.log('No estan listos')
// }

