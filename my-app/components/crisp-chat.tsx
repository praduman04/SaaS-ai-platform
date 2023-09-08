"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5ac565c5-0e1b-4720-90c4-d775159d1602");
  }, []);

  return null;
};