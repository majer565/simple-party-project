import { supabase } from "@/utils/initDb";

export default async function handler(req, res) {
  const { name, text } = req.body;
  try {
    const { error } = await supabase
      .from("food")
      .insert([{ name, text }]);

    if (error) {
      console.error("Error creating record:", error);
      res.status(500).json({ error: "Failed to create record" });
    } else {
      res.status(200).json({ message: "Record created successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}