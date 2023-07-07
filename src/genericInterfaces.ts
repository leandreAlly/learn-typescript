interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}
interface Products {
  title: string;
}

let result = fetch<Products>("url");
result.data?.title;
