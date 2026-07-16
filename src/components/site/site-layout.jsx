import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import FloatingContact from "./floatingcontact";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingContact />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export { SiteLayout };
