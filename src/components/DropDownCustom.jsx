"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { NavLink } from "react-router-dom";

/**
 * A reusable dropdown menu component for navigation links.
 * Import:
 *   import DropdownMenuDialog from "@/components/DropDownCustom.jsx";
 *
 * Usage inside your component:
 *   <DropdownMenuDialog
 *     items={[
 *       { name: "View", to: "/admin/foo" },
 *       { name: "Edit", to: "/admin/foo/edit" },
 *     ]}
 *   />
 *
 * Example:
 *   <DropdownMenuDialog
 *     items={[
 *       { name: "View Detox Food", to: "/admin/detox-food/1/lists" },
 *     ]}
 *   />
 *
 *   You can also make routes dynamic:
 *     items={[
 *       { name: "View", to: `/admin/detox-food/${food._id}/lists` },
 *       { name: "Edit", to: `/admin/detox-food/${food._id}/edit` },
 *     ]}
 */

export default function DropdownMenuDialog({ items = [] }) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="rounded-full hover:bg-gray-100"
        >
          <MoreHorizontal size={18} className="text-gray-600" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 z-10">
        <DropdownMenuGroup>
          {items.map((item, index) => {
            // link item
            if (item.to) {
              return (
                <DropdownMenuItem key={item.to} asChild>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block w-full px-2 py-1.5 text-sm cursor-pointer ${
                        isActive
                          ? "text-green-600 font-semibold"
                          : "text-gray-700"
                      }
                      ${item.textColor ? item.textColor : "text-gray-700"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </DropdownMenuItem>
              );
            }
            // onClick item
            else if (item.onClick) {
              return (
                <DropdownMenuItem key={index} asChild>
                  <button
                    onClick={item.onClick}
                    className={`block w-full text-left px-2 py-1.5 text-sm cursor-pointer ${
                      item.textColor ? item.textColor : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                </DropdownMenuItem>
              );
            }
            // disabled item
            else {
              return (
                <DropdownMenuItem
                  key={index}
                  className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
                  disabled
                >
                  {item.name}
                </DropdownMenuItem>
              );
            }
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
