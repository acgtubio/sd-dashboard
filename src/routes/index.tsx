import Table from "~/components/table";

export default function Home() {
  const headers = ["abc", "abc", "abc"];
  const data = [["ABC", "ABC", "ABC"], ["ABC", "ABC", "ABC"]];
  return (
    <main class="px-5 py-5 md:py-10 md:px-10 text-gray-700 m-4 light:bg-primary-light rounded-lg shadow-md dark:bg-primary-light">
      <h1 class="text-primary-black light:text-primary-black md:text-3xl font-semibold">Overview</h1>

      <div class="py-10">
        <Table headers={headers} data={data} />
      </div>
    </main>
  );
}
