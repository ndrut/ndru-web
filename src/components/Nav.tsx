import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <div class="min-h-full">
      <nav class="bg-sky-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="container flex items-center p-3 text-gray-200">
            <div class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
              <a href="/">home</a>
            </div>
            <div class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
              <a href="/about">about</a>
            </div>
            <div class={`border-b-2 ${active("/ip")} mx-1.5 sm:mx-6`}>
              <a href="/ip">ip</a>
            </div>
            <div class={`border-b-2 ${active("/dns")} mx-1.5 sm:mx-6`}>
              <a href="/dns">dns</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
