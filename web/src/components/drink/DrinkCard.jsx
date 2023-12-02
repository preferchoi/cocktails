export default function DrinkCard({ Drink }) {
  return (
    <>
      <div>
        <p>{Drink.name}</p>
        <img src={Drink.img_path} alt="" srcset="" />
      </div>
    </>
  );
}
