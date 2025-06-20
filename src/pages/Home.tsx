import { Card, CardContent } from '@/components/ui/card';
import photo from '../assets/photo.png';

export default function Home() {
  return (
    <>
      <section className="py-12">
        <Card className=" bg-[#fbd560] mx-auto relative overflow-hidden rounded-xl">
          <CardContent className="p-5 sm:p-10 text-lg relative">
            <div className="w-full sm:w-1/2 lg:w-5/12">
              <h2 className="text-4xl font-semibold text-center sm:text-start mb-4 lg:mb-0 lg:leading-relaxed">
                Welcome to TastyApp
              </h2>
              <p className="text-xl text-yellow-700 font-semibold text-center sm:text-start lg:leading-relaxed">
                Find and explore delicious recipes from around the world. Search
                by ingredientor dish name and start cooking today!
              </p>
            </div>

            <div className="p-5 hidden sm:inline absolute top-1/2 -translate-y-1/2 right-6 lg:right-12 rounded-full border-yellow-500 border-2">
              <div className="p-5 rounded-full border-yellow-500 border-2">
                <img
                  src={photo}
                  alt="menu"
                  className=" max-w-[250px]  h-auto shadow-lg rounded-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="py-10 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold leading-relaxed mb-4 underline">
            What is TastyApp?
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            "TastyApp is a recipe search and discovery web application. You can
            explore a wide variety of dishes, from breakfast to dinner, based on
            your taste and mood.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Just type what you’re craving for and we’ll show you recipes with
            images, descriptions, and links to full cooking instructions!"
          </p>
        </div>
      </section>
    </>
  );
}
