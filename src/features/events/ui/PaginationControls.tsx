import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function PaginationControls({ nextPath, prevPath }: { nextPath: string; prevPath: string }) {
  return (
    <section className="flex w-full justify-end">
      {prevPath ? (
        <Link href={prevPath} className="pagination-link mr-2">
          <ArrowLeftIcon /> Previous
        </Link>
      ) : null}
      {nextPath ? (
        <Link href={nextPath} className="pagination-link">
          Next <ArrowRightIcon />
        </Link>
      ) : null}
    </section>
  );
}
