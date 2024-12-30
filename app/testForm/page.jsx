"use client";
import React from "react";
import FormNew from "@components/FormNew";
import { useFormContext } from "@app/context";

const Page = () => {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  return (
    <div>
      {isFormOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 z-50">
            <FormNew
              title="CONTACT US"
              text1="Please give your personal details"
              text2="Please give your address details"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
