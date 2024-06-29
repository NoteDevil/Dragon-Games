import * as React from "react";
import AdminNavBar from "../../components/adminnavbar";
import { CircleExclamation } from "../../components/icons";
import ErrorMessage from "../../components/ErrorMessage";
import { Spinner } from "@nextui-org/react";

export interface IAdminPanelChildren {
  children: React.ReactNode | React.ReactNode[];
  IsLoading: boolean;
}

function AdminPanel({
  children: content,
  IsLoading: IsLoading,
}: IAdminPanelChildren) {
  return (
    <div className="flex">
      <AdminNavBar />
      <div className="w-full max-h-lvh p-10">
        {content == null ? (
          <div className="bg-black/30 h-full rounded-lg p-10">
            <ErrorMessage msg="Choose a section" />
          </div>
        ) : (
          <div className="bg-black/30 h-full rounded-lg p-10">
            <div className="flex justify-center h-full align-center">
              {IsLoading && (
                <Spinner
                  size="lg"
                  labelColor="foreground"
                  color="default"
                  label="Получаем данные с сервера"
                />
              )}
              {!IsLoading && content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
