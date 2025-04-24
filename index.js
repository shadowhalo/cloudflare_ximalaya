export default {
  async fetch(request, env, ctx) {
    const res = await fetch("https://www.ximalaya.com/revision/album/getTracksList?albumId=338590&pageNum=1&pageSize=1", {
      headers: {
        "Cookie": "1&_token=129975056&4A3C7290240NBC74A126640F642472B960EDD92D962F08D94B552079ADAB15B85A521D9F5D88229M59FB2CD53C84906_; 1_l_flag=129975056&4A3C7290240NBC74A126640F642472B960EDD92D962F08D94B552079ADAB15B85A521D9F5D88229M59FB2CD53C84906__2025-04-1413:45:10; xm-page-viewid=ximalaya-web; Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070=1744595564; Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070=1745477894; cmci9xde=U2FsdGVkX1/Nvbji0aRjMHQTr+RfycF19eM2LbkD68poSNZTynJbaSlDlb41ohaobHucJPiAgEiYzS8+Mf1LAQ==; pmck9xge=U2FsdGVkX19tshkWLhKXBzyP9ueCMZl/ogPIMVL85zk=; assva6=U2FsdGVkX19kTDlpua+/A4hUdNnSwPBzNcsyjKscHNk=; assva5=U2FsdGVkX1+VI2usOnS0pifJ28DfD395/8X57HPuc1fA4uNcQMXfan6GS+b31O7aXJEKBhA1YVzRUEu7i5kNqw==; vmce9xdq=U2FsdGVkX1+exY1sQTK1lR7jxep8aJ7HHZhcOPVFRQeyQVgbfa4xXXfif7i1lBJKpW9A/l6AdwsOtYiaKV8qYIL6Um0+YJN6YXiSt2sTNa4x2yu8smWhepthFezxqYKptoNwHNdM/f4gupJ04C0gOaS/gslPVCNeJZlbs45bK/8=; web_login=1745478740470,
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://www.ximalaya.com/",
      },
    });

    const json = await res.json();
    const track = json.data.tracksAudioPlay[0];

    return new Response(JSON.stringify({
      title: track.title,
      trackId: track.trackId,
      breakSecond: track.breakSecond
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};