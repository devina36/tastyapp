import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">About TastyApp</h2>
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <p className="mb-4">
            TastyApp helps you discover exciting and tasty recipes using the
            Tasty API. From quick snacks to full meals, we’ve got something for
            everyone.
          </p>
          <p>
            Contact us at:{' '}
            <a
              href="mailto:support@tastyapp.com"
              className="text-blue-600 underline">
              support@tastyapp.com
            </a>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
