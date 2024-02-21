b1 = document.getElementsByClassName('yes')[0]


let a = new Date();
  let h = a.getHours();
  let AorP = h >= 12 ? "PM" : "AM";
  let formatted_hour = h % 12 || 12;


const forsiri = () => {
    let audio = new Audio('favs.mp3');
    document.body.innerHTML = '';
    let img = document.createElement('img');
    // const emojis = ['', '', '', ''];
    //     function addRandomEmoji() {
    //         const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    //         const emojiElement = document.createElement('span');
    //         emojiElement.className = 'emoji';
    //         emojiElement.innerHTML = randomEmoji;

    //         document.body.appendChild(emojiElement);
    //     }
    //     setInterval(addRandomEmoji, 2000);
    
    audio.play();

    img.src = 'lopic.jpg';
    img.width = 1553;
    img.height = window.innerHeight;
    document.body.appendChild(img);
    video.play();
    

    // setInterval(() => {
    //     let audio = new Audio('caki.mp3');
    //     audio.play();
    // }, 3000);
}


const anyone = ()=>{
    let audio = new Audio('fu.mp3');
    audio.play();
    document.body.innerHTML = '';
    var img = document.createElement('img');
    img.src = 'zbi.jpg';
    img.width = 1530
    img.height = 796
    document.body.appendChild(img);

}
