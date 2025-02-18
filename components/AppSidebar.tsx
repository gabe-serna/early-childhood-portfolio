import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DropdownGroup from "./DropdownGroup";
import { Brain, Home, Pin, Scroll } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="p-6">
      <SidebarHeader className="flex flex-row">
        Sidebar Header
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuButton asChild>
          <a href="#">
            <Home />
            <span>Home</span>
          </a>
        </SidebarMenuButton>
        <DropdownGroup title="Physical Health and Motor Development" />
        <DropdownGroup title="Social and Emotional Development" />
        <DropdownGroup title="Cognitive, Language & Literacy Development" />
        <SidebarMenuButton asChild>
          <a href="#">
            <Scroll />
            <span>Course Papers</span>
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <a href="#">
            <Brain />
            <span>Theory</span>
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <a href="#">
            <Pin />
            <span>Resume</span>
          </a>
        </SidebarMenuButton>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
