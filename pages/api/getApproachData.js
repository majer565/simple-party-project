import { supabase } from "@/utils/initDb";

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from("form")
      .select("name, approach");
    if (error) {
      console.error("Error creating record:", error);
      res.status(500).json({ error: "Failed to create record" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
