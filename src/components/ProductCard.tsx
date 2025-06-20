import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';

export default function ProductCard({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: string;
}) {
  return (
    <Card className="p-0 flex flex-col justify-between">
      <CardContent className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
        <div className="px-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{name}</h3>
          <p className="text-sm mb-2 line-clamp-3 text-[#6d6d6d]">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-4">
        <Button
          asChild
          className="bg-[#fbd560] text-[#090909] py-4 px-6 rounded-lg font-semibold text-sm hover:bg-[#fbd560]/75 cursor-pointer">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
