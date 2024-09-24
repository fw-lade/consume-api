import React from "react";
import Navbar from "./Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Men from "./Men";
import Women from "./Women";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="products">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Electronics</Tab>
            <Tab>Jeweleries</Tab>
            <Tab>Men's clothing</Tab>
            <Tab>Women's clothing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Electronics/>
            </TabPanel>
            <TabPanel>
              <Jewelery/>
            </TabPanel>
            <TabPanel>
              <Men/>
            </TabPanel>
            <TabPanel>
              <Women/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
