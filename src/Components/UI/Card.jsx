import { Link } from "react-router";

export default function Card({ skin }) {
  return (
    <Link className="flex flex-col justify-center items-center w-full h-80 shadow-primary rounded-xl bg-white border border-slate-200 hover:border-2 hover:border-orange-primary" to={`/skins/${skin.id}`}>
      <div className="w-5/6 flex gap-2">
        {skin.stattrak && (
          <>
            <div className="w-2/4 h-1 rounded-full bg-orange-400"></div>
            <div
              className="w-2/4 h-1 rounded-full"
              style={{ backgroundColor: skin.rarity.color }}
            ></div>
          </>
        )}
      </div>
      <img
        src={skin.image}
        alt={skin.name}
        className=" object-contain w-3/4 h-3/4 "
      />
      <h3 className="text-sm font-bold">{skin.name}</h3>
      <p className="text-xs text-gray-500">{skin.rarity.name}</p>
    </Link>
  );
}

// Object { id: "skin-ad56dc47a4c4", name: "AK-47 | The Outsiders", description: "Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been custom painted with crude depictions of Ts in different situations.\\n\\n<i>The Ts on the bus win rounds and rounds, rounds and rounds, rounds and rounds</i>", … }
// category: Object { id: "csgo_inventory_weapon_category_rifles", name: "Rifles" }
// crateid: "crate-7003"​
// description: "Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been custom painted with crude depictions of Ts in different situations.\\n\\n<i>The Ts on the bus win rounds and rounds, rounds and rounds, rounds and rounds</i>"
// id: "skin-ad56dc47a4c4"

// image: "https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/default_generated/weapon_ak47_ak47_t_bus_light_png.png"

// name: "AK-47 | The Outsiders"

// rarity: Object { id: "rarity_legendary_weapon", name: "Classified", color: "#d32ce6" }

// stattrak: true

// weapon: Object { id: "weapon_ak47", weapon_id: 7, name: "AK-47" }

// id: "weapon_ak47"

// name: "AK-47"

// weapon_id: 7
