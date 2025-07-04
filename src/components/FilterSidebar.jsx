function FilterSidebar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[name] = [...(updated[name] || []), value];
      } else {
        updated[name] = updated[name].filter((v) => v !== value);
      }
      return updated;
    });
  };

  const filterOptions = {
    type: ["Lamp", "Strip"],
    color: ["Multicolor", "Warm White", "Blue", "Amber"],
    power: ["USB", "Battery", "Plug"]
  };

  return (
    <div className="bg-white p-4 shadow rounded w-full sm:w-64">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {Object.keys(filterOptions).map((key) => (
        <div className="mb-4" key={key}>
          <h3 className="font-medium capitalize">{key}</h3>
          {filterOptions[key].map((option) => (
            <label className="block text-sm" key={option}>
              <input
                type="checkbox"
                name={key}
                value={option}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar;
