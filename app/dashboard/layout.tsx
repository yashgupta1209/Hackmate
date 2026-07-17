import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1">
        {/* <div className="p-4 border-b">
          <SidebarTrigger />
        </div> */}

        <div className="p-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}