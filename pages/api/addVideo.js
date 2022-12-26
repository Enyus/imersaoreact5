import { supabase } from "../../assets/supabase";

export default async function addVideos(req, res) {
  const { title, url, thumb, playlist_id } = req.body;

  const { data, error } = await supabase
    .from("videos")
    .insert([
        {
        title,
        url,
        thumb,
        playlist_id,
        },
    ]);

  console.log(data);
  console.log(error);
  
  if (error) {
    console.log(error);
    return res.status(401).json({ error: error.message });
  }

  return res.status(200).json({ data });
}
