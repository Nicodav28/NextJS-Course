interface CategoriesProps {
  params: {
    categories?: string[];
  };
  searchParams?: string | object;
}

export default function Category(props: Readonly<CategoriesProps>) {
  const { categories } = props.params;
  const { searchParams } = props;

  const renderObjectProperties = (obj: object) => {
    return (
      <ul>
        {Object.entries(obj).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Categories:</h1>
      <ul>
        {categories?.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h1>Search Params:</h1>
      <ul>
        {typeof searchParams === "object" ? (
          renderObjectProperties(searchParams)
        ) : (
          <li>{searchParams}</li>
        )}
      </ul>
    </div>
  );
}
