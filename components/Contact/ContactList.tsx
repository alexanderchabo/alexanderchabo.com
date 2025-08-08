"use client";

import { useState } from "react";

export type ContactItem = {
  name: string;
  href: string;
  text: string;
  icon: React.ReactNode;
  copyValue?: string; // value to copy; defaults to text
};

interface ContactListProps {
  items: ContactItem[];
}

export const ContactList = ({ items }: ContactListProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1500);
    } catch (_err) {
      // noop: keep UI stable if clipboard is unavailable
    }
  };

  return (
    <ul className="p-0 grid grid-cols-1 gap-2">
      {items.map(({ name, href, text, icon, copyValue }) => {
        const key = `${name}-${href}`;
        const valueToCopy = copyValue || text || href;

        return (
          <li key={key} className="list-none">
            <div className="flex items-center gap-3 rounded-md border border-gray-300 bg-gray-100 px-3 py-2">
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-1 items-center gap-3 min-w-0"
                aria-label={name}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-400 bg-white text-gray-700 group-hover:bg-black group-hover:text-white">
                  {icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-gray-600 leading-tight">{name}</span>
                  <span className="block break-words text-sm text-blue-600 underline leading-tight">
                    {text}
                  </span>
                </span>
              </a>
              <button
                type="button"
                className="shrink-0 inline-flex items-center gap-1 rounded border border-gray-400 bg-white px-2 py-1 text-xs text-gray-700 hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => handleCopy(key, valueToCopy)}
                aria-label={`Copy ${name}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M19 3H8a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm3-4h-1V7a2 2 0 0 0-2-2H8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"
                  />
                </svg>
                {copiedKey === key ? "Copied" : "Copy"}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};


