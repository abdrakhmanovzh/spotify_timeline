import Link from "next/link";

export const FooterLink = () => {
  return (
    <Link href="https://github.com/abdrakhmanovzh">
      <p className="text-sm font-semibold underline-offset-1 hover:underline lg:text-base">
        by Junius
      </p>
    </Link>
  );
};
