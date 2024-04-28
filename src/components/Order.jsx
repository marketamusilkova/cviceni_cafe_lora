import "./Order.css";
import { OrderItem } from "./OrderItem";

export const Order = ({ items }) => (
  <main className="order">
    <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      <p
        className={
          items.length === 0 ? "empty-order" : "empty-order empty-order--hide"
        }
      >
        Zatím nemáte nic objednáno!
      </p>
      <div className="order__items">
        {items.map((item) => (
          <OrderItem
            key={item.id}
            name={item.name}
            image={`http://localhost:4000${item.image}`}
          />
        ))}
      </div>
    </div>
  </main>
);
