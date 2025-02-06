import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { SignInButton } from "@clerk/nextjs";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
  