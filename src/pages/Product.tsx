import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (search?: string) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        from: '0',
        size: '20',
        ...(search && { q: search }),
      });

      const response = await fetch(
        `https://tasty.p.rapidapi.com/recipes/list??${queryParams}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
          },
        }
      );
      const result = await response.json();
      setProducts(result.results || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const onSearch = async () => {
    fetchData(search);
  };

  useEffect(() => {
    fetchData(search);
  }, []);

  return (
    <section className="py-12 w-full">
      <h2 className="text-3xl font-semibold leading-relaxed mb-6 text-center">
        Explore Tasty Recipes
      </h2>
      <div className="flex justify-center mb-8 gap-3">
        <Input
          type="search"
          placeholder="Search recipes..."
          className="w-full max-w-md"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <Button
          type="button"
          className
          variant="outline"
          onClick={() => onSearch()}>
          Search
        </Button>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description || 'No description available'}
              link={`https://tasty.co/recipe/${
                item.slug || item.name.replace(/\s+/g, '-')
              }`}
              image={
                item.thumbnail_url || 'https://via.placeholder.com/400x300'
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
