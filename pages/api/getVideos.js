import {supabase} from '../../assets/supabase';
import fakeVideos from '../../fakeDB/fakeVideos';

export default async function getVideos(req, res) {
    const { user } = req.body;

    const { data, error } = await supabase
        .from('playlists')
        .select('playlist, videos(id, thumb, title, url)')
        .eq('user_id', user)

    if (error) {
        console.log(error);
        return res.status(401).json({ data: fakeVideos })
    }

    return res.status(200).json({ data })
}