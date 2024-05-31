import backgroundImage from "../../public/background.jpeg";

export default function Home() {
  const styles = {
    main: {
      backgroundImage: `url(${backgroundImage.src})`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "6rem",
      height: "100vh",
      border: "1px solid black",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    Top: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "60px",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // 设置背景颜色为半透明
      color: "white",
      backdropFilter: "blur(10px)", // 应用毛玻璃效果
      WebkitBackdropFilter: "blur(10px)", // 适用于Safari
      zIndex: 10, // 确保元素在顶层显示
    },
  }
  return (<>
      <div style={styles.Top}>Top</div>
      <main style={styles.main}>
        <h1>Home Page</h1>
        <button><a href="/Test">Hello</a></button>
      </main>
    </>
  );
}
