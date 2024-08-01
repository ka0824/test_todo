import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

// Todo App이 제대로 렌더링 되는지 확인
test("renders todo app", () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // 화면에 Todo App이라는 텍스트가 있는지 확인
  const headerElement = screen.getByText(/todo app/i);

  // 헤더 요소가 문서가 있는지 확인, 이미 텍스트가 화면에 렌더링 되어 있기에 언제나 참이 됨.
  // 기술적으로는 불필요하지만 명시적인 확인을 위해 추가
  expect(headerElement).toBeInTheDocument();
});

// 새로운 Todo를 추가하는 지 확인
test("adds a new todo", () => {
  render(<App />);

  // placeholder가 "Enter a todo"인 input 요소를 찾음
  const inputElement = screen.getByPlaceholderText(/enter a todo/i);

  // "Add Todo" 버튼을 찾음
  const addButtonElement = screen.getByText(/add todo/i);

  // input 요소에 "Learn React Testing"을 입력
  fireEvent.change(inputElement, { target: { value: "Learn React Testing" } });

  // "Add Todo" 버튼을 클릭
  fireEvent.click(addButtonElement);

  // 화면에 "Learn React Testing"이라는 텍스트가 있는지 확인
  const todoElement = screen.getByText(/learn react testing/i);
  expect(todoElement).toBeInTheDocument();
});
