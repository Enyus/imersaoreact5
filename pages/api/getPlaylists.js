import { supabase } from "../../assets/supabase";

export default async function getPlaylists(req, res) {
  const { user } = req.body;

  const { data, error } = await supabase
    .from("playlists")
    .select("id, playlist")
    .eq("user_id", user);

  if (error) {
    console.log(error);
    const fakePlaylists = [
      { id: 1, playlist: "jogos" },
      { id: 2, playlist: "front-end" },
      { id: 3, playlist: "back-end" },
    ];
    return res.status(401).json({ data: fakePlaylists });
  }

  return res.status(200).json({ data });
}
