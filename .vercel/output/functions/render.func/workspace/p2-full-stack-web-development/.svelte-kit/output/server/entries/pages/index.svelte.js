import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
const todoItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.todo.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s
 }.todo.svelte-nk8g94 button.svelte-nk8g94.svelte-nk8g94{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}.todo.svelte-nk8g94 input.svelte-nk8g94.svelte-nk8g94{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}button.toggle.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.text.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{position:relative;display:flex;align-items:center;flex:1}.save.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-nk8g94 input.svelte-nk8g94:focus+.save.svelte-nk8g94,.save.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94:focus{transition:opacity 0.2s;opacity:1}.delete.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94:hover,.delete.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94:focus{transition:opacity 0.2s;opacity:1}.done.svelte-nk8g94.svelte-nk8g94.svelte-nk8g94{transform:none;opacity:0.4;filter:drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1))}.done.svelte-nk8g94 .toggle.svelte-nk8g94.svelte-nk8g94{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}`,
  map: null
};
const Todo_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  let { processDeletedTodoResult } = $$props;
  let { processUpdatedTodoResult } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.processDeletedTodoResult === void 0 && $$bindings.processDeletedTodoResult && processDeletedTodoResult !== void 0)
    $$bindings.processDeletedTodoResult(processDeletedTodoResult);
  if ($$props.processUpdatedTodoResult === void 0 && $$bindings.processUpdatedTodoResult && processUpdatedTodoResult !== void 0)
    $$bindings.processUpdatedTodoResult(processUpdatedTodoResult);
  $$result.css.add(css$1);
  return `<div class="${["todo svelte-nk8g94", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos/" + escape(todo.uid, true) + ".json?_method=patch"}" method="${"post"}"><input type="${"hidden"}" name="${"done"}"${add_attribute("value", todo.done ? "" : "true", 0)} class="${"svelte-nk8g94"}">
        <button aria-label="${"Mark todo as " + escape(todo.done ? "not done" : "done", true)}" class="${"toggle svelte-nk8g94"}"></button></form>

    <form action="${"/todos/" + escape(todo.uid, true) + ".json?_method=patch"}" method="${"post"}" class="${"text svelte-nk8g94"}"><input type="${"text"}" name="${"text"}"${add_attribute("value", todo.text, 0)} class="${"svelte-nk8g94"}">
       <button aria-label="${"Save todo"}" class="${"save svelte-nk8g94"}"></button></form>

    <form action="${"/todos/" + escape(todo.uid, true) + ".json?_method=delete"}" method="${"post"}"><button aria-label="${"Delete todo"}" class="${"delete svelte-nk8g94"}"></button></form></div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".todos.svelte-ex9siu.svelte-ex9siu{width:100%;max-width:42rem;margin:4rem auto 0 auto}.new.svelte-ex9siu.svelte-ex9siu{margin:0 0 0.5rem 0}.new.svelte-ex9siu input.svelte-ex9siu{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todos.svelte-ex9siu input{border:1px solid transparent}.todos.svelte-ex9siu input:focus-visible{box-shadow:inset 1px 1px 6px rgba(0,0,0,0,.1);border:1px solid #ff3e00 !important;outline:none}",
  map: null
};
const load = async ({ fetch }) => {
  const res = await fetch("/todos.json");
  if (res.ok) {
    const todos = await res.json();
    return { props: { todos } };
  }
  const { message } = await res.json();
  return { error: new Error(message) };
};
const title = "Todo";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todos } = $$props;
  const processUpdatedTodoResult = async (res) => {
    const updatedTodo = await res.json();
    todos = todos.map((t) => {
      if (t.uid === updatedTodo.uid)
        return updatedTodo;
      return t;
    });
  };
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

<div class="${"todos svelte-ex9siu"}"><h1>${escape(title)}</h1>

  <form action="${"/todos.json"}" method="${"post"}" class="${"new svelte-ex9siu"}"><input type="${"text"}" name="${"text"}" aria-label="${"Add a todo"}" placeholder="${"+ type to add a todo"}" class="${"svelte-ex9siu"}"></form>
  ${each(todos, (todo) => {
    return `${validate_component(Todo_item, "TodoItem").$$render(
      $$result,
      {
        todo,
        processDeletedTodoResult: () => {
          todos = todos.filter((t) => t.uid !== todo.uid);
        },
        processUpdatedTodoResult
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Routes as default,
  load
};
