import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../../components/LinkButton";
import { sampleList } from "../../../mock/detoxFoodData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../../../components/ui/pagination";
import { Star, Search, Ellipsis } from "lucide-react";

export default function ListDetoxFood() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5; // show 5 items per page

  const filtered = sampleList.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  // clamp page if filtered changes (move to effect to avoid state update during render)
  useEffect(() => {
    if (page > pageCount) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, filtered.length);
  const paged = filtered.slice(start, end);

  const getPagesToRender = () => {
    // if small number of pages, render all
    if (pageCount <= 9)
      return Array.from({ length: pageCount }, (_, i) => i + 1);

    const pagesSet = new Set();
    // always include first 3
    [1, 2, 3].forEach((n) => pagesSet.add(n));
    // include current and its neighbors
    for (let i = Math.max(1, page - 1); i <= Math.min(page + 1, pageCount); i++)
      pagesSet.add(i);
    // include last 5
    for (let i = Math.max(1, pageCount - 4); i <= pageCount; i++)
      pagesSet.add(i);

    const pages = Array.from(pagesSet).sort((a, b) => a - b);
    const out = [];
    let prev = 0;
    for (const p of pages) {
      if (prev && p - prev > 1) out.push("...");
      out.push(p);
      prev = p;
    }
    return out;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-admin_text_color">
          Detox Food List
        </h1>
        <div className="w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search detox foods"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-4">
          <h1 className="font-bold text-admin_text_color text-lg">Food Menu</h1>
        </div>
        <div className="space-y-4">
          {paged.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="md:w-20 md:h-12  w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                  {item.day}
                </div>

                <div>
                  <Link
                    className="font-bold text-admin_text_color truncate max-w-full"
                    to={`/admin/detox-food/view/${item.id}`}
                  >
                    {item.title}
                  </Link>
                  <div className="text-sm text-gray-500">{item.type}</div>
                </div>
              </div>

              <div className="flex items-center justify-end md:justify-end md:gap-6 w-full md:w-auto gap-4">
                <div className="text-yellow-500 font-semibold flex flex-row items-center gap-1 ">
                  <Star size={18} fill="orange" />
                  {item.rating}
                </div>
                <div className="w-36 h-16 bg-orange-300 rounded-md hidden md:block" />
                <Ellipsis size={16} color="gray"/>
              </div>
            </div>
          ))}
        </div>

        {/* desktop pagination */}
        <div className="flex-col hidden sm:flex-row sm:justify-between md:flex items-center  mt-6 gap-3">
          <div className="text-sm text-gray-500">
            {filtered.length === 0
              ? `Showing 0-0 of 0`
              : `Showing ${start + 1}-${end} of ${filtered.length}`}
          </div>
          <div className="flex items-center gap-2">
            <Pagination className="cursor-pointer select-none">
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-disabled={page === 1}
              />

              <PaginationContent>
                {getPagesToRender().map((p, idx) =>
                  p === "..." ? (
                    <PaginationItem key={`e-${idx}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={p}>
                      <PaginationLink
                        onClick={() => setPage(p)}
                        isActive={page === p}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
              </PaginationContent>

              <PaginationNext
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                aria-disabled={page === pageCount}
              />
            </Pagination>
          </div>
        </div>

        {/* mobile pagination */}
        <div className="flex flex-col sm:flex-row md:hidden items-center justify-between mt-6 gap-4">
          <div className="text-sm text-gray-500 order-2 sm:order-1">
            Showing {start + 1}-{Math.min(end, filtered.length)} of{" "}
            {filtered.length}
          </div>

          <div className="order-1 sm:order-2 sm:w-auto w-full  overflow-x-auto">
            {/* Added overflow-x-auto for very small screens if pagination gets too wide */}
            <Pagination className="justify-center sm:justify-end">
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-disabled={page === 1}
                className={
                  page === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
              <PaginationContent className="hidden xs:flex">
                {/* Hide full pagination on very extra small screens if needed, or use a simplified version */}
                {getPagesToRender().map((p, idx) => (
                  <PaginationItem key={typeof p === "string" ? `e-${idx}` : p}>
                    {p === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => setPage(p)}
                        isActive={page === p}
                        className="cursor-pointer"
                      >
                        {p}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
              </PaginationContent>
              {/* Simplified Pagination for extra small screens (optional) */}
              <div className="flex xs:hidden items-center gap-2 px-2">
                <span className="text-sm">
                  Page {page} of {pageCount}
                </span>
              </div>

              <PaginationNext
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                aria-disabled={page === pageCount}
                className={
                  page === pageCount
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
