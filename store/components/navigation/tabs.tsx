import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuTab from "./menu-tab";
import CategoriesTab from "./categories-tab";
import { getData } from "@/fetchers";
import { Category } from "@/types";

const Tab = async () => {
  const categories: Category[] | null = await getData("category");
  return (
    <Tabs defaultValue="Categories">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Categories">Categories</TabsTrigger>
        <TabsTrigger value="Menu">Menu</TabsTrigger>
      </TabsList>
      <TabsContent value="Categories">
        {categories && <CategoriesTab categories={categories} />}
      </TabsContent>
      <TabsContent value="Menu">
        <MenuTab />
      </TabsContent>
    </Tabs>
  );
};

export default Tab;
