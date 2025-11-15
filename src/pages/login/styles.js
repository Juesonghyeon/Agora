import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f0ece3, #d9d6cc); /* 고대 건물 벽 느낌 */
  padding: 16px;
  box-sizing: border-box;
`;

export const card = css`
  background: rgba(255, 255, 245, 0.85); /* 밝은 돌 느낌 */
  padding: 48px 36px;
  border-radius: 16px;
  border: 2px solid rgba(200, 180, 150, 0.4);
  width: 380px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const logo = css`
  width: 80px;
  margin-bottom: 24px;
`;

export const tabContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  gap: 8px;
`;

export const tabButton = css`
  flex: 1;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #5a534f; /* 돌 느낌 */
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    color: #bfa76f; /* 금빛 강조 */
  }
`;

export const activeTab = css`
  border-color: #bfa76f;
  color: #bfa76f;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const inputField = css`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #c8b496;
  background-color: #fffaf0; /* 연한 돌 느낌 */
  color: #5a534f;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #a89f8e;
  }

  &:focus {
    border-color: #bfa76f;
    box-shadow: 0 0 0 2px rgba(191, 167, 111, 0.2);
    background-color: #fff8e6;
  }
`;

export const submitButton = css`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background-color: rgba(191, 167, 111, 0.9); /* 금속 느낌 */
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: rgba(170, 140, 80, 0.95);
  }
`;
