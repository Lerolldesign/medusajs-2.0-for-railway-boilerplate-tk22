import { ArrowUpRightMini } from "@medusajs/icons";

import LocalizedClientLink from "../localized-client-link";

type InteractiveLinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group"
      href={href}
      onClick={onClick}
      {...props}
    >
      <div className="">{children}</div>
      <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="var(--fg-interactive)"
      />
    </LocalizedClientLink>
  );
};

export default InteractiveLink;
