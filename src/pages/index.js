import DashboardLayout from "@/layouts/Dashboard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <DashboardLayout></DashboardLayout>;
}
