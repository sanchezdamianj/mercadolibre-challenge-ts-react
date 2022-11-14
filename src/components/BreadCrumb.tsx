import { CategoriesType } from "@/types";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

interface CategoriesProduct {
  categories: CategoriesType[];
}

const BreadCrumb = ({ categories }: CategoriesProduct) =>

  categories?.length > 0 ? (
    <Breadcrumb className="breadcrumb" spacing="8px" separator={">"}>
      {categories?.map(({ name }) => {
    
        return (
          <BreadcrumbItem key={name}>
            <BreadcrumbLink>{name}</BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  ) : (
    <div className="categoryNotFound">
      No se encontraron categorias para esta busqueda...
    </div>
  );

export default BreadCrumb;
