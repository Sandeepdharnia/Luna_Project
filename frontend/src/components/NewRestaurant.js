import "../styles/NewRestaurant.scss";

const NewRestaurant = () => {
  return (
    <main className="newRestaurant">
      <div className="newRestaurant__title-container">
        <h1> CREATE NEW RESTAURANT </h1>
        <hr />
      </div>

      <form className="newRestaurant__form">
        <div className="newRestaurant__input-container">
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="category*">Category*</label>
            <select name="category" id="category">
              <option value="italian">Italian</option>
              <option value="french">French</option>
              <option value="swiss">Swiss</option>
            </select>
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="country*">Country*</label>
            <select name="country" id="country">
              <option value="germany">Germany</option>
              <option value="switzerland">Switzerland</option>
              <option value="france">France</option>
            </select>
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="street">Street*</label>
            <input type="text" name="street" id="street" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="city">City*</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="zip">Zip*</label>
            <input type="text" name="zip" id="zip" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="website">Website*</label>
            <input type="text" name="website" id="website" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="phone">Phone*</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="email">Email*</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="openingHours">Opening Hours*</label>
            <input type="text" name="openingHours" id="openingHours" />
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="priceLevel">Price Level*</label>
            <select name="priceLevel" id="priceLevel">
              <option value="veryCheap">$</option>
              <option value="cheap">$$</option>
              <option value="expensive">$$$</option>
              <option value="luxury">$$$$</option>
            </select>
          </div>
          <div className="newRestaurant__input-wrapper">
            <label htmlFor="openingHours">Image</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="search-btn"
            />
          </div>
        </div>
        <button
          type="submit"
          className="search-btn"
          style={{ padding: "0.6rem 1rem", width: "200px" }}
        >
          Finish Registration
        </button>
      </form>
    </main>
  );
};
export default NewRestaurant;
