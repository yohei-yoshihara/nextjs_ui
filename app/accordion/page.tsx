import Accordion from "@/app/ui/accordion";
import { AccordionGroup, AccordionItem } from "@/app/ui/accordion-group";

export default function Home() {
  return (
    <div className="m-4">
      <Accordion
        title={
          <div className="font-bold text-gray-600 w-full bg-gray-300 mr-3 p-1 rounded-lg">
            Title
          </div>
        }>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed
        aut facere soluta repudiandae debitis nulla placeat suscipit culpa
        minima, veniam rem dolore ipsum quam molestias error nisi. Commodi,
        quia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        maiores nisi natus voluptate, ea officiis qui sunt. Ea, nemo aut eum
        asperiores distinctio laboriosam id architecto perspiciatis quis
        exercitationem magni. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Fugiat maiores nisi natus voluptate, ea officiis qui
        sunt. Ea, nemo aut eum asperiores distinctio laboriosam id architecto
        perspiciatis quis exercitationem magni.
      </Accordion>

      <h1 className="">Accordion Group Sample</h1>

      <AccordionGroup>
        <AccordionItem itemKey="1" title="Item 1">
          Item 1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          quaerat mollitia sit voluptatibus error. Sequi quae unde deleniti
          quaerat! Natus aut veniam deserunt dolore error delectus provident,
          voluptatem numquam ex.
        </AccordionItem>
        <AccordionItem itemKey="2" title="Item 2">
          Item 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, dolorem consequatur deleniti eius eaque laborum nostrum
          eligendi rem illum sunt asperiores perspiciatis incidunt saepe placeat
          porro officia labore tenetur. Delectus.
        </AccordionItem>
        <AccordionItem itemKey="3" title="Item 3">
          Item 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Neque error libero quia sequi magnam praesentium ducimus temporibus
          necessitatibus voluptates, cum modi architecto reiciendis dignissimos
          pariatur ratione ipsa dolores earum facilis.
        </AccordionItem>
      </AccordionGroup>
    </div>
  );
}
