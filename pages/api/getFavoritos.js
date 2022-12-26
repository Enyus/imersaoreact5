import {supabase} from '../../assets/supabase';

export default async function getVideos(req, res) {
    const { user } = req.body;

    const { data, error } = await supabase
        .from('favoritos')
        .select('github')
        .eq('user_id', user)

    // console.log(data)

    if (error) {
        console.log(error);
        const fakeData = [ { github: 'peas' }, { github: 'omariosouto' } ]
        return res.status(401).json({ data: fakeData })
    }

    return res.status(200).json({ data })
}