export default function PropertyCard({ image, location, price }) {
  return (
    <div className="flex-1 min-w-[250px] group cursor-pointer">
        <div className="relative overflow-hidden">
            <img
                src={image}
                className="w-full object-cover aspect-[4/3] transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                alt={location}
            />
            <div className="absolute inset-0 bg-[#D78C3D]/0 group-hover:bg-[#D78C3D]/60 transition duration-300"></div>

        </div>
      <p className="pt-4 font-bold text-base">{location}</p>
      <p className="text-sm text-[#D78C3D]">{price}</p>
    </div>
  );
}