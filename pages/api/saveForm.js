import { supabase } from "@/utils/initDb";

export default async function handler(req, res) {
  const { name, presence, sausages, approach, accomodation } = req.body;
  try {
    const { data, error } = await supabase
      .from("form")
      .insert([{ name, presence, sausages, approach, accomodation }]);

    if (error) {
      console.error("Error creating record:", error);
      res.status(500).json({ error: "Failed to create record" });
    } else {
      console.log("Record created successfully:", data);
      res.status(200).json({ message: "Record created successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
