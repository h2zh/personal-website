const Layout = (props: any) => {
  // put other elements inside this one
  return (
    <div className="h-screen mt-12">
      <div className="max-w-lg m-auto px-8">{props.children}</div>
    </div>
  );
};

export default Layout;
