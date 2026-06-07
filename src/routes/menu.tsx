import { createFileRoute } from "@tanstack/react-router";
import { waLink } from "@/lib/bakery";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Sweet Spot" },
      {
        name: "description",
        content:
          "Our full menu of breads, cakes, pastries, biscuits, specialty treats and drinks.",
      },
      { property: "og:title", content: "Menu — The Sweet Spot" },
      {
        property: "og:description",
        content: "Made fresh, priced kindly — see our full bakery menu.",
      },
    ],
  }),
  component: MenuPage,
});

type PriceRow = { item: string; price: string };
type Category = {
  id: string;
  title: string;
  desc: string;
  img: string;
  rows?: PriceRow[];
  chips?: string[];
};

const categories: Category[] = [
  {
    id: "bread",
    title: "Bread & Savory",
    desc: "Daily-baked loaves, rolls and savoury bites.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
    rows: [
      { item: "White / Brown Bread Loaf", price: "R15 – R25" },
      { item: "Rolls (1)", price: "R3 – R5" },
      { item: "6 Rolls Pack", price: "R18 – R25" },
      { item: "Sausage Roll", price: "R10 – R18" },
      { item: "Small Meat Pie", price: "R15 – R25" },
      { item: "Basic Sandwich", price: "R20 – R35" },
    ],
  },
  {
    id: "cakes",
    title: "Cakes & Muffins",
    desc: "From everyday muffins to bespoke birthday cakes.",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&q=80",
    rows: [
      { item: "Muffin", price: "R10 – R18" },
      { item: "Cupcake", price: "R8 – R15" },
      { item: "Slice of Cake", price: "R15 – R25" },
      { item: "Small Whole Cake", price: "R80 – R150" },
      { item: "Medium Birthday Cake", price: "R180 – R350" },
    ],
  },
  {
    id: "pastries",
    title: "Pastries",
    desc: "Buttery, flaky, freshly laminated.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    rows: [
      { item: "Croissant", price: "R12 – R25" },
      { item: "Chocolate Croissant", price: "R18 – R30" },
      { item: "Donut", price: "R10 – R18" },
      { item: "Cinnamon Roll", price: "R15 – R25" },
      { item: "Danish Pastry", price: "R15 – R28" },
    ],
  },
  {
    id: "biscuits",
    title: "Biscuits & Snacks",
    desc: "Crunchy, sweet, perfect with tea.",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
    rows: [
      { item: "Cookie", price: "R5 – R10" },
      { item: "6 Cookies Pack", price: "R25 – R45" },
      { item: "Rusks (Small Pack)", price: "R20 – R40" },
      { item: "Tart Slice", price: "R15 – R25" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Treats",
    desc: "Seasonal favourites and house specials.",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
    chips: [
      "Chocolate Chip Cookies",
      "Oatmeal Cookies",
      "Sugar Cookies",
      "Shortbread",
      "Apple Tart",
      "Lemon Tart",
      "Custard Tart",
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    desc: "Pair anything with a warm cup or cool sip.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    rows: [
      { item: "Tea", price: "R10 – R15" },
      { item: "Coffee", price: "R12 – R25" },
      { item: "Cappuccino", price: "R18 – R35" },
      { item: "Hot Chocolate", price: "R15 – R30" },
      { item: "Milkshake", price: "R20 – R40" },
      { item: "Juice", price: "R10 – R25" },
    ],
  },
];

function MenuPage() {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Menu</span>
          <h2>Made fresh, priced kindly</h2>
          <p>All prices in ZAR. Range reflects portion size and customisation.</p>
        </div>

        {categories.map((c) => (
          <div key={c.id} id={c.id} className="menu-cat reveal">
            <div className="menu-cat-head">
              <img src={c.img} alt={c.title} />
              <div>
                <h2>{c.title}</h2>
                <p>{c.desc}</p>
              </div>
            </div>
            {c.rows && (
              <div className="price-list">
                {c.rows.map((r) => (
                  <div key={r.item} className="price-row">
                    <span className="item">{r.item}</span>
                    <span className="price">{r.price}</span>
                  </div>
                ))}
              </div>
            )}
            {c.chips && (
              <div className="chip-row">
                {c.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            )}
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            className="btn btn-primary"
            href={waLink("Hi! I'd like to order from the menu.")}
            target="_blank"
            rel="noopener"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
