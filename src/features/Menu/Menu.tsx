import MenuCard from "../../components/common/MenuCard/MenuCard";
import styles from "./Menu.module.css";

import pizzaImage from "../../assets/images/apizzaimage.jpg";
import pizzaImage2 from "../../assets/images/bpizzaimage.jpg";
import Button from "../../components/common/Button";

const menuItems = [
  {
    id: 1,
    image: pizzaImage,
    name: "Pizza",
    imageAlt: "Freshly made pizza",
    description:
      "Tomato sauce, mozzarella, hot dog, caramelized onions, red onions and french's mustard drizzle.",
  },
  {
    id: 2,
    image: pizzaImage2,
    name: "Drinks",
    imageAlt: "Refreshing drinks",
    description:
      "Mozzarella, BBQ jackfruit, peppers, red onions, sweetcorn and a BBQ drizzle.",
  },
  {
    id: 3,
    image: pizzaImage,
    name: "Calzone",
    imageAlt: "Freshly made calzone",
    description:
      "Tomato sauce, mozzarella, hot dog, caramelized onions, red onions and french's mustard drizzle.",
  },
];

type ModalType = "map" | "newsletter" | "article" | "menu" | null;

interface MenuProps {
  onOpenModal: (modal: ModalType) => void;
}

function Menu({ onOpenModal }: MenuProps) {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Menu</h3>
          <div className={styles.categories}>
            <Button text="Pizza" href="#pizza" onClick={() => onOpenModal("menu")} />
            <Button text="Calzone" href="#calzone" onClick={() => onOpenModal("menu")} />
            <Button text="Dessert" href="#dessert" onClick={() => onOpenModal("menu")} />
            <Button text="Drinks" href="#drinks" onClick={() => onOpenModal("menu")} />
          </div>
        </div>

        <div className={styles.grid}>
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              imageAlt={item.imageAlt}
              name={item.name}
              description={item.description}
              buttonText={item.id === 2 ? "Full Article" : undefined}
              buttonHref={item.id === 2 ? "#article" : undefined}
              onButtonClick={
                item.id === 2 ? () => onOpenModal("article") : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
