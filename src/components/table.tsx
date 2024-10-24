import { Component, For } from "solid-js";

// TODO: fix types
type TableProps = {
  headers: any[];
  data: any[][];
};

const Table: Component<TableProps> = (props) => {
  return (
    <>
      <div>
        <h1>Search</h1>
      </div>
      <div class="border rounded-lg shadow-sm border-solid-gray mt-5">
        <table class="w-full">
          <thead class="text-sm text-primary-gray">
            <tr class="[&>:first-child]:rounded-tl-lg [&>:last-child]:rounded-tr-lg border-b border-b-solid-gray">
              <For each={props.headers}>
                {(item, index) => (
                  <th class="font-light text-left px-4 py-2">
                    <span>{item}</span>
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={props.data}>
              {(row, index) => (
                <tr class="[&:not(:last-child)]:border-b border-b-solid-gray text-primary-black text-sm hover:bg-green-200 hover:cursor-pointer">
                  <For each={row}>
                    {(col, index) => (
                      <td class="px-4 py-1">
                        <h1>{col}</h1>
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
