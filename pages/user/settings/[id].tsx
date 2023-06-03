import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../../../lib/prisma";
import SettingsLayout from "../../../layout/settings";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const settings = JSON.parse(
    JSON.stringify(
      await prisma.user.findUnique({
        where: { id: params?.id as string },
      })
    )
  );
  return {
    props: { settings },
  };
};

type Props = {
  settings: any;
};

const Settings: React.FC<Props> = (props) => {
  return (
    <SettingsLayout>
      <div className="flex flex-col justify-center items-center">
        {props.settings.name}
      </div>
    </SettingsLayout>
  );
};

export default Settings;
