import Image from "next/image";
import Header from "@/components/Header";
import CardSection from "@/components/CardSection";
import CardBelowSextion from "@/components/CardBelowSection";
import ColorThemeProvider from "@/components/ColorThemeProvider";

export default function Home() {
  return (
    <ColorThemeProvider>
      <Header />
      <main>
        <CardSection />
        <CardBelowSextion />
      </main>
    </ColorThemeProvider>
  );
}
