import { getCategoryDetail } from "@/apiConfig";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BreadCrumbCategory = ({ category }: any) => {
  const [cat, setCat] = useState("");
  useEffect(() => {
    getCategoryDetail(category)
      .then((res) => res.json())
      .then((data) => setCat(data.name));
  }, []);

  return (
    <Breadcrumb className="breadcrumb" spacing="8px" separator={">"}>
      <BreadcrumbItem key={cat}>
        <BreadcrumbLink>{cat}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbCategory;
