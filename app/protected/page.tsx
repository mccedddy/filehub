import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Users from "../users/page";
import TableItem from "../../components/table-item";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex mx-auto w-full md:w-5/6 lg:w-4/6 flex flex-col overflow-auto">
      <div className="w-full">
        <div className="flex justify-between items-center my-2">
          <h1 className="text-2xl py-2">My Files</h1>
          <button
            type="button"
            className="h-10 px-4 border hover:cursor-pointer bg-primary text-background font-bold rounded"
          >
            Upload
          </button>
        </div>
        <table className="w-full text-xs md:text-sm border">
          <thead className="border text-left bg-background">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-2">Type</th>
              <th className="py-2 px-2">Size</th>
              <th className="py-2 px-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <TableItem
              id={1}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={2}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={3}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={4}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={5}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={6}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
            <TableItem
              id={7}
              name="Example.jpg"
              type="JPEG"
              size="32 Kb"
              date="24/12/2024"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
