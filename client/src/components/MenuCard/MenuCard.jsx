import React from 'react';

export default function MenuCard({ individual }) {
  const isAvailable = individual.Available !== false;

  return (
    <div
      className="card border-0 m-3 menuItemCard"
      style={{
        width: '20rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={individual.DishImageURL}
          alt={individual.DishName}
          className="img-fluid"
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />

        <span
          className="badge bg-danger position-absolute top-0 start-0 m-2 px-3 py-1"
          style={{ fontSize: '0.75rem', borderRadius: '0.5rem' }}
        >
          {individual.DishType}
        </span>

        <span
          className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-3 py-1"
          style={{
            fontSize: '0.75rem',
            borderRadius: '0.5rem',
            fontWeight: '500',
          }}
        >
          ⭐ {individual.DishRating}
        </span>
      </div>

      <div className="d-flex justify-content-between align-items-center px-3 pt-3">
        <span className="fw-semibold text-success" style={{ fontSize: '1.1rem' }}>
          ₹{individual.DishPrice}
        </span>
        <span
          className={`badge ${
            isAvailable ? 'bg-success' : 'bg-danger'
          } text-light px-3 py-1`}
          style={{ fontSize: '0.75rem', borderRadius: '0.5rem' }}
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </span>
      </div>

      <div className="card-body px-4 pt-2 pb-3">
        <h5 className="text-center fw-bold mb-2">{individual.DishName}</h5>
        <p
          className="text-muted text-center mb-3"
          style={{ fontSize: '0.9rem', minHeight: '40px' }}
        >
          {individual.DishDescription}
        </p>

        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-outline-warning w-50 rounded-pill fw-medium">
            Add to Cart
          </button>
          <button className="btn btn-primary w-50 rounded-pill fw-medium">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
