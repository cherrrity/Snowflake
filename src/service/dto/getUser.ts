import React, { useEffect, useMemo, useState} from 'react';
import {iUser} from "../entity/User";
import { firebaseFireStore } from "../firebase-config";

export const getUser = (uid:string) => {
  useEffect(() => {
    const subscriber = firebaseFireStore
    .collection('User')
    .where('userId', "==", uid)
    .get()
    .then((querySnapshot: any) => {
        //console.log("[LOGIN INFO] ", querySnapshot);
    });

    console.log("[LOGIN INFO] ", subscriber);
    // Stop listening for updates when no longer requir
  }, [uid]);
}