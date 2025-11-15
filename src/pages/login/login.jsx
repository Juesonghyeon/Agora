/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

const logoPath = "/천칭.png"; // public 폴더 기준

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div css={s.container}>
      <div css={s.card}>
        <img src={logoPath} alt="Balance" css={s.logo} />
        <div css={s.tabContainer}>
          <button
            css={[s.tabButton, isLogin && s.activeTab]}
            onClick={() => setIsLogin(true)}
          >
            로그인
          </button>
          <button
            css={[s.tabButton, !isLogin && s.activeTab]}
            onClick={() => setIsLogin(false)}
          >
            회원가입
          </button>
        </div>
        <form css={s.form}>
          <input type="email" placeholder="이메일" css={s.inputField} />
          <input type="password" placeholder="비밀번호" css={s.inputField} />
          {!isLogin && (
            <input
              type="password"
              placeholder="비밀번호 확인"
              css={s.inputField}
            />
          )}
          <button type="submit" css={s.submitButton}>
            {isLogin ? "로그인" : "회원가입"}
          </button>
        </form>
      </div>
    </div>
  );
}
