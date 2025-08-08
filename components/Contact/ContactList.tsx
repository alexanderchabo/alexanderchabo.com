export type ContactItem = {
  name: string;
  href: string;
  text: string;
  icon: React.ReactNode;
};

interface ContactListProps {
  items: ContactItem[];
}

export const ContactList = ({ items }: ContactListProps) => {
  return (
    <ul className="p-0 grid grid-cols-1 gap-1">
      {items.map(({ name, href, text, icon }) => {
        const key = `${name}-${href}`;
        return (
          <li key={key}>
            <div className="flex items-center gap-3 min-w-0 py-1">
              <span className="flex h-6 w-6 items-center justify-center text-gray-700">
                {icon}
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-gray-600 leading-tight">
                  {name}
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="block break-words text-sm text-blue-600 underline leading-tight"
                >
                  {text}
                </a>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
