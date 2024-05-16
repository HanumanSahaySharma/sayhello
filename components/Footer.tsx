import Container from "./Container";
const Footer = () => {
  return (
    <footer className="w-full bg-white mt-10 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200">
      <Container className="py-4">
        <p className="text-center">&copy; {new Date().getFullYear()} say, hello. All right serverd. </p>
      </Container>
    </footer>
  );
};

export default Footer;
