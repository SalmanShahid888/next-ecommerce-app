import prismadb from "@/lib/prismadb";
import { BillboadForm } from "./components/billboard-form";

const BillBoardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboadForm initalData={billboard} />
      </div>
    </div>
  );
};
export default BillBoardPage;
