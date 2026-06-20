import { Header, CardList, Footer } from "@/features/Extensions";

const ProductExtensionPage = () => {
  return (
    <div className="w-full min-h-screen p-5 flex items-center justify-start  mx-auto flex-col max-w-7xl ">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
};

export default ProductExtensionPage;
