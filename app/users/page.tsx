import { createClient } from "@/utils/supabase/server";

export default async function UsersJson() {
  const supabase = createClient();
  const { data: users } = await (await supabase).from("users").select();

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
