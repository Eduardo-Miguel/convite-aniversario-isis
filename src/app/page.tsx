import Image from "next/image";
import ComponentePrincipal from "./ComponentePrincipal";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#fff3f4", color: "#e6a0bc" }}
      className="flex justify-center items-center h-dvh text-white"
    >
      <ComponentePrincipal />
    </main>
  );
}
