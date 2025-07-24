// app/components/TestimonialsSection.jsx
import 'bootstrap-icons/font/bootstrap-icons.css';

const testimonials = [
  {
    quote:
      'Outstanding service! They transformed my home into a smart hub. Installation was fast and flawless.',
    icon: 'bi-person-fill',
    name: 'Anjali Sinha',
    location: 'Mumbai',
    rating: 5,
  },
  {
    quote:
      'Excellent support even after installation. Highly recommend their smart home packages.',
    icon: 'bi-shield-lock-fill',
    name: 'Ravi Mehta',
    location: 'Delhi',
    rating: 4,
  },
  {
    quote:
      'Excellent support even after installation. Highly recommend their smart home packages.',
    icon: 'bi-house-door-fill',
    name: 'Pooja Verma',
    location: 'Bangalore',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-5 mb-4 bg-light" id="reviews">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="fw-bold fs-2 mb-1">Client Reviews</h2>
          <p className="text-muted">Trusted by customers all over India</p>
        </div>

        <div className="row g-4">
          {testimonials.map((review, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="text-muted">"{review.quote}"</p>
                  <div className="d-flex align-items-center mt-3">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className={`bi ${review.icon} fs-4`} />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold">{review.name}</h6>
                      <small className="text-muted">{review.location}</small>
                    </div>
                  </div>
                  <div className="mt-2 text-warning">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;




