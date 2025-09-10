import { products } from "../../../lib/products";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-medium">{product.price}</span>
          <Badge>{product.size}</Badge>
        </div>
        <div className="mt-8 space-y-2">
          <h2 className="font-semibold">Notes</h2>
          <ul className="text-sm">
            <li>
              <strong>Top:</strong> {product.notes.top}
            </li>
            <li>
              <strong>Heart:</strong> {product.notes.heart}
            </li>
            <li>
              <strong>Base:</strong> {product.notes.base}
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <Button>Add to cart</Button>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="rounded bg-muted p-2 text-center">
              Longevity: TBD
            </div>
            <div className="rounded bg-muted p-2 text-center">
              Sillage: TBD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
