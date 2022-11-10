function getYouTubeThumb (url) {
    const youTubeId = url.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
    const youTubeThumb = `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg`;
    return youTubeThumb;
};

export default getYouTubeThumb;