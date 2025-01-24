import MainCard from "@/ui/main-card";
import Search from "@/ui/search";

export default function Page() {
  return (
    <p>
      <MainCard>
        <Search placeholder="Buscar producto..." />
      </MainCard>
    </p>
  );
}
