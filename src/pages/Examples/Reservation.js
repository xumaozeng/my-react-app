import { useState } from "react";

function Reservation(props) {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "isGoing") {
      setIsGoing(value);
    } else {
      setNumberOfGuests(value);
    }
  };
  return (
    <form>
      <label>
        参与：
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        来宾人数：
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
export default Reservation;
