import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Carousel1 from "../components/Carousel1";
import Carousel2 from "../components/Carousel2";
import supersavers from "../data/supersaver.json";
import topCategories from "../data/top-category.json";
import vegetablesFruites from "../data/vegetables_fruites.json";
import coldDrinkJuice from "../data/cold_drink_juice.json";
import snackMunchies from "../data/snacks_munchies.json";

const Home = () => {
  return (
    <main>
      <Carousel1 />
      <section className="category categories">
        <h4 className="text-effect">
          <span>Shop From</span>
          <span>Top Categories</span>
        </h4>

        <div>
          {topCategories.map((category) => (
            <Card1 key={category.title} {...category} />
          ))}
        </div>
      </section>
      <section className="category supersaver">
        <div>
          <h4 className="text-effect">
            <span>Supersaver</span>
            <span>Up to 50% off</span>
          </h4>
          <button>
            <span>View All</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#54B22C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          {supersavers.map((supersaver) => (
            <Card2 key={supersaver.title} {...supersaver} />
          ))}
        </div>
      </section>
      <section className="category supersaver">
        <div>
          <h4 className="text-effect">Vegetables & Fruits</h4>

          <button>
            <span>View All</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#54B22C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          {vegetablesFruites.map((vegetables) => (
            <Card2 key={vegetables.title} {...vegetables} />
          ))}
        </div>
      </section>
      <section className="category featured_brands">
        <div>
          <h4 className="text-effect">Featured Brands</h4>
          <button>
            <span>View All</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#54B22C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Carousel2 />
      </section>
      <section className="category supersaver">
        <div>
          <h4 className="text-effect">Cold Drinks & Juices</h4>

          <button>
            <span>View All</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#54B22C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          {coldDrinkJuice.map((vegetables) => (
            <Card2 key={vegetables.title} {...vegetables} />
          ))}
        </div>
      </section>
      <section className="category supersaver">
        <div>
          <h4 className="text-effect">Snacks & Munchies</h4>

          <button>
            <span>View All</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#54B22C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          {snackMunchies.map((snackMunchie) => (
            <Card2 key={snackMunchie.title} {...snackMunchie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;