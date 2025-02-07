import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { SignInButton } from "@clerk/nextjs";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
  