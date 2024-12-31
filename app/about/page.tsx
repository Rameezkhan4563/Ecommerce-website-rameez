export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to Store, your premier destination for high-quality electronics and accessories.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p className="mb-6">
          Founded with a passion for technology and innovation, Store has been serving customers
          with premium products since 2020. We believe in offering only the highest quality
          items that enhance your daily life.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to provide our customers with carefully curated products that combine
          quality, innovation, and style. We strive to make premium technology accessible to
          everyone while delivering exceptional customer service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quality Commitment</h2>
        <p className="mb-6">
          Every product in our store is carefully selected and tested to ensure it meets our
          high standards. We work directly with trusted manufacturers and brands to bring you
          the best possible products.
        </p>
      </div>
    </div>
  );
}