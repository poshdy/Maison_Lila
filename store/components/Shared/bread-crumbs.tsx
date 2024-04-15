import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadCrumbs({
  data,
}: {
  data: { href: string; name: string }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, i, arr) => (
          <div key={i} className="flex items-center space-x-1">
            <BreadcrumbItem>
              <BreadcrumbLink href={item?.href}>{item?.name}</BreadcrumbLink>
            </BreadcrumbItem>
            {arr?.indexOf(item) === arr?.length - 1 ? null : (
              <BreadcrumbSeparator />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
