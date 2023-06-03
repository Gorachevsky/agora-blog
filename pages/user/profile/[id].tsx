import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../../../lib/prisma";
import ProfileLayout from "../../../layout/profile";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
