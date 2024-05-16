import ArticleForm from "@/components/ArticleForm";
import Container from "@/components/Container";

const Create = () => {
  return (
    <article className="py-20">
      <Container className="max-w-[800px]">
        <ArticleForm />
      </Container>
    </article>
  );
};

export default Create;
