import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <h2>About Paradise Nursery</h2>
      <p>
        Paradise Nursery is a boutique online plant shop dedicated to bringing
        the beauty of nature into homes and offices. We carefully curate a
        collection of low‑maintenance houseplants that thrive in indoor
        environments, offering expert care tips and sustainable packaging.
      </p>
      <p>
        Our mission is to make plant ownership accessible and enjoyable for
        everyone, from seasoned green thumbs to first‑time plant parents.
      </p>
      <img
        src="/images/about-us.jpg"
        alt="Paradise Nursery interior"
        className="about-us-image"
      />
    </section>
  );
}

export default AboutUs;