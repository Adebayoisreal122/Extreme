"use client"




import { useParams } from 'next/navigation';




export default function ProductDetailsLayout({ children }) {
  const { product } = useParams();

  return (
    <div>
      <header style={{ padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <h1>Details for: {product}</h1>
      </header>
      <main>{children}</main>
      <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
