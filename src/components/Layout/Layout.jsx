export const Layout = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
