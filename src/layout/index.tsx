// import SimpleMobileSidebar from "./MobileSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>{children}</>
    // {/* <Box component="main" sx={Style.MainLayout.MainBox}> */}
    // {/* {isMobile ? <SimpleMobileSidebar /> : <Sidebar />} */}
    // {/* </Box> */}
  );
}
