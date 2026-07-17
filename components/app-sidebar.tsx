"use client";
import Link from "next/link";
import {
  Home,
  User,
  Users,
  Trophy,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Teams",
    url: "/dashboard/teams",
    icon: Users,
  },
  {
    title: "Hackathons",
    url: "/dashboard/hackathons",
    icon: Trophy,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];
export function AppSidebar() {
  return (
    <Sidebar collapsible="icon"
      className="relative"
      >
        <SidebarTrigger 
        className="
          absolute
          top-3
          right-0
          translate-x-1/2
          z-50
          h-8
          w-8
          rounded-full
          border
          bg-background
          shadow-sm"
        />
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link href={item.url}>
                  <item.icon className="!h-6 !w-6"/>
                  <span className="text-lg font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
