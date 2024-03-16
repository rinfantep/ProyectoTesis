import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
          >
            Sanidad
          </span>
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
            }}
            className="text-slate-500 focus:ring-slate-200 focus:ring-2 hover:text-sky-500 rounded transition-colors focus:ring-offset-2"
          >
            {expanded ? "C" : "O"}
          </button>
        </div>
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SideBarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
