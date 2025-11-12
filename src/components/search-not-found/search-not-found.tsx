type SearchNotFoundProps = {
  query?: string;
  className?: string;
};

export function SearchNotFound({ query, className }: SearchNotFoundProps) {
  if (!query) {
    return (
      <p className={className ? className : "text-sm text-gray-600"}>
        Please enter keywords
      </p>
    );
  }

  return (
    <div
      className={`text-center rounded-lg p-4 border border-gray-200 bg-white ${
        className || ""
      }`}
    >
      <h6 className="text-lg font-semibold mb-1">Not found</h6>

      <p className="text-sm text-gray-600">
        No results found for{" "}
        <strong className="font-semibold">"{query}"</strong>.
        <br />
        Try checking for typos or using complete words.
      </p>
    </div>
  );
}
