import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/bakery";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment — The Sweet Spot" },
      {
        name: "description",
        content: "Banking details and secure payment information for The Sweet Spot orders.",
      },
      { property: "og:title", content: "Payment — The Sweet Spot" },
      {
        property: "og:description",
        content: "Pay easily via EFT and send proof of payment on WhatsApp.",
      },
    ],
  }),
  component: PaymentPage,
});

const bankRows = [
  { label: "Bank Name", val: "[Placeholder]" },
  { label: "Account Holder", val: "[Placeholder]" },
  { label: "Account Number", val: "[Placeholder]" },
  { label: "Branch Code", val: "[Placeholder]" },
  { label: "Reference", val: "Customer Name" },
];

function PaymentPage() {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Payment</span>
          <h2>Secure Payments</h2>
          <p>
            Pay easily via EFT using the banking details below. Use your name as the reference and
            send proof of payment via WhatsApp.
          </p>
        </div>

        <div className="payment-card reveal">
          <h3 style={{ marginBottom: "1rem" }}>Banking Details</h3>
          {bankRows.map((r) => (
            <div key={r.label} className="bank-row">
              <span className="label">{r.label}</span>
              <span className="val">{r.val}</span>
            </div>
          ))}

          <div className="notice">🔒 Online payment gateway coming soon.</div>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a
              className="btn btn-primary"
              href={waLink("Hi! I'd like to send proof of payment for my order.")}
              target="_blank"
              rel="noopener"
            >
              Send Proof of Payment
            </a>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: ".9rem",
            color: "var(--caramel)",
          }}
        >
          Future-ready for PayFast, Yoco, Peach Payments and Stripe integration.
        </p>
      </div>
    </section>
  );
}
