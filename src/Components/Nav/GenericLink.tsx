interface GenericLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
}

export const GenericLink = ({ href, title, isMobile }: GenericLinkProps) => {
  return (
    <li
      className={`relative  ${
        isMobile
          ? "pb-3 first-letter:capitalize  "
          : " first-letter:capitalize element"
      } `}
    >
      <a href={href} className={""}>
        {title}
      </a>
    </li>
  );
};
