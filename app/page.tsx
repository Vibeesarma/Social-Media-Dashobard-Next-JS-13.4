import Image from "next/image";
import Header from "@/components/Header";
import CardSection from "@/components/CardSection";
import CardBelowSextion from "@/components/CardBelowSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CardSection />
        <CardBelowSextion />
      </main>
    </>
  );
}
