import NavBar from "./NavBar";

export default function Layout({ children }) {
  // children은 react.js가 제공하는 prop
  // 하나의 component를 또 다른 component에 넣을 때 사용
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
