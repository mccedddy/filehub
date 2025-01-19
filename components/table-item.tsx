"use client";
import { useState, useEffect } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

type Props = {
  id?: number;
  name?: string;
  type?: string;
  size?: string;
  date?: string;
};

export default function TableItem({ id, name, type, size, date }: Props) {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const { refs, floatingStyles } = useFloating({
    middleware: [offset(4), flip(), shift()],
    placement: "bottom-start",
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      refs.reference.current &&
      refs.floating.current &&
      !refs.reference.current.contains(event.target as Node) &&
      !refs.floating.current.contains(event.target as Node)
    ) {
      setOpenItemId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);

  const toggleDropdown = () => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <tr
        className={`hover:cursor-pointer border relative ${
          openItemId === id
            ? "bg-secondary"
            : "bg-background hover:bg-background-light"
        }`}
        onClick={toggleDropdown}
        ref={refs.setReference}
      >
        <td className="max-w-80 py-2 px-4 text-nowrap overflow-hidden">
          {name}
        </td>
        <td className="w-6 py-2 px-2 text-nowrap">{type}</td>
        <td className="w-6 py-2 px-2 text-nowrap">{size}</td>
        <td className="w-14 py-2 pl-2 pr-4 text-nowrap">{date}</td>
      </tr>

      {openItemId === id && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="absolute border rounded shadow-xl ml-2 z-10"
        >
          <ul className="w-28 text-sm bg-background-light overflow-hidden rounded">
            <li
              className="px-4 py-2 hover:bg-primary hover:text-background cursor-pointer"
              onClick={() => console.log(`Download ${id}`)}
            >
              Download
            </li>
            <li
              className="px-4 py-2 hover:bg-secondary cursor-pointer"
              onClick={() => console.log(`Rename ${id}`)}
            >
              Rename
            </li>
            <li
              className="px-4 py-2 hover:bg-destructive cursor-pointer"
              onClick={() => console.log(`Delete ${id}`)}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
