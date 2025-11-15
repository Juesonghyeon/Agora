import { css } from "@emotion/react";

/* 전체 컨테이너 */
export const container = css`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a1a2e, #162447, #1f4068);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/agora-symbol.svg'); /* public 폴더 안 */
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px; /* 크게 */
    opacity: 0.1;           /* 조금 더 진하게 */
    pointer-events: none;
    z-index: 0;              /* 카드보다 뒤로 */
  }
`;

/* 가운데 카드 */
export const card = css`
  position: relative; /* 배경 이미지 위에 카드가 위에 뜨도록 */
  text-align: center;
  background: rgba(20, 20, 30, 0.85);
  backdrop-filter: blur(15px);
  padding: 48px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

/* 제목 */
export const title = css`
  color: #f5f5f5;
  font-size: 42px;
  font-weight: 700;
  font-family: 'Merriweather', serif;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;
`;

/* 부제목 */
export const subtitle = css`
  color: rgba(245, 245, 245, 0.9);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 36px;
  line-height: 1.5;
`;

/* 시작 버튼 */
export const startButton = css`
  width: 100%;
  padding: 16px;
  font-size: 18px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  color: #f5f5f5;
  background: rgba(50, 50, 70, 0.8);
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  transition: 0.25s;

  &:hover {
    background: rgba(70, 70, 100, 0.9);
  }

  & > .icon {
    width: 24px;
    height: 24px;
  }
`;
