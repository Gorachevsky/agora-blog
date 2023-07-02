import React from "react";
import Button from "./nav_button";
const Container: React.FC<{ props: any }> = ({ props }) => {
  return props?.width > 1024 ? (
    <div className="flex mt-6">
      <Button props={{ title: "Resume", path: "/resume" }} />
      <Button props={{ title: "Docs", path: "/docs" }} />
      <Button props={{ title: "Blog", path: "/blog" }} />
      <Button props={{ title: "Contact", path: "/contact" }} />
    </div>
  ) : (
    <div></div>
  );
};

export default Container;
