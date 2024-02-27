import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import { Card } from "../components/Card";

export const HomePage = () => {
  const [advertisements, setAdvertisements] = useState(null);
  const { getAll } = authService;

  useEffect(() => {
    getAll().then((res) => setAdvertisements(res));
  }, []);

  return (
    <div className="container">
      {advertisements?.map((el) => (
        <Card key={el.key} card={el} />
      ))}
    </div>
  );
};
