const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Diplo  Color Blind feat Lil Xan',
        'name': 'Diplo  Color Blind feat Lil Xan.mp4',
        'duration': '3:02',
    },
    {
        'id': 'a2',
        'title': 'Mike Posner  I Took A Pill In Ibiza Seeb',
        'name': 'Mike Posner  I Took A Pill In Ibiza Seeb.mp4',
        'duration': '3:56',
    },
    {
        'id': 'a3',
        'title': 'Amour plastique',
        'name': 'Amour plastique.mp4',
        'duration': '3:53',
    },

    {
        'id': 'a4',
        'title': 'Calle 13  La Vuelta al Mundo',
        'name': 'Calle 13  La Vuelta al Mundo.mp4',
        'duration': '4:29',
    },
    {
        'id': 'a5',
        'title': 'Oliver Tree  Alien Boy Official',
        'name': 'Oliver Tree  Alien Boy Official.mp4',
        'duration': '2:43',
    },
    {
        'id': 'a6',
        'title': 'BoyWithUke  Sick of U Lyric',
        'name': 'BoyWithUke  Sick of U Lyric.mp4',
        'duration': '2:56',
    },
    {
        'id': 'a7',
        'title': 'DJ Snake  Middle ft Bipolar Sunshine',
        'name': 'DJ Snake  Middle ft Bipolar Sunshine.mp4',
        'duration': '5:00',
    },

    {
        'id': 'a8',
        'title': 'BAD BUNNY x JHAY CORTEZ  DÁKITI',
        'name': 'BAD BUNNY x JHAY CORTEZ  DÁKITI.mp4',
        'duration': '3:33',
    },
    {
        'id': 'a9',
        'title': 'Alessia Cara - Here (Lucian Remix)',
        'name': 'Alessia Cara - Here (Lucian Remix).mp4',
        'duration': '3:27',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
