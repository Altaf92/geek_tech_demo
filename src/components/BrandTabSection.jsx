'use client';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import Link from 'next/link';

const BrandTabSection = () => {
  // Get first 8 products from ProductList
  const products = Object.values(ProductList).slice(0, 8);

  return (
    <section className="section product-slider tab-slider-product">
      <div className="container-fluid">
        <div className="tabs-listing">
          <div className="">
            <div className="section-header">
              <h2 className="text-start">Antivirus</h2>
              <p className="text-start">Browse the huge variety of our best seller</p>
            </div>
          </div>

          <div className="tab-content" id="productTabsContent">
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="grid-products grid-view-items">
                <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                  {products.length > 0 ? (
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <p className="text-center w-100 py-4">No products available.</p>
                  )}
                </div>

                <div className="view-collection text-center mt-4 mt-md-5">
                  <Link href="/products" className="btn btn-secondary btn-lg">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTabSection;
