import { iUser } from "./entity/User";
import { firebaseAuth, firebaseFireStore } from "./firebase-config";

export let userInfo = {userId:"", nickname:"", email:"", avatar:"", lastCommitedDate:new Date(), tag:[] };

// 이메일 로그인
export const EmailLoginRequset = (email: string, pwd: string) => {
    firebaseAuth.signInWithEmailAndPassword(email, pwd)
    ?.then((res) => {
      const uid = res.user?.uid;
      const token = res.user?.getIdToken;
      console.log("[LOGIN SUCCESS]", uid);
      getUserInfo(uid);
  
    })
    .catch((err) => {console.log("[LOGIN FAIL]");});
  }

// 깃허브 로그인
export const githubRequest = () => {
  let personalAccessCode = "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";
  let client_id = "73356f07e1b7b5381ef0";
  let scope = "Snowflake,cherrrity";
  let urlString = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${scope}`;
  let getTokenUrl = "https://github.com/login/oauth/access_token";
}

// 로그아웃
export const Logout = () =>{
  firebaseAuth.signOut();
}

// 로그인시 유저 정보 업데이트
export const getUserInfo = (uid: any) =>{
  firebaseFireStore
  .collection('User')
  .where('userId', "==", uid)
  .get()
  .then(querySnapshot => { 
      querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          const {userId, email, nickname, avatar, tag} = data;
          const lastCommitedDate = data.lastCommitedDate.toDate();
          userInfo = {userId, email, nickname, lastCommitedDate, avatar, tag} as iUser;
      });
  });
}