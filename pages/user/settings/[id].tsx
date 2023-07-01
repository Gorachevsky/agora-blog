import React from "react";
import prisma from "../../../lib/prisma";
import SettingsLayout from "../../../layout/settings";
import { getSession } from "next-auth/react";

export async function getServerSideProps({req, params} : {req: any; params: any;}) {
  const session: any = await getSession({req});

  if(!session || params?.id !== session?.user?.id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

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
