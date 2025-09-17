import { useEffect, useState } from "react";

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://falcon-backend-ca8t.onrender.com/api/inquiries")
      .then(res => res.json())
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading inquiries...</p>;

  return (
    <section className="p-6">
      <h2 className="text-2xl mb-4">All Inquiries</h2>
      {inquiries.length === 0 && <p>No inquiries yet.</p>}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map(i => (
            <tr key={i._id}>
              <td className="border p-2">{i.name}</td>
              <td className="border p-2">{i.email}</td>
              <td className="border p-2">{i.phone}</td>
              <td className="border p-2">{i.type}</td>
              <td className="border p-2">{i.message}</td>
              <td className="border p-2">{new Date(i.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
