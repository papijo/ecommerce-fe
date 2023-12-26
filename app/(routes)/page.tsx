import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

export const revalidate = 0; //Prevent Caching

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
    categoryId: "",
    colorId: "",
    sizeId: "",
  });
  const billboard = await getBillboard("891c157f-833b-4edf-bb87-1525a070f129");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
