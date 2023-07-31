import { FC } from "react";
import { BillboardClient } from "./components/client";
interface BillBoardsPageProps {}

const BillBoardsPage: FC<BillBoardsPageProps> = ({}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-2 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillBoardsPage;
