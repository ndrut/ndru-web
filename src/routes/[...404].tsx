import { useLocation } from "@solidjs/router";
import { Title } from "@solidjs/meta";

export default function NotFound() {
  const location = useLocation();
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Title>404 - Not Found</Title>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Not Found</h1>
      <p class="my-4">
        {location.pathname} not found
        </p>
    </main>
  );
}
