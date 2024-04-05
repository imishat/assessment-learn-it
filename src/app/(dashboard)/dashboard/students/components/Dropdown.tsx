import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Dropdown() {
  const components: { title: string; description: string }[] = [
    {
      title: "Alert Dialog",
      description: "Amin",
    },
    {
      title: "Hover Card",
      description: "Razibul",
    },
    {
      title: "Progress",
      description: "Mishat",
    },
    {
      title: "Scroll-area",
      description: "Raj",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Amin</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul>
            {components.map((component) => (
              <li key={component.title} className="my-1 cursor-pointer" title={component.title}>
                {component.description}
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
