import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Users from "../users/page";

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
            <tr className="hover:bg-background hover:cursor-pointer border">
              <td className="max-w-80 py-2 px-4 text-nowrap overflow-hidden">
                Example.jpg
              </td>
              <td className="w-6 py-2 px-2 text-nowrap">JPEG</td>
              <td className="w-6 py-2 px-2 text-nowrap">32 Kb</td>
              <td className="w-14 py-2 pl-2 pr-4 text-nowrap">24/12/2024</td>
            </tr>
            <tr className="hover:bg-background hover:cursor-pointer border">
              <td className="max-w-80 py-2 px-4 text-nowrap overflow-hidden">
                Example.jpg
              </td>
              <td className="w-6 py-2 px-2 text-nowrap">JPEG</td>
              <td className="w-6 py-2 px-2 text-nowrap">32 Kb</td>
              <td className="w-14 py-2 pl-2 pr-4 text-nowrap">24/12/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
