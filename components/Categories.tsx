import Link from "next/link";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Container from "./Container";
import { CATEGORIES } from "@/const";

const Categories = () => {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-xl font-medium mb-4 text-center text-zinc-800 dark:text-zinc-200">Explore topics</h2>
        <Carousel
          opts={{
            slidesToScroll: 3,
          }}
        >
          <CarouselContent className="ml-0 flex gap-2">
            {CATEGORIES.map((category, i) => (
              <Link
                href={`/${category.toLowerCase()}`}
                key={i}
                className="rounded-full text-sm md:text-[15px] px-2 md:px-4 py-1.5 font-normal border border-zinc-300 dark:border-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-600 dark:hover:bg-zinc-600 dark:bg-zinc-700 bg-white hover:text-zinc-800 hover:bg-zinc-100 transition-all whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-0 arrow arrow-left rounded-none -left-5" />
          <CarouselNext className="border-0 arrow arrow-right rounded-none -right-5" />
        </Carousel>
      </Container>
    </section>
  );
};

export default Categories;
