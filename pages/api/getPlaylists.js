import {supabase} from '../../assets/supabase';

export default async function getPlaylists(req, res) {
    const { user } = req.body;

    const { data, error } = await supabase
        .from('playlists')
        .select('playlist')
        .eq('user_id', user)

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ data })
}