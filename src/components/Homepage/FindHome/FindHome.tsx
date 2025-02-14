import Search from "@/assets/icons/Search";
import classes from "./FindHome.module.scss";
import BuildingIcon from "@/assets/icons/BuildingIcon";
import LocationIcon from "@/assets/icons/Location";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import Wallet from "@/assets/icons/Wallet";
import Arrow from "@/assets/icons/Arrow";
import Button from "@/components/Button/Button";
import BedIcon from "@/assets/icons/BedIcon";

let cardsArr = [
  {
    status: "For Sale",
    title: "Cedar Ridge Duplex",
    location: "Pinevelle, North Carolina",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    status: "For Rent",
    title: "Maple Grove Estates",
    location: "Franklin, Tennessee",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    status: "For Sale",
    title: "Willow creek resisdences",
    location: "Boulder, Colarado",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    status: "Oakwood Terrace",
    title: "Cedar Ridge Duplex",
    location: "Austine, Texas",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    status: "For Sale",
    title: "Sunset Pines Duplex",
    location: "Pinevelle, North Carolina",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    status: "For Sale",
    title: "Birchwood Heights",
    location: "Pinevelle, North Carolina",
    beds: 4,
    baths: 3,
    area: 980,
    price: "$475,000",
    house:
      "https://images.unsplash.com/photo-1589129140837-67287c22521b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdXNlfGVufDB8fDB8fHww",
  },
];

const FindHome = () => {
  return (
    <div className={classes["findhome-container"]}>
      <p className={classes["section-header"]}>
        Find your <span>dream home</span>
      </p>
      <p className={classes["section-desc"]}>
        Connecting you to the perfect property for you and your loved ones
      </p>
      <div className={classes["filters-container"]}>
        <div className={classes["filter"]}>
          <div>
            <BuildingIcon />
            Property
          </div>
          <div>
            <Arrow color="black" rotation={-90} />
          </div>
        </div>
        <div className={classes["filter"]}>
          <div>
            <LocationIcon />
            Location
          </div>
          <Arrow color="black" rotation={-90} />
        </div>
        <div className={classes["filter"]}>
          <div>
            <CalendarIcon />
            Date
          </div>
          <Arrow color="black" rotation={-90} />
        </div>
        <div className={classes["filter"]}>
          <div>
            <Wallet />
            Price
          </div>
          <Arrow color="black" rotation={-90} />
        </div>
        <Button>
          <Search color="white" width="16" height="16" /> Search
        </Button>
      </div>

      <div className={classes["cards-container"]}>
        {/* {isMobile ? (
          <>
            {cardsArr.map((cardEl, cardIndex) => (
              <div key={cardIndex} className={classes["card"]}>
                <div className={classes["image-container"]}>
                  <img src={cardEl.house} />
                  <div className={classes["property-tag"]}>{cardEl.status}</div>
                </div>
                <div className={classes["card-content-container"]}>
                  <p className={classes["proeprty-name"]}>{cardEl.title}</p>

                  <p className={classes["property-location"]}>
                    <LocationIcon /> {cardEl.location}
                  </p>

                  <div className={classes["horizontal-separator"]}></div>

                  <div className={classes["property-details-container"]}>
                    <p>
                      <BedIcon />
                      {cardEl.beds} beds
                    </p>
                    <p>
                      <BedIcon />
                      {cardEl.baths} baths
                    </p>
                    <p>
                      <BedIcon />
                      {cardEl.area} sqft
                    </p>
                  </div>

                  <div className={classes["price-btn-container"]}>
                    <p className={classes["price"]}>{cardEl.price}</p>
                    <Button
                      btnStyle={{
                        padding: "0.5rem 0rem",
                        width: "110px",
                        fontSize: "12px",
                        backgroundColor: "#fea828",
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : ( */}
        <>
          {" "}
          {cardsArr.map((cardEl, cardIndex) => (
            <div key={cardIndex} className={classes["card"]}>
              <div className={classes["image-container"]}>
                <img src={cardEl.house} />
                <div className={classes["property-tag"]}>{cardEl.status}</div>
              </div>
              <div className={classes["card-content-container"]}>
                <p className={classes["proeprty-name"]}>{cardEl.title}</p>

                <p className={classes["property-location"]}>
                  <LocationIcon /> {cardEl.location}
                </p>

                <div className={classes["horizontal-separator"]}></div>

                <div className={classes["property-details-container"]}>
                  <p>
                    <BedIcon />
                    {cardEl.beds} beds
                  </p>
                  <p>
                    <BedIcon />
                    {cardEl.baths} baths
                  </p>
                  <p>
                    <BedIcon />
                    {cardEl.area} sqft
                  </p>
                </div>

                <div className={classes["price-btn-container"]}>
                  <p className={classes["price"]}>{cardEl.price}</p>
                  <Button
                    btnStyle={{
                      padding: "0.5rem 0rem",
                      width: "110px",
                      fontSize: "12px",
                      backgroundColor: "#fea828",
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </>
        {/* )} */}
      </div>

      <Button
        btnStyle={{
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        Explore All Properties
      </Button>
    </div>
  );
};

export default FindHome;
