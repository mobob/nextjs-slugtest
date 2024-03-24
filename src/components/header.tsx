export interface BreadcrumbData {
  label: string;
  href?: string;
}

import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function Header(props: { breadcrumbs: BreadcrumbData[] }) {
  const { breadcrumbs } = props;
  return (
    <header>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((breadcrumb, index) => (
            <>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.href}>
                  {breadcrumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
