import { supabase } from "@/utils/initDb";

export default async function handler(req, res) {
  try {
    const { id, name } = req.body;
    const status = "ZAJĘTE";
    const { data, error } = await supabase
      .from("achom")
      .update({ name, status })
      .eq("id", id);
    if (error) {
      console.error("Error creating record:", error);
      res.status(500).json({ error: "Failed to create record" });
    } else {
      res.status(200).json({ message: "Record updated successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
