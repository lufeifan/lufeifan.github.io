
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    // mini: true,
    audio: [
      {
        cover: 'http://pwmvr65mz.bkt.clouddn.com/201908231429_860.png',
        name: "PDD洪荒之力",
        artist: '徐梦圆',
        url: 'http://up.mcyt.net/?down/39868.mp3',
      },
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
