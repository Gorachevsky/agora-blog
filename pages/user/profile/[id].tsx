import React from "react";
import prisma from "../../../lib/prisma";
import ProfileLayout from "../../../layout/profile";
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

  const profile = JSON.parse(
    JSON.stringify(
      await prisma.user.findUnique({
        where: { id: params?.id as string },
      })
    )
  );
  return {
    props: { profile },
  };
};

type Props = {
  profile: any;
};

const Profile: React.FC<Props> = (props) => {
  return (
    <ProfileLayout>
      <div className="flex flex-col justify-center items-center">
        {props.profile.name}
      </div>
    </ProfileLayout>
  );
};

export default Profile;
