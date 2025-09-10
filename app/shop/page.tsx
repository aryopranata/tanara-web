import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { products } from "../../lib/products";

export default function ShopPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <Card key={p.slug} className="overflow-hidden">
          <CardHeader className="p-0">
            {/* Using plain img tags for simplicity */}
            <img
              src={p.image}
              alt={p.name}
              className="h-60 w-full object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              <Badge>{p.badge}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.price}</p>
          </CardContent>
          <CardFooter className="flex gap-2 p-4 pt-0">
            <Button className="flex-1">Add</Button>
            <Link href={`/product/${p.slug}`} className="flex-1">
              <Button variant="outline" className="w-full">
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
