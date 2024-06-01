import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Title>About</Title>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">About</h1>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}
