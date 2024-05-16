import Articles from "@/components/Articles";
import Categories from "@/components/Categories";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Categories />
      <Container className="max-w-[800px]">
        <Articles />
      </Container>
    </>
  );
}
